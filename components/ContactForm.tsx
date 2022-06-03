import styled from 'styled-components'
import Button from './Button'
import Image from 'next/image'
import Input from './Input'
import { useState } from 'react'

export default function ContactForm() {
  const fields = [
    {
      label: 'Full name',
      id: 'fullName',
      placeholder: 'e.g. John Doe',
      type: 'text',
    },
    {
      label: 'Your email',
      id: 'email',
      placeholder: 'e.g. john@doe.com',
      type: 'email',
    },
    {
      label: 'Phone',
      id: 'phone',
      placeholder: 'e.g. +92 333 23 23 233',
      type: 'tel',
    },
    {
      label: 'Message',
      id: 'message',
      placeholder: 'Your message...',
      isTextArea: true,
    },
  ]
  const formSparkKey = process.env.FORMSPARK_URL
  const [formSubmitted, setFormSubmitted] = useState(() => false)
  const [sending, setSending] = useState(() => false)
  const [formData, setFormData] = useState(() => {
    return {
      fullName: '',
      email: '',
      phone: '',
      message: '',
    }
  })

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement
    const newFormData = {
      ...formData,
      [target.id]: target.value,
    }
    setFormData(newFormData)
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formSparkKey) return
    setSending(true)
    await fetch(formSparkKey, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formData),
    })
    setSending(false)
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      message: '',
    })
    setFormSubmitted(true)
  }
  return (
    <StyledForm onSubmit={handleSubmit}>
      {fields.map((field) => (
        <Input
          key={field.id}
          formData={formData}
          onChange={handleChange}
          disabled={formSubmitted}
          {...field}
        />
      ))}
      <Button type="submit" disabled={formSubmitted}>
        {sending ? (
          <Image
            alt="spinner"
            src="/spinner.svg"
            loading="lazy"
            width={24}
            height={24}
          />
        ) : formSubmitted ? (
          'Submitted'
        ) : (
          <>Send message &rarr;</>
        )}
      </Button>
    </StyledForm>
  )
}

const StyledForm = styled.form`
  width: min(100%, 360px);
  margin-bottom: 1.5rem;
`
