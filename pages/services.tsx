import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'
import Link from 'next/link'
import Service from '../components/Service'
import Container from '../components/Container'

export default function Services() {
  const services = [
    {
      title: 'Hand-written code',
      description:
        "I write the whole code by hand. Which means that you're able to read and understand the code easily.",
      imgUrl: '/handwritten-code.svg',
    },
    {
      title: 'Optamized Code',
      description:
        'I write completely optamized code. Which means that your website will load faster and will have high perpormance.',
      imgUrl: '/optamized-code.svg',
    },
    {
      title: 'SEO optamized code',
      description:
        'I write complete semantic code. My code ranks on SEO and your site will be on top in search results.',
      imgUrl: '/seo-optamized.svg',
    },
    {
      title: 'Creative Mockups',
      description:
        'I design modern and creative UI mockups. My mockups are eye catching and they will increase your customers exponentially.',
      imgUrl: '/mockup.svg',
    },
    {
      title: 'Mobile-Friendly Layout',
      description:
        "I'll design and code your site responsive. It means your website will look awesome both on PC and PHONE.",
      imgUrl: '/mobile-friendly.svg',
    },
  ]
  return (
    <>
      <Header />

      <StyledServices>
        <Container>
          <h1>My services</h1>
        </Container>
        <Container>
          {services.map((service, i) => (
            <Service key={i} index={i} service={service} />
          ))}
        </Container>
        <Container>
          <Button isFullWidth>
            <Link href="/contact">Contact me &rarr;</Link>
          </Button>
        </Container>
      </StyledServices>

      <Footer />
    </>
  )
}

const StyledServices = styled.section`
  h1 {
    font-size: 2.4rem;
    margin-bottom: 1rem;
  }
  & > div:nth-child(2) {
    padding: 1rem 0;
    display: grid;
    justify-content: center;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, 320px);
  }
  & > div > button {
    width: max(320px, 50%);
    margin: 2rem auto;
  }
`
