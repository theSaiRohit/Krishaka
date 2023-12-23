import { css } from "@emotion/react";

export const homeCarouselStyle = css`
  height: 100vh;
  position: relative;
  --heading-height: 50vh;
  overflow-x: hidden;
`;

export const homeBgContainerStyle = css`
  height: 100%;
  width: 100%;
  position: absolute;
  inset: 0;
  z-index: 0;
  filter: brightness(0.4) saturate(2);
`;

export const landingTextStyle = css`
  position: absolute;
  height: calc(100vh - var(--heading-height));
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: calc(1.75 * var(--header-height));
`;

export const spanContainerStyle = css`
  height: 80%;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const spanStyle = css`
  font-size: 8vw;
  display: block;
  font-weight: 900;
  min-height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
  animation: slide-up 10s ease-in-out infinite;
  animation-fill-mode: backwards;
  @keyframes slide-up {
    0% {
      transform: translateY(0);
    }
    15% {
      transform: translateY(0);
    }
    25% {
      transform: translateY(-100%);
    }
    40% {
      transform: translateY(-100%);
    }
    50% {
      transform: translateY(-200%);
    }
    65% {
      transform: translateY(-200%);
    }
    75% {
      transform: translateY(-300%);
    }
    90% {
      transform: translateY(-300%);
    }
    100% {
      transform: translateY(-400%);
    }
  }
`;

export const companyHeadingStyle = css`
  height: var(--heading-height);
  width: 100%;
  border-top-left-radius: 50%;
  border-top-right-radius: 50% 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 2;
  position: absolute;
  bottom: 0;
  color: var(--bg-col-primary);
  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 120%;
    top: 50%;
    left: 50%;
    z-index: -1;
    transform: translate(-50%, -50%);
    background-color: var(--bg-col-secondary);
    border-top-right-radius: 50% 100%;
    border-top-left-radius: 50% 100%;
    @media only screen and (max-width: 900px) {
      border-top-right-radius: 100% 100%;
      border-top-left-radius: 100% 100%;
    }
  }
  h1 {
    font-size: 13vw;
    font-weight: 700;
    text-transform: uppercase;
    padding-top: 50px;
    @media only screen and (max-width: 900px) {
      font-size: 17vw;
    }
    @media (orientation: landscape) {
      font-size: 9.5vw;
      padding-top: 0;
    }
  }
  span {
    font-size: clamp(1rem, 1.75vw, 2rem);
    font-weight: 500;
    text-align: center;
    @media (max-width: 900px) {
      font-size: clamp(1rem, 3vw, 2rem);
      width: 85%;
    }
    @media (max-width: 900px) and (orientation: landscape) {
      font-size: 1rem;
    }
  }
`;
