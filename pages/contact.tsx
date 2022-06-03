import styled from 'styled-components'
import Header from './components/Header'
import Footer from './components/Footer'
import Container from './components/Container'
import MyContactDetails from './components/MyContactDetails'
import ContactForm from './components/ContactForm'

export default function Work() {
  return (
    <>
      <Header />
      <section>
        <StyledContact>
          <h1>Get in touch</h1>
          <p>Contact me for a quote, I'll respond in 24 hrs</p>
          <MyContactDetails />
          <ContactForm />
        </StyledContact>
      </section>
      <Footer />
    </>
  )
}
const StyledContact = styled.section`
  max-width: 900px;
  margin: 1rem auto;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    text-align: center;
  }
`
