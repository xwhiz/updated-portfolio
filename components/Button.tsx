import styled from 'styled-components'

const primaryColor = '#349ff3'
const primaryColorDarked = '#2f8fdb'

export default styled.button<{
  isOutlined?: boolean
  isFullWidth?: boolean
}>`
  padding: 0.5rem 1rem;
  font-family: inherit;
  font-size: 1.2rem;
  font-weight: 500;
  border: 1px solid ${primaryColor};
  background-color: ${primaryColor};
  color: #fff;
  border-radius: 0.25rem;
  cursor: pointer;
  display: block;
  transition: all 200ms ease-out;

  &:hover {
    background-color: ${primaryColorDarked};
  }
  &:disabled {
    background-color: ${primaryColorDarked};
    opacity: 0.8;
    cursor: not-allowed;
  }

  ${(props) =>
    props.isOutlined === true &&
    `
    background-color: transparent;
    color: ${primaryColor};
    border: 1px solid ${primaryColor};
    &:hover {
        background-color: ${primaryColor};
        color: #fff;
    }
  `}
  ${(props) => props.isFullWidth && `width: 100%`}
`
