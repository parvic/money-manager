import styled from "styled-components";
import { darken, transparentize } from "polished";

import light from "../themes/light";


export const Container = styled.form`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */

  h2 {
    color: ${light.colors.title};
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;
    border: 1px solid #d7d7d7;

    font-weight: 400;
    font-size: 1rem;

    background-color: #e7e9ee;
    
    border-radius: 0.25rem;

    &::placeholder {
      color: ${light.colors.text};
    }

    & + input {
      margin-top: 1rem;
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  margin: 1rem 0;
`;

interface RadioboxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: `${light.colors.green}`,
  red: `${light.colors.red}`,
}

export const RadioboxButton = styled.button<RadioboxProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 4rem;

  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;

  background-color: ${(props) => props.isActive ? transparentize(0.9, colors[props.activeColor])  : 'transparent'};

  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')}
  }

  img {
    height: 20px;
    width: 20px;
  }

  span {
    display: inline-block;
    color: ${light.colors.title};
    font-size: 1rem;
    margin-left: 1rem;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 4rem;
  margin-top: 1.5rem;

  background-color: ${light.colors.green};

  color: #fff;
  font-weight: 600;

  border: 0;
  border-radius: 0.25rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;