import { css } from "@emotion/react";

export const formStyle = css`
  display: flex;
  flex-direction: column;
  row-gap: 1vh;
`;

export const inputStyle = css`
  border: none;
  font-family: inherit;
  font-size: 1rem;
  padding: 0.5em 0;
  border-bottom: 2px solid black;
  background-color: transparent;
  &::placeholder {
    color: #5d5d5d;
  }
  &:focus {
    outline: none;
    border-bottom-color: #ff002b;
  }
`;

export const submitBtnStyle = css`
  border: none;
  border-radius: var(--bor-rad);
  padding: 0.5em 2em;
  width: fit-content;
  font-family: inherit;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 2.5vh;
`;

export const textareaStyle = css`
  background-color: transparent;
  border: none;
  width: 100%;
  font-family: inherit;
  font-size: 1rem;
  padding: 0.5em 0;
  /* height: 4vh; */
  border-bottom: 2px solid black;
  resize: none;
  &::placeholder {
    color: #5d5d5d;
  }
  &:focus {
    outline: none;
    border-bottom-color: #ff002b;
  }
`;
