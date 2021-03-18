import styled from "styled-components";
import light from "../themes/light";

export const Container = styled.div`
  margin-top: 4rem;
  
  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    
    th {
      padding: 1rem 2rem;

      color: ${light.colors.text};
      line-height: 1.5rem;
      font-weight: 400;
      text-align: left;
      }
    
    td {
      background-color: ${light.colors.mainShape};
      padding: 1rem 2rem;
      border: 0;
      border-radius: 0.25rem;

      color: ${light.colors.text};

      &:first-child {
        color: ${light.colors.title};
      }
    }
  }
`;