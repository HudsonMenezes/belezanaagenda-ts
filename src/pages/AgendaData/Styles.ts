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
  min-height: 100vh;
  box-sizing: border-box;
  background-color: #fff;

  .container-grid {
    display: grid;
    grid-template-columns: 1fr;
    min-height: 100vh;
  }
  .datePicker {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }

  @media (min-width: 40rem) {
    .container-grid {
      grid-template-columns: 1fr 1fr;
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
      /* background-color: red; */
      width: 50vw;
      position: relative;
      bottom: 35vh;
      left: 50vw;
    }
    .backButton {
      position: relative;
      right: 7vw;
    }
  }
`;
