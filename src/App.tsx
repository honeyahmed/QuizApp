import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard/QuestionCard";
import { fetchQuizQuestions } from "./API";
// styles
import { GlobalStyle, Wrapper } from "./App.styles";
// types
import { Difficulty, QuestionState } from "./API";
export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};
const Total_Questions = 10;
const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [number, setNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(
      Total_Questions,
      Difficulty.EASY
    );
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(!gameOver){
      // users answer
      const answer=e.currentTarget.value;
      // check correct 1 or 0
      const correct=questions[number].correct_answer===answer;
      if(correct){
        setScore(prev=>prev+1)
      }
      // save answer
      const answerObject={
        question:questions[number].question,
        answer,
        correct,
        correctAnswer:questions[number].correct_answer
      }
      setUserAnswers((prev)=>[...prev,answerObject])
    }
  };
  const nextQuestion = () => {
    // move to next question if not the last
    const nextQuestion=number+1;
    if(nextQuestion===Total_Questions){
      setGameOver(true)
    }
    else{
      setNumber(nextQuestion)
    }
  };
  // const prevQuestion = () => {
  //   // move to next question if not the last
  //   const prevQuestion=number-1;
  //   if(prevQuestion===-1){
  //     setGameOver(true)
  //   }
  //   else{
  //     setNumber(prevQuestion)
  //   }
  // };
  return (
    <>
    <GlobalStyle/>
    <Wrapper>
      <h1>React QUIZ</h1>
      {gameOver || userAnswers.length === Total_Questions ? (
        <button className="startBtn" onClick={startTrivia}>
          Start
        </button>
      ) : null}
      {!gameOver && <p className="score">Score: {score}</p>}
      {loading &&<div className="loading" data-loading-text="Loading..."></div>}
      {!loading && !gameOver && (
        <QuestionCard
          questionNo={number + 1}
          totalQuestions={Total_Questions}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callBack={checkAnswer}
        />
      )}
      {!gameOver &&
      !loading &&
      userAnswers.length === number + 1 &&
      number !== Total_Questions - 1 ? (
        <button className="nextBtn" onClick={nextQuestion}>
          Next
        </button>
      ) : null}
      
      {gameOver || userAnswers.length === Total_Questions && (
        <h3>YAY! you finished your quiz with score <span className="lastScore">{score}</span></h3>
      )
      }
    </Wrapper>

    
    </>
 
  );
};

export default App;
