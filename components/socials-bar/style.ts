import { css } from "@emotion/react";

export const socialsBarStyle = css`
  position: fixed;
  right: 50px;
  display: flex;
  flex-direction: column;
  z-index: 5;
  top: 50%;
  transform: translateY(-50%);
`;

export const socialsStyle = css`
  background-color: var(--bg-col-primary);
  margin: 7.5px 0;
  /* padding: 5px; */
  height: 60px;
  width: 60px;
  border-radius: 50%;
  position: relative;
  svg {
    font-size: 2.25rem;
    color: var(--font-color-default);
    scale: 0.7;
    height: 100%;
    width: 100%;
  }
  span {
    position: absolute;
    font-size: var(--font-size-default);
    color: var(--font-color-default);
    transform: translate(-50%, -50%);
    top: 50%;
    background-color: var(--bg-col-secondary);
    padding: 5px;
    border-radius: 5px;
    font-weight: 500;
    opacity: 0;
    transition: var(--transition-default);
  }
  &:hover {
    span {
      display: block;
      opacity: 1;
      top: 50%;
      transform: translate(-110%, -50%);
    }
  }
`;
