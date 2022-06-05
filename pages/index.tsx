import type { NextPage } from 'next'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import PageHead from '../components/PageHead'

const Home: NextPage = () => {
  return (
    <>
      <PageHead title="Hamza Portfolio" />
      <Header />
      <Hero />
      <Footer />
    </>
  )
}

export default Home

