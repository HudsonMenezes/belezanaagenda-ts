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

export const Input = styled.input`
  border: 1px solid #000000;
  border-radius: 15px;
  width: 330px;
  height: 57px;
  padding: 1rem;
  margin-bottom: 1rem;
`;
