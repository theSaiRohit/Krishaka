import { css } from "@emotion/react";

export const teamContainerStyle = css`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const cardsContainerStyle = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2vw;
  @media (width <= 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (width <= 400px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const memberCardStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const imgLinkStyle = css`
  margin: 70px;
  rotate: 45deg;
  border-radius: var(--bor-rad);
  overflow: hidden;
  width: 15vw;
  @media (width <= 1200px) {
    width: 20vw;
  }
`;

export const memberImgContainerStyle = css`
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  padding-left: 10%;
  transform: rotate(-45deg) scale(1.4);
  .profile-pic {
    height: 100%;
    aspect-ratio: 1;
  }
`;

export const memberTextContainerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const memberNameStyle = css`
  font-size: 2rem;
  font-weight: 500;
  width: fit-content;
`;

export const positionStyle = css`
  width: fit-content;
  font-size: 1.2rem;
  color: gray;
  font-weight: 600;
`;

export const socialIconsStyle = css`
  font-size: 2rem;
  margin: 20px 15px;
  color: var(--bg-col-primary);
`;
