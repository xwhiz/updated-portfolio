import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import Container from './Container'
import useResponsive from '../hooks/useResponsive'

const primaryColor = '#349ff3'

export default function Footer() {
  const isMobile = useResponsive(600)
  return (
    <StyledFooter isMobile={isMobile}>
      <Container>
        <SocialLinks>
          <h3>Social links</h3>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://web.facebook.com/profile.php?id=100020512297430"
          >
            <Image alt="" src="/facebook.svg" width={25} height={25} /> facebook
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/hey.hamzu.786/"
          >
            <Image alt="" src="/instagram.svg" width={25} height={25} />{' '}
            instagram
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/HamzaKingmaker"
          >
            <Image alt="" src="/twitter.svg" width={25} height={25} /> twitter
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/hamza-student"
          >
            <Image alt="" src="/github.svg" width={25} height={25} /> github
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/channel/UCr707nULNs7aAHP8M8hANZQ"
          >
            <Image alt="" src="/youtube.svg" width={25} height={25} /> youtube
          </a>
        </SocialLinks>
        <Links>
          <h3>Links</h3>
          <Link href="/">Home</Link>
          <Link href="/work">My Work</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact Me</Link>
        </Links>
        <Copyrights>
          This page belong to Hamza &copy; {new Date().getFullYear()}.<br />{' '}
          This page is designed and developed by Hamza.
        </Copyrights>
      </Container>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer<{ isMobile: boolean }>`
  padding: 1.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  background-color: #3331;

  & > * {
    display: grid;
    align-items: start;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.4rem;

    ${(props) => props.isMobile && `grid-template-columns: auto`}
  }
`
const Copyrights = styled.p`
  flex-basis: 20ch;
  font-size: 1rem;
  color: #333;
`
const commonStyles = `
  display: flex;
  just-content: center;
  align-items: start;
  flex-direction: column;
  gap: 0.6rem;
  
  a {
    border-bottom: 2px solid transparent;
    transition: border 0.3s ease;
    &:hover {
      border-bottom: 2px solid ${primaryColor};
    }
  }
`
const Links = styled.div`
  ${commonStyles}
`
const SocialLinks = styled.div`
  ${commonStyles}

  a {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0 0.5rem;
  }
`
