import styled from "styled-components";
import light from "../themes/light";

export const Container = styled.header`
  padding: 2rem 1rem 8rem;
  background-color: ${light.colors.blue};

  div{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    max-width: 1120px;
    margin: 0 auto;
  }

  button {
    font-size: 1rem;
    color: white;
    background-color: ${light.colors.blueDark};
    border: 0;
    padding: 0.5rem 1.5rem;
    border-radius:0.25rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;