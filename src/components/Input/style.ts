import styled from "styled-components";

const Style = styled.div`
  /* margin-bottom: 1rem; */

  > input {
    border: 1px solid #000000;
    border-radius: 15px;
    width: 330px;
    height: 57px;
    padding: 1rem;
    gap: 28px;

    :focus,
    :hover {
      outline: none;
      border-color: #fb1;
      background: white;
      box-shadow: 0 0 0 3px #fea;
    }
  }

  > label {
    display: block;
    font-size: 1rem;
    line-height: 1;
    padding-bottom: 0.5rem;
  }
`;
const Error = styled.p`
  color: #f31;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

export { Style, Error };

// anterior
// border: 1px solid #eee;
//     display: block;
//     width: 100%;
//     font-size: 1rem;
//     padding: 0.8rem;
//     border-radius: 0.4rem;
//     background: #eee;
//     transition: 0.2s;
