import { createGlobalStyle } from "styled-components";
import light from "./themes/light";

export const Global = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 1 rem = 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 1 rem = 14px
    }
  }

  body {
    background-color: ${light.colors.background};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }


  .react-modal-overlay {
    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background-color: rgba(0, 0, 0, 0.5);
  }

  .react-modal-content {
    position: relative;
    width: 100%;
    max-width: 576px;
    padding: 3rem;

    border-radius: 0.25rem;

    background-color: ${light.colors.background};
  }

  .react-modal-close-button {
    position: absolute;
    background-color: transparent;

    border: 0;

    right: 1rem;
    top: 1rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
