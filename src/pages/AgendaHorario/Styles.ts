import styled from "styled-components";

export const ConfirmImgStyle = styled.img`
  margin: 20px 0;
  width: 150px;
`;

export const CaminhoStyle = styled.p`
  font-size: 12px;
  padding-top: 1rem;
  text-align: left;
`;

export const BoxStyle = styled.div`
  border-radius: 10px;
  padding: 21px;
  background-color: #d9d9d9;
  box-shadow: 1px 2px 2px 1px rgba(219, 219, 219, 1);
  width: 330px;
  height: 206px;
  margin-bottom: 40px;

  .primeiraparte,
  .segundaparte {
    display: flex;
    justify-content: space-around;
  }

  .primeiraparte {
    text-align: left;
  }
`;

export const ImgStyle = styled.img`
  height: 58px;
`;

export const TextoStyle = styled.div`
  p {
    font-weight: bold;
  }

  span {
    color: #626060;
  }
`;
export const SectionStepTwo = styled.section`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  background-color: #fff;

  .container-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 865px;
  }
  .hourPicker {
    margin-top: 20px;
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
    .hourPicker {
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
