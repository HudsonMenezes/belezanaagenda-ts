import styled from "styled-components";

const Style = styled.div`
  /* margin-bottom: 1rem; */

  > input {
    color: #fff;
    border-radius: 1rem;
    width: 90%;
    border: 3px solid #FFC973;
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
  color: #fff;
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
