import { css } from "@emotion/react";

export const homeContactStyle = css`
  padding: 2.5vh;
  display: grid;
  place-items: center;
  margin-bottom: 10vh;
`;

export const contactContainerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-col-primary);
  border-radius: var(--bor-rad);
  height: fit-content;
  width: 95%;
  padding: 4em;
  @media (width <= 600px) {
    padding: 2em;
  }
`;

export const homeContactParaStyle = css`
  color: var(--font-color-default);
  font-size: 1.4rem;
`;

export const homeContactButtonStyle = css`
  background-color: var(--font-color-default);
  text-decoration: none;
  font-size: 1.2rem;
  color: black;
  font-weight: 600;
  display: flex;
  align-items: center;
  width: fit-content;
  border-radius: 0.5em;
  gap: 1vw;
  margin-top: 4vh;
  padding: 1rem 2.5rem;
  @media (width <= 600px) {
    padding: 1.25vw 3.5vw;
  }
`;
