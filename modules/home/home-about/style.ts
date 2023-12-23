import { css } from "@emotion/react";

export const homeAboutStyle = css`
  margin: 0 auto;
  width: 95%;
  background-color: var(--bg-col-primary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: var(--bor-rad);
  padding: 3vw;
  margin-bottom: 10vh;
  @media (width < 900px) {
    flex-direction: column;
  }
`;

export const aboutImgContainerStyle = css`
  width: 40vw;
  border-radius: var(--bor-rad);
  overflow: hidden;
  aspect-ratio: 4 / 3;
  background-color: red;
  @media (900px <= width <= 1200px) {
    aspect-ratio: 1;
  }
  @media (width < 900px) {
    width: 100%;
    aspect-ratio: 16 / 9;
  }
`;

export const aboutTextStyle = css`
  width: 45vw;
  font-size: var(--font-size-default);
  color: var(--font-color-default);
  line-height: 1.75em;
  @media (width < 900px) {
    width: 100%;
    margin-top: 4vh;
    text-align: justify;
  }
`;

export const aboutParaStyle = css`
  font-size: clamp(0rem, 1.2vw, 2rem);
  @media (width < 900px) {
    font-size: 1rem;
  }
`;
