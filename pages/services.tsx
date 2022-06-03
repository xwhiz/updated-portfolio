import styled from 'styled-components'
import Header from './components/Header'
import Footer from './components/Footer'
import services from './data/services'
import Button from './components/Button'
import Link from 'next/link'
import Service from './components/Service'
import Container from './components/Container'

export default function Services() {
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
