import { css } from "@emotion/react";

export const productContainerStyle = css`
  display: flex;
  height: 300vh;
`;

export const productTextContainerStyle = css`
  width: 50%;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 5%;
`;

export const headingContainerStyle = css`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const productHeadingStyle = css`
  font-size: 5rem;
  margin-bottom: 2vh;
  color: var(--bg-col-primary);
`;

export const oneLinerStyle = css`
  font-size: 1.4rem;
`;

export const workingStyle = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const workingParaStyle = css`
  font-size: 1.4rem;
`;

export const workingHeadingStyle = css`
  font-size: 3rem;
  margin-bottom: 2vh;
  font-weight: 600;
  color: var(--bg-col-secondary);
`;

export const featuresContainerStyle = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    color: var(--bg-col-primary);
  }
`;

export const listStyle = css`
  li {
    margin: 2vh 0;
    h3 {
      font-size: 2rem;
    }
    p {
      font-size: 1.4rem;
    }
  }
`;

export const videoContainerStyle = css`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const videoStyle = css`
  width: 80%;
  position: sticky;
  top: 50vh;
  height: fit-content;
  transform: translateY(-50%);
`;

export const canvasStyle = css`
  width: 90%;
  height: 45vh;
  position: sticky;
  top: 50vh;
  transform: translateY(-50%);
`;
