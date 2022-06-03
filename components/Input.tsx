import styled from 'styled-components'

interface IFormData {
  fullName: string
  email: string
  phone: string
  message: string
}
interface IInput {
  label: string
  id: string
  placeholder: string
  type?: string
  isTextArea?: boolean
  onChange: React.ChangeEventHandler
  formData: IFormData
  disabled: boolean
}
export default function Input({
  label,
  id,
  placeholder,
  type,
  isTextArea,
  onChange,
  formData,
  disabled
}: IInput) {
  return (
    <FormControl>
      <label htmlFor={id}>{label}</label>
      {isTextArea ? (
        <textarea
          disabled={disabled}
          onChange={onChange}
          id={id}
          value={formData[id as keyof IFormData]}
          placeholder={placeholder}
        ></textarea>
      ) : (
        <input
          disabled={disabled}
          onChange={onChange}
          type={type}
          id={id}
          value={formData[id as keyof IFormData]}
          placeholder={placeholder}
          required
        />
      )}
    </FormControl>
  )
}
const FormControl = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
  label {
    margin-bottom: 0.5rem;
  }
  input,
  textarea {
    padding: 0.5rem 1rem;
    border: none;
    outline: none;
    border-radius: 0.5em;
    background-color: #f2f2f2;
    font-size: inherit;
    font-family: inherit;
    display: block;
    width: 100%;

    &:hover,
    &:focus {
      background-color: #ddd;
    }
    &:disabled {
      background-color: #ddd;
      opacity: 0.8;
      cursor: not-allowed;
    }
  }
  textarea {
    resize: none;
    min-height: 200px;
    padding: 1em;
  }
`
