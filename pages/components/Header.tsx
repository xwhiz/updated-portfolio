import styled from 'styled-components'
import Link from 'next/link'
import { useState } from 'react'
import Container from './Container'
import FloatingNav from './FloatingNav'
import MenuButton from './MenuButton'
import Nav from './Nav'
import useResponsive from './../hooks/useResponsive'

export default function Header() {
  const [isActive, setIsActive] = useState(false)
  const isMobile = useResponsive(500)
  const toggleMenu = () => {
    setIsActive(!isActive)
  }

  return (
    <StyledHeader>
      <Container>
        <StyledLogoText>
          <Link href="/">Hamza</Link>
        </StyledLogoText>
        {isMobile ? (
          <FloatingNav toggleMenu={toggleMenu} isActive={isActive} />
        ) : (
          <Nav />
        )}
        {isMobile && (
          <MenuButton isActive={isActive} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </MenuButton>
        )}
      </Container>
    </StyledHeader>
  )
}

const StyledLogoText = styled.p`
  display: block;
  font-family: inherit;
  font-size: 1.5rem;
  font-weight: bold;
`
const StyledHeader = styled.header`
  box-shadow: 0 2px 0.5rem rgba(0, 0, 0, 0.2);

  & > * {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
`
