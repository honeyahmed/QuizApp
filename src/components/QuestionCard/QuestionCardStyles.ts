import styled from "styled-components";

export const Wrapper = styled.div`
  width: 650px;
  background: #ebfeff;
  border-radius: 10px;
  /* border: 2px solid #0085a3; */
  padding: 40px 40px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  /* text-align: center; */

  p {
    font-size: 1rem;
  }
  .separetor {
    width: 100%;
    height: 4px;
    background-color: #e4e4ec;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.9;
  }

  button {
    padding-left: 10px;
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 45px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct ? "#e3ffc3" : !correct && userClicked ? "#ffe9eb" : "white"};
    border: ${({ correct, userClicked }) =>
      correct
        ? "1px solid #689f38"
        : !correct && userClicked
        ? "1px solid #ffb7b7"
        : "1px solid #e4e4ec;"};
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    border-radius: 5px;
    color: black;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
    text-align: start;
  }
`;
