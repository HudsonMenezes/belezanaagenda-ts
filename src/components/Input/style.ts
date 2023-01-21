import styled from "styled-components";

const Style = styled.div`
  /* margin-bottom: 1rem; */

  > input {
    border: 3px solid #ffc973;
    color: #fff;
    border-radius: 1rem;
    width: 19rem;
    max-width: 300px;
    height: 57px;
    padding: 1rem;
    background: #742092;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    margin-top: 10px;

    :focus,
    :hover {
      color: #000;
      outline: none;
      border-color: #fb1;
      background: #fff;
      box-shadow: 0 0 0 3px #fea;
    }
  }

  > label {
    display: block;
    padding-right: 230px;
    color: #fff;
    font-size: 1rem;
    line-height: 1;
  }
`;
const Error = styled.p`
  color: #fff;
  font-size: 0.875rem;
  margin: 0.25rem;
`;

export { Style, Error };
