import React from "react";
import { AnswerObject } from "../../App";
import { Wrapper, ButtonWrapper } from './QuestionCardStyles';

type Props = {
  question: string;
  answers: string[];
  callBack: (e:React.MouseEvent<HTMLButtonElement>)=>void;
  userAnswer: AnswerObject|undefined;
  questionNo: number;
  totalQuestions: number;
};
const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callBack,
  userAnswer,
  questionNo,
  totalQuestions,
}) => {
  return (

<Wrapper>
    <p className="number">{questionNo} of {totalQuestions} Question </p>
    <div className="separetor"></div>
    <p dangerouslySetInnerHTML={{__html:question}}/>
    <div>
      {answers.map((answer) => (
        <ButtonWrapper
          key={answer}
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
        >
          <button disabled={userAnswer ? true : false} value={answer} onClick={callBack}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </ButtonWrapper>
      ))}
    </div>
</Wrapper>
  );
};
export default QuestionCard;
