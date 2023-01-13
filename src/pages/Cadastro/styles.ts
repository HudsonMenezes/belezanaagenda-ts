import styled from "styled-components";

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  input {
    width: 330px;
  }
`;

export const LogoStyle = styled.img`
  width: 200px;
  margin-bottom: 15px
`;

export const FundoLogin = styled.img`
  width: 100%;
  z-index: -100;
  bottom: 0;
  position: fixed;
  margin-bottom: -50px;
`;

export const FundoLogin2 = styled.img`
  width: 80%;
  z-index: -100;
  bottom: 0;
  position: fixed;
  margin-bottom: -50px;
`;