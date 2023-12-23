import { css } from "@emotion/react";

export const sliderContainerStyle = css`
  padding: 7.5vh 0;
  position: relative;
  --elem-height: 82.5%;
  .swiper-pagination-bullet {
    background-color: #ffffff;
  }
  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }
`;

export const sliderHeadingStyle = css`
  margin-left: 2.5%;
  font-family: var(--font-primary);
`;

export const sliderStyle = css`
  height: 35vw;
  width: 95%;
  border-radius: var(--bor-rad);
  .swiper-button-prev,
  .swiper-button-next {
    color: black;
  }
  .slides {
    border-radius: var(--bor-rad);
    background-color: rgb(24, 27, 33);
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 2.5vw;
    padding-right: 2.5vw;
    overflow: hidden;
    &::before {
      position: absolute;
      content: "";
      width: 800px;
      height: 800px;
      background-color: rgb(0, 0, 0);
      z-index: 0;
      bottom: -200px;
      right: -300px;
      border-radius: 50%;
    }
  }
  @media (max-width: 1200px) {
    height: 45vw;
    .slides {
      padding-left: 3vw;
      padding-right: 3vw;
    }
    @media (max-width: 900px) {
      height: 75vh;
      .slides {
        padding: 3.5vh 3vw;
        flex-direction: column;
        justify-content: start;
      }
      @media (max-width: 500px) {
        height: 80vh;
        .slides {
          justify-content: space-between;
        }
      }
    }
    @media (orientation: landscape) and (max-width: 900px) {
      .slides {
        height: 75vh;
        flex-direction: row;
        gap: 2vw;
      }
    }
  }
`;

export const sliderImgContainerStyle = css`
  width: 50%;
  height: var(--elem-height);
  border-radius: var(--bor-rad);
  overflow: hidden;
  @media (max-width: 1200px) {
    height: 30vh;
  }
  @media (max-width: 900px) {
    width: 95%;
    height: 50%;
    @media (max-width: 500px) {
      height: 42%;
    }
    @media (orientation: landscape) and (max-width: 900px) {
      height: 95%;
      width: 50%;
    }
  }
`;

export const sliderTextContainerStyle = css`
  width: 47.5%;
  z-index: 2;
  height: var(--elem-height);
  display: flex;
  flex-direction: column;
  h3 {
    font-size: clamp(4rem, 4.5vw, 5.25rem);
    @media (max-width: 1200px) {
      font-size: clamp(4rem, 4.5vw, 5.25rem);
    }
    text-transform: capitalize;
    color: #d1d4ff;
    margin-bottom: 20px;
  }
  p {
    font-size: clamp(0.75rem, 1.4vw, 1.75rem);
    @media (max-width: 1200px) {
      font-size: clamp(1rem, 1.6vw, 1.75rem);
    }
    color: var(--font-color-default);
    text-align: justify;
  }
  a {
    background-color: var(--font-color-default);
    text-decoration: none;
    font-size: clamp(1rem, 1.25vw, 1.4rem);
    color: black;
    padding: 0.75vw 2vw;
    font-weight: 600;
    display: flex;
    width: fit-content;
    border-radius: 0.5em;
    margin-top: auto;
    align-self: flex-end;
  }
  @media (max-width: 900px) {
    width: 95%;
    margin-top: 4vh;
    height: 40%;
    h3 {
      font-size: clamp(2.75rem, 10vw, 3.5rem);
      margin-bottom: 0;
    }
    p {
      font-size: 1rem;
    }
    a {
      padding: 1.25vw 3.75vw;
    }
    @media (max-width: 500px) {
      margin-top: 0;
      height: fit-content;
      h3 {
        font-size: 12vw;
      }
      a {
        margin-top: 10px;
      }
    }
    @media (orientation: landscape) {
      height: 95%;
      width: 47.5%;
      h3 {
        font-size: 5vw;
      }
      p {
        font-size: 1.75vw;
      }
      a {
        font-size: 1.75vw;
        padding: 1vw 2vw;
      }
    }
  }
`;

export const sliderBtnStyle = css`
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  color: rgb(209, 212, 255);
  background-color: transparent;
  outline: none;
  border: none;
  font-size: clamp(2rem, 3vw, 4rem);
  @media (max-width: 900px) {
    font-size: 2.25rem;
  }
  svg {
    cursor: pointer;
    filter: drop-shadow(0 0 5px #000000);
  }
  position: absolute;
  &.next-btn {
    right: 0;
  }
`;
