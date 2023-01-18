import styled from "styled-components";

export const ButtonStyle = styled.button`
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
  border: none;
  border-radius: 1.25rem;
  background: #ffc973;
  color: #404040;
  font-weight: bold;
  width: 90%;
  max-width: 300px;
  padding: 0.8rem 1.2rem;
  transition: 0.1s;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  align-content: center;

  :hover,
  :focus {
    outline: none;
    box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
  }

  :disabled {
    opacity: 0.5;
    cursor: wait;
  }
`;
