import styled from "styled-components";

export const ConfirmImgStyle = styled.img`
  margin: 20px 0;
  width: 150px;
`;

// export const CaminhoStyle = styled.p`
//   font-size: 12px;
//   padding-top: 1rem;
//   text-align: left;
// `;

// export const BoxStyle = styled.div`
//   border-radius: 10px;
//   padding: 21px;
//   background-color: #d9d9d9;
//   box-shadow: 1px 2px 2px 1px rgba(219, 219, 219, 1);
//   width: 330px;
//   height: 206px;
//   margin-bottom: 40px;

//   .primeiraparte,
//   .segundaparte {
//     display: flex;
//     justify-content: space-around;
//   }

//   .primeiraparte {
//     text-align: left;
//   }
// `;

// export const ImgStyle = styled.img`
//   height: 58px;
// `;

// export const TextoStyle = styled.div`
//   p {
//     font-weight: bold;
//   }

//   span {
//     color: #626060;
//   }
// `;

// export const TextoPasso = styled.p`
//   font-size: 40px;
//   color: #b9b9b9;
//   line-height: 36px;
//   letter-spacing: 1px;
//   margin-top: 40px;

//   span {
//     font-size: 24px;
//     color: #742092;
//     font-weight: 700;
//   }
//   @media (max-width: 40rem) {
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     padding-left: 1rem;
//   }
// `;
export const Sectionsucess = styled.section`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  background-color: #742092;
  color: #fff;

  .container-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 865px;
  }
  .textStep {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: #c858ba;
    min-height: 90%;
  }
  .sucess {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .agenda {
    color: #ffc973;
  }
  .agDia,
  .agHorario {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .agDia,
  .agHorario > svg {
    font-size: 30px;
  }
  .btnSucess {
    background-color: #c858ba;
    color: #fff;
  }
  .btnSucess:hover,
  .btnSucess:focus {
    outline: none;
    box-shadow: 0 0 0 3px #c59, 0 0 0 4px #c49;
  }

  @media (max-width: 40rem) {
    .container-grid {
      grid-template-columns: 1fr;
    }
    .textStep {
      background-color: transparent;
      /* position: relative;
      bottom: -90%;
      right: 21%; */
    }
  }
`;
