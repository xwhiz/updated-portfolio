import styled from 'styled-components'
import Link from 'next/link'
import { primaryColorLighted } from '../data/colors'
import Button from './Button'

export default function FloatingNav({
  isActive,
  toggleMenu,
}: {
  isActive: boolean
  toggleMenu: React.MouseEventHandler
}) {
  const links = [
    { href: '/', text: 'Home' },
    { href: '/work', text: 'My work' },
    { href: '/services', text: 'Services' },
    { href: '/contact', text: 'Contact me' },
  ]
  return (
    <StyledFloatingUl isActive={isActive}>
      {links.map((link) => (
        <li key={link.href} onClick={toggleMenu}>
          <Link href={link.href}>{link.text}</Link>
        </li>
      ))}
    </StyledFloatingUl>
  )
}
const StyledFloatingUl = styled.ul<{
  isActive: boolean
}>`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  list-style: none;
  width: 100%;
  height: 100vh;
  background-color: ${primaryColorLighted};
  transition: all 200ms ease-out;
  transform: translateX(-100%);
  opacity: 0;
  visibility: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem 0;

  font-size: 1.8rem;
  padding: 2rem 1rem;
  color: #fff;

  & a {
    padding: 0.5rem 0;

    &:hover {
      border-bottom: 2px solid #fff;
    }
  }

  ${(props) =>
    props.isActive &&
    `
    transform: translateX(0);
    opacity: 1;
    visibility: visible;
  `}
`
