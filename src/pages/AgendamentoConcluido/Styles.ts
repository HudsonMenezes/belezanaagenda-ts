import styled from "styled-components";

export const ConfirmImgStyle = styled.img`
  margin: 20px 0;
`;

export const CaminhoStyle = styled.p`
  font-size: 12px;
  padding-top: 1rem;
  text-align: left;
`;

export const BoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 21px;
  background-color: #f5f5f5;
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
    color: #c4c4c4;
  }
`;
