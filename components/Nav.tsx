import Link from 'next/link'
import styled from 'styled-components'

const primaryColor = '#349ff3'

export default function Nav() {
  const links = [
    { href: '/', text: 'Home' },
    { href: '/work', text: 'My work' },
    { href: '/services', text: 'Services' },
    { href: '/contact', text: 'Contact me' },
  ]
  return (
    <StyledNavList>
      {links.map((link) => (
        <li key={link.href}>
          <Link href={link.href}>{link.text}</Link>
        </li>
      ))}
    </StyledNavList>
  )
}
const StyledNavList = styled.ul`
  list-style: none;

  display: flex;
  align-items: center;
  gap: 0 1rem;
  font-size: 1.1rem;

  & > * {
    transition: border 0.3s ease;
    border-bottom: 2px solid transparent;
  }
  & > *:hover {
    border-bottom: 2px solid ${primaryColor};
  }
`
