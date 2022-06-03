import styled from 'styled-components'

const black = '#333'

export default styled.button<{ isActive: boolean }>`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  z-index: 1;

  & span {
    display: block;
    width: 100%;
    height: 6px;
    background: ${black};
    border-radius: 2px;
    position: absolute;
    transition: all 0.3s ease;

    &:nth-child(1) {
      transform: ${(props) =>
        props.isActive ? `rotate(45deg)` : `translateY(-10px)`};
    }
    &:nth-child(2) {
      opacity: ${(props) => props.isActive && `0`};
    }
    &:nth-child(3) {
      transform: ${(props) =>
        props.isActive ? `rotate(-45deg)` : `translateY(10px)`};
    }
  }
`
