import type { NextPage } from 'next'
import Link from 'next/link'
import PageHead from './components/PageHead'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Button from './components/Button'
import Container from './components/Container'
import styled from 'styled-components'

const Home: NextPage = () => {
  return (
    <>
      <PageHead title="Hamza Portfolio" />
      <Header />
      <Hero />
      <section>
        <StyledContainer>
          <Button isFullWidth>
            <Link href="/work">See my work &rarr;</Link>
          </Button>
        </StyledContainer>
      </section>
      <Footer />
    </>
  )
}
const StyledContainer = styled(Container)`
  button {
    width: max(320px, 50%);
    margin: 2rem 0;
  }
`

export default Home

