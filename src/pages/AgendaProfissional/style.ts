import styled from "styled-components";
export const SectionStepThree = styled.section`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  background-color: #fff;

  .container-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 865px;
  }
  .reative {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .textStep {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffc973;
    min-height: 90%;
  }

  @media (max-width: 40rem) {
    .container-grid {
      grid-template-columns: 1fr;
    }
    .textStep {
      background-color: transparent;
      position: relative;
      bottom: -90%;
      right: 21%;
    }

    .profissionalPicker {
      height: auto;
    }
    .step {
      position: relative;
      top: -11%;
    }
    .backButton {
      position: relative;
      top: -230px;
    }
  }
`;
