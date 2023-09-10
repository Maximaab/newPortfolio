import {theme} from "../../../styles/Theme";
import styled, {css} from "styled-components";

//menu
const Link = styled.a`
  text-align: center;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 30px;
  font-weight: 400;
  color: transparent;
  `
const Mask = styled.span`
  position: absolute;

  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow: hidden;
  color: ${theme.colors.accent};

  & + & {
    top: 50%;

    span {
      transform: translateY(-50%);
      display: inline-block;
    }
  }
`

const MenuItem = styled.li`
    position: relative;

  &::before {
    content: "";
    display: inline-block;
    height: 3px;
    background-color: ${theme.colors.accent};

    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;

    transform: scale(0);
    }
  
  &:hover {
    &::before {
      transform: scale(1);
    }
    
    ${Mask} {
      transform: skewX(12deg) translateX(5px);
      color: ${theme.colors.font};
      
      & + ${Mask} {
      transform: skewX(12deg) translateX(-5px);
    }
    }
    
  }
`
//mobile

const MobileMenu = styled.nav`
  
`
const MobileMenuPopup = styled.div<{isOpen: boolean}>`
  background: rgba(31, 31, 32, 0.9);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 99999;
  display: none;
  
  ${props => props.isOpen && css<{isOpen: boolean}>`
display: flex;
    justify-content: center;
    align-items: center;
  `}

  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`

const BurgerButton = styled.button<{isOpen: boolean}>`
position: fixed;
  width: 200px;height: 200px;
  top:-100px;
  right: -100px;
  z-index: 9999999;
  
  span {
    display: block;
    height: 2px;
    width: 36px;
    background-color: ${theme.colors.font};
    position: absolute;
    left: 40px;
    bottom: 50px;

    ${props => props.isOpen && css<{isOpen: boolean}>`
      background-color: rgba(255, 255, 255, 0);
    `}
    
    &::before {
      content: "";
      display: block;
      height: 2px;
      width: 36px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{isOpen: boolean}>`
        transform: rotate(-45deg) translateY(0);
    `}
    }
    
    &::after {
      content: "";
      display: block;
      height: 2px;
      width: 24px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(10px);

      ${props => props.isOpen && css<{isOpen: boolean}>`
        transform: rotate(45deg) translateY(0);
        width: 36px;
    `}
    }
  }
`
//desk top

const DesktopMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }

 
`
export const S =  {
    MenuItem,
    Link,
    Mask,
    MobileMenu,
    BurgerButton,
    MobileMenuPopup,
    DesktopMenu,

}