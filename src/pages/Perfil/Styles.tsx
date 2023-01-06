import styled from "styled-components";

export const ConfirmImgStyle = styled.img`
  margin: 20px 0;
  width: 250px;
`;

export const ClienteStyle = styled.p`
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  margin: 46px 0 0 20px;
`;

export const CaminhoStyle = styled.p`
  font-size: 14px;
  margin: 20px;
  text-align: left;
`;

export const BoxStyle = styled.div`
  border-radius: 10px;
  padding: 21px;
  background-color: #f5f5f5;
  box-shadow: 1px 2px 2px 1px rgba(219, 219, 219, 1);
  width: 330px;
  height: 280px;
  margin-bottom: 40px;

  .primeiraparte,
  .segundaparte {
    display: flex;
    justify-content: space-around;
  }

  .primeiraparte {
    text-align: left;
  }

  a {
    text-decoration: none;
    display: flex;
    justify-content: center;
    margin-top: 15px;
    color: black;
    font-weight: 500;
  }
`;

export const ImgStyle = styled.img`
  height: 58px;
`;

export const TextoStyle = styled.div`
  p {
    font-weight: bold;
    line-height: 10px;
  }

  span {
    color: #626060;
  }
`;
