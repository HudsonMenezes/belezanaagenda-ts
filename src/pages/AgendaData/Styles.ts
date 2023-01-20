import styled from "styled-components";

export const TextoPasso = styled.p`
  font-size: 40px;
  color: #b9b9b9;
  line-height: 36px;
  letter-spacing: 1px;
  margin-top: 40px;

  span {
    font-size: 24px;
    color: #742092;
    font-weight: 700;
  }
  @media (max-width: 40rem) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 1rem;
  }
`;
export const SectionStepOne = styled.section`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  background-color: #fff;

  .container-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 865px;
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
    .datePicker {
      height: auto;
    }
    .step {
      position: relative;
      top: -9%;
    }
    .backButton {
      position: relative;
      top: -230px;
    }
  }
`;
