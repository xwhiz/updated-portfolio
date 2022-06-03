import styled from 'styled-components'
import Button from './Button'
import Image from 'next/image'

interface IWork {
  title: string
  description: string
  imgSrc: string
  url: string
  languages: string[]
  size: { width: number; height: number }
}
export default function SingleWork({ work }: { work: IWork }) {
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
        <a rel="noreferrer" target="_blank" href={work.url}>
          Visit site
        </a>
      </Button>
    </StyledArticle>
  )
}
const StyledArticle = styled.article`
  width: 100%;
  padding: 0.8rem 1.2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;

  h2 {
    font-size: 2rem;
    margin: 0.4rem 0 0.8rem 0;
  }
  p {
    margin-bottom: 1rem;
  }
`
