import { css } from "@emotion/react";

export const footerStyle = css`
  padding: 50px 0;
  background-color: var(--bg-col-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  border-top-right-radius: var(--bor-rad);
  border-top-left-radius: var(--bor-rad);
  font-size: var(--font-size-default);
`;

export const footerMainStyle = css`
  --grid-cols: 4;
  width: 80%;
  display: flex;
  justify-content: center;
  color: var(--font-color-default);
  display: grid;
  grid-template-columns: repeat(var(--grid-cols), 1fr);
  @media only screen and (max-width: 1200px) {
    --grid-cols: 2;
    row-gap: 50px;
    column-gap: 40px;
  }
  @media only screen and (max-width: 600px) {
    --grid-cols: 1;
    row-gap: 50px;
    column-gap: 40px;
  }
`;

export const companyBriefStyle = css`
  a {
    font-size: 3rem;
    color: var(--bg-col-secondary);
    text-decoration: none;
    font-weight: 700;
    transition: var(--transition-default);
    &:hover {
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    }
  }
  .description {
    margin-bottom: 5vh;
    display: block;
  }
`;

export const socialsStyle = css`
  span {
    display: block;
    margin-bottom: 1vh;
    color: var(--bg-col-secondary);
  }
`;

export const socialsIconsStyle = css`
  display: flex;
  justify-content: space-between;
  width: 80%;
  align-items: center;
  & > a {
    display: grid;
    place-items: center;
    font-size: var(--font-size-secondary);
    color: inherit;
    transition: var(--transition-default);
    &:hover {
      filter: drop-shadow(0 0 10px var(--bg-col-secondary));
    }
  }
`;

export const productsStyle = css`
  display: flex;
  flex-direction: column;
  padding-left: 3em;
  span {
    display: block;
    font-weight: 600;
    font-size: var(--font-size-tertiary);
    line-height: 2em;
    color: var(--bg-col-secondary);
  }
  a {
    text-decoration: underline;
    text-underline-offset: 5px;
    text-decoration-color: transparent;
    color: inherit;
    line-height: 1.75em;
    transition: var(--transition-default);
    width: fit-content;
    &:hover {
      text-decoration-color: var(--bg-col-secondary);
    }
  }
  @media only screen and (max-width: 1200px) {
    padding-left: 0;
  }
`;

export const contactStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > div {
    padding: 0.5em 0;
    display: grid;
    align-items: center;
    grid-template-columns: 15% 80%;
    a {
      color: inherit;
      text-underline-offset: 5px;
      text-decoration-color: transparent;
      color: inherit;
      line-height: 1.75em;
      transition: var(--transition-default);
      width: fit-content;
      &:hover {
        text-decoration-color: var(--bg-col-secondary);
      }
    }
    svg {
      font-size: 1.75rem;
      color: var(--bg-col-secondary);
    }
  }
`;

export const footerTextStyle = css`
  width: 100%;
  display: grid;
  place-items: center;
  span {
    user-select: none;
    display: block;
    font-size: 15.5vw;
    font-weight: 600;
    background: linear-gradient(var(--font-color-default), #5eb881, var(--bg-col-primary));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media only screen and (max-width: 600px) {
      font-weight: 800;
    }
  }
`;
