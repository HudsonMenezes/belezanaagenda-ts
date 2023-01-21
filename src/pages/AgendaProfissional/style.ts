import styled from "styled-components";
export const SectionStepThree = styled.section`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  background-color: #fff;

  .container-grid {
    display: grid;
    grid-template-columns: 1fr;
    min-height: 100vh;
  }
  .profissionalPicker {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
  }

  @media (min-width: 40rem) {
    .container-grid {
      grid-template-columns: 1fr 1fr;
    }

    .profissionalPicker {
      height: 100vh;
      justify-content: center;
    }
    .textStep {
      background-color: #ffc973;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .arrow {
      display: flex;
      flex-direction: column-reverse;
      width: 50vw;
      position: relative;
      bottom: 35vh;
      left: 50vw;
      margin-top: 1.8rem;
    }
    .backButton {
      position: relative;
      right: 7vw;
    }
  }
`;
