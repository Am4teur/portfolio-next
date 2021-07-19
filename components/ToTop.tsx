import React from 'react';
import styled, { css } from 'styled-components';
//import arrowTop from '../styles/svg/chevron-up-solid.svg';
import styles from '../styles/Layout.module.scss';

import useScrollPosition from "./Effects/useScrollPosition";

export default function ToTop() {
  const scrollPosition : number = useScrollPosition();
  const arrowTop = <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-up" className={styles.arrowTop} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path></svg>;
  //TODO import svg file instead of using a var, webpack rules need to be change...

  const goToTop = () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return <>
  {scrollPosition > 500 //TODO this needs to not be hardcoded, via <a href=...> or something
    ?
    <Button onClick={goToTop} show>{arrowTop}</Button>
    :
    <Button onClick={goToTop}>{arrowTop}</Button>
    }
  </>
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #007acc;
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  font-size: 16px;
  line-height: 48px;
  width: 60px;
  height: 60px;

  position: fixed;
  bottom: 30px;
  right: 30px;

  z-index: 2;

  opacity: 0;

  transform: translateY(100px);

  transition: all .4s ease;

  ${props => props.show && css`
    opacity: 1;
    transform: translateY(0);
  `}

  &:hover {

    background: #005c99; // HSL #007acc 60% dark => HSL #005c99 30% dark
  }
`;