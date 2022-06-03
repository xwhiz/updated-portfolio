import styled from 'styled-components'
import PageHead from './components/PageHead'
import Header from './components/Header'
import SingleWork from './components/SingleWork'
import Footer from './components/Footer'
import works from './data/works'
import Container from './components/Container'
import Button from './components/Button'
import Link from 'next/link'

export default function Work() {
  return (
    <>
      <PageHead title="Hamza | Work" />
      <Header />
      <WorkContainer>
        <Container>
          <h1>My Work</h1>
        </Container>
        <Container>
          {works.map((work, i) => (
            <SingleWork key={i} work={work} />
          ))}
        </Container>
        <Container>
          <Button isFullWidth>
            <Link href="/services">See my services &rarr;</Link>
          </Button>
        </Container>
      </WorkContainer>
      <Footer />
    </>
  )
}
const WorkContainer = styled.section`
  & > div:nth-child(2) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    justify-content: center;
    gap: 1.5rem;
  }
  h1 {
    font-size: 2.4rem;
    margin-bottom: 1rem;
  }
  & > div > button {
    width: max(320px, 50%);
    margin: 2rem auto;
  }
`
