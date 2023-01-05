import styled from "styled-components";

export const ProfissionalStyle = styled.section`
  margin-top: 1rem;
  width: 100%;
  :last-child {
    margin-bottom: 5rem;
  }

  > div {
    display: flex;
    justify-content: space-around;
    border: 1px solid #000000;
    border-radius: 4px;
    padding: 1rem;
    align-items: center;

    img {
      height: 59px;
    }
  }
`;
