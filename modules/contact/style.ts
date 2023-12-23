import { css } from "@emotion/react";

export const contactSectionStyle = css`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10vh;
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    padding-top: calc(10vh + var(--header-height));
    padding-bottom: 10vh;
  }
`;

export const contactImageStyle = css`
  height: 600px;
  width: 375px;
  border-radius: var(--bor-rad);
  overflow: hidden;
  @media only screen and (max-width: 1200px) {
    height: 30vh;
    width: 95%;
  }
`;

export const contactHeadingStyle = css`
  font-size: 5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 4vh;
  @media only screen and (max-width: 1200px) {
    margin-top: 5vh;
  }
  @media only screen and (max-width: 1200px) {
    font-size: clamp(2rem, 15vw, 4rem);
  }
`;

export const infoWrapperStyle = css`
  display: flex;
  flex-direction: column;
  row-gap: 2vh;
  @media only screen and (max-width: 1200px) {
    order: -1;
    margin-bottom: 5vh;
  }
`;

export const infoContainerStyle = css`
  display: flex;
  flex-direction: column;
  width: 300px;
  @media only screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const textContainerStyle = css`
  display: flex;
  column-gap: 10vh;
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 500px) {
    padding: 0 0.5em;
  }
`;

export const infoTitleStyle = css`
  font-weight: 600;
  margin-bottom: 5px;
`;
