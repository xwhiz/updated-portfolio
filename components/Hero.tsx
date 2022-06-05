import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import useResponsive from '../hooks/useResponsive'
import Button from './Button'
import Container from './Container'

export default function Hero() {
  const isMobile = useResponsive(768)

  return (
    <StyledSection isMobile={isMobile}>
      <Container>
        <SectionRight>
          <h1>Hello, I&apos;m Hamza</h1>
          <h2>UI/UX Designer and Developer</h2>
          <p>
            I create clean, decent, modern and attractive layouts for your
            design.
          </p>
          <StyledContainer>
            <Button>
              <Link href="/contact">Hire Me</Link>
            </Button>
            <Button isOutlined>
              <Link href="/work">See my work &rarr;</Link>
            </Button>
          </StyledContainer>
        </SectionRight>
        <SectionLeft>
          <StyledImage
            priority
            placeholder="blur"
            blurDataURL="/blurData.png"
            src="/hamza-4-cropped.png"
            alt="Hero"
            width={433}
            height={433}
          />
        </SectionLeft>
      </Container>
    </StyledSection>
  )
}

const StyledSection = styled.section<{ isMobile: boolean }>`
  & > * {
    min-height: 70vh;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;

    ${(props) =>
      props.isMobile &&
      `
      grid-template-columns: auto;
    `}
  }
`
const SectionRight = styled.section`
  h1 {
    max-width: 10ch;
    font-size: 3rem;
    margin-bottom: 1rem;
    line-height: 1;
    color: #555;
  }
  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
    color: #555;
  }
  p {
    margin-bottom: 0.8rem;
  }
`
const SectionLeft = styled.section``
const StyledImage = styled(Image)`
  border-radius: 0.5rem;
  object-fit: cover;
`
const StyledContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`
