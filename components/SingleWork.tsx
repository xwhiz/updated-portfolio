import styled from 'styled-components'
import Button from './Button'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Link from 'next/link'

interface IWork {
  title: string
  description: string
  imgSrc: string
  url: string
  languages: string[]
  size: { width: number; height: number }
}
export default function SingleWork({ work }: { work: IWork }) {
  // const router = useRouter()

  useEffect(() => {}, [])
  return (
    <StyledArticle>
      <div>
        <Image
          src={work.imgSrc}
          alt=""
          placeholder="blur"
          blurDataURL="/blurData.png"
          width={work.size.width}
          height={work.size.height}
          layout="responsive"
          loading="lazy"
        />
      </div>
      <h2>{work.title}</h2>
      <p>{work.description}</p>
      <Button>
        <Link href={work.url}>
          <a target="_blank">Visit site &rarr;</a>
        </Link>
      </Button>
    </StyledArticle>
  )
}
const StyledArticle = styled.article`
  width: 100%;
  padding: 0.8rem 1.2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  transition: opacity 0.25s ease, box-shadow 0.25s ease;

  display: flex;
  flex-direction: column;

  opacity: 0.85;

  &:hover {
    opacity: 1;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
      0 8px 10px -6px rgb(0 0 0 / 0.1);
  }

  h2 {
    font-size: 2rem;
    margin: 0.4rem 0 0.8rem 0;
  }
  p {
    margin-bottom: 1rem;
  }
  button {
    margin-top: auto;
  }
`
