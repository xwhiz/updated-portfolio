import Link from 'next/link'
import styled from 'styled-components'

const primaryColor = '#349ff3'

export default function Nav({ active }: { active: string }) {
  const links = [
    { href: '/', text: 'Home' },
    { href: '/work', text: 'My work' },
    { href: '/services', text: 'Services' },
    { href: '/contact', text: 'Contact me' },
  ]
  const modifiedLinks = links.map((link) => {
    const condition = link.text.toLowerCase().includes(active)
    return { ...link, active: condition }
  })
  return (
    <StyledNavList>
      {modifiedLinks.map((link) => (
        <StyledListItem key={link.href} isActive={link.active}>
          <Link href={link.href}>{link.text}</Link>
        </StyledListItem>
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

  li a {
    font-weight: inherit;
  }
`
const StyledListItem = styled.li<{ isActive: boolean }>`
  transition: border 0.3s ease;
  border-bottom: 2px solid transparent;

  ${(props) =>
    props.isActive &&
    `
    font-weight: bold;
     a {
       font-weight: bold;
     }`}
  &:hover {
    border-bottom: 2px solid ${primaryColor};
  }
`
