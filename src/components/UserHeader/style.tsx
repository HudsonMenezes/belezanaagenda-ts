import styled from "styled-components";

const UserHeaderStyle = styled.div`
  h1 {
    color: #b9b9b9;
    font-size: 30px;
    font-weight: 300;
    letter-spacing: 1px;
  }
  span {
    color: #742092;
    font-size: 24px;
    font-weight: 700;
  }
  .title-step {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 2rem;
    margin-top: 1rem;
  }
  @media (min-width: 40rem) {
    .title-step {
      position: relative;
      bottom: 12vh;
      align-items: center;
    }
  }
`;
export { UserHeaderStyle };
