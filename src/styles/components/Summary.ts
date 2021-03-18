import styled from "styled-components";

import light from "../themes/light";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; //repeat(3, 1fr)
  gap: 2rem;

  margin-top: -6rem;

  div {
    background-color: ${light.colors.mainShape};
    padding: 1.5rem;
    border-radius: 0.25rem;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;

      font-size: 2rem;
      font-weight: 500;
    }

    &.total {
      color: #fff;
      background-color: ${light.colors.green};
    }
  }
`;