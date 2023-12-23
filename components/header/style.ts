import { css } from "@emotion/react";

export const headerStyle = css`
  --horizontal-padding: 8vw;
  z-index: 5;
  height: var(--header-height);
  min-height: 7.75vh;
  width: var(--header-width);
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--horizontal-padding);
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  top: 4vh;
  border-radius: var(--bor-rad);
  @media only screen and (max-width: 1200px) {
    --horizontal-padding: 5em;
    @media (orientation: landscape) {
      height: 50px;
    }
  }
  @media only screen and (max-width: 600px) {
    --horizontal-padding: 1em;
    top: 1.5vh;
  }
`;

export const hamburgerStyle = css`
  @media only screen and (max-width: 900px) {
    cursor: pointer;
    --hamburger-height: 2.5vh;
    height: var(--hamburger-height);
    width: clamp(30px, 7vw, 60px);
    @media (orientation: landscape) {
      --hamburger-height: 4.5vh;
      z-index: 1;
      width: clamp(30px, 4vw, 60px);
    }
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: var(--transition-default);
    .lines {
      height: 15%;
      width: 100%;
      @media (orientation: landscape) {
        height: 3px;
      }
      background-color: var(--bg-col-secondary);
      border-radius: var(--bor-rad);
      transition: var(--transition-default);
    }
    &.hamburger-active {
      .lines {
        &._1 {
          transform-origin: center;
          transform: translateY(calc((var(--hamburger-height) / 2) - 2 * 15%)) rotate(45deg);
        }
        &._3 {
          transform-origin: center;
          transform: translateY(calc((-1 * var(--hamburger-height) / 2) + 2 * 15%)) rotate(-45deg);
        }
        &:nth-of-type(2) {
          transform: scaleX(0);
        }
      }
    }
  }
`;

export const logoContainerStyle = css`
  height: 60%;
  aspect-ratio: 1;
  transition: var(--transition-default);
  &:hover {
    scale: 1.1;
    filter: drop-shadow(0 0 10px var(--bg-col-secondary));
  }
`;

export const navContainerStyle = css`
  width: clamp(300px, 35vw, 600px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    position: relative;
    font-size: clamp(1rem, 1.35vw, 2rem);
    @media only screen and (max-width: 900px) {
      font-size: clamp(1.5rem, 5vw, 2rem);
      @media (orientation: landscape) {
        font-size: clamp(1rem, 2vw, 1.5rem);
      }
    }
    color: var(--font-color-default);
    font-weight: 500;
    text-decoration: underline;
    text-underline-offset: 5px;
    text-decoration-color: transparent;
    animation: fade-in 0.3s linear;
    animation-fill-mode: both;
    transition: var(--transition-default);
    &:hover {
      text-decoration-color: var(--bg-col-secondary);
    }
    &:nth-of-type(2) {
      animation-delay: 0.15s;
    }
    &:nth-of-type(3) {
      animation-delay: 0.3s;
    }
    &:nth-of-type(4) {
      animation-delay: 0.45s;
    }
  }
  @keyframes fade-in {
    0% {
      transform: translate(0, 20px);
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translate(0, 0);
    }
  }
  @media only screen and (max-width: 900px) {
    background-color: black;
    position: absolute;
    height: calc(75vh - var(--header-height));
    width: var(--header-width);
    left: 50%;
    transform: translate(-50%, 0);
    top: calc(var(--header-height) + 6vh);
    border-radius: var(--bor-rad);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    transition: all 0.4s ease-in-out;
    touch-action: none;
    &.nav-container-inactive {
      transform: translate(-50%, -150%);
      opacity: 0;
    }
  }
`;

export const productsStyle = css`
  position: relative;
  & > a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    margin: 10px 0;
    text-decoration: none;
    svg {
      transition: var(--transition-default);
      color: var(--bg-col-secondary);
      @media only screen and (max-width: 900px) {
        color: var(--bg-col-primary);
      }
    }
  }
  .pop-up {
    display: none;
    background-color: var(--bg-col-secondary);
    z-index: 2;
    @media only screen and (max-width: 900px) {
      background-color: var(--bg-col-primary);
    }
  }
  &:hover {
    & > a {
      text-decoration: none;
      svg {
        rotate: 180deg;
      }
    }
    .pop-up {
      position: absolute;
      display: flex;
      flex-direction: column;

      border-radius: var(--bor-rad);
      padding: 25px;
      transform: translate(-50%, 0);
      left: 50%;
      width: 160%;
      a {
        line-height: 1.5em;
        &:hover {
          text-decoration-color: var(--bg-col-primary);
          @media only screen and (max-width: 900px) {
            text-decoration-color: var(--bg-col-secondary);
          }
        }
      }
    }
  }
`;
