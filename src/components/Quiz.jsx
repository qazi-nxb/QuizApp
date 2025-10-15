import { useState } from "react";
import  QUESTIONS  from "../questions.js";
import quizCompletedImg from "../assets/quiz-complete.png"
import { useCallback } from "react";
import Question from "./Question.jsx";

export default function Quiz() {
    const [answerState, setAnsweState] = useState('')
    const [answersList, setAnswersList] = useState([]);

    const activeQuestion = answerState === '' ? answersList.length : answersList.length - 1;
    const quizCompleted = activeQuestion === QUESTIONS.length;

    const handleAnswerClick = useCallback(function handleAnswerClick(answer) {
        setAnsweState('answered')
        setAnswersList((prevAnswersList) => { 
            return [...prevAnswersList, answer];
        });
    
            setTimeout(() => {
                if (answer === QUESTIONS[activeQuestion].answers[0])
                    setAnsweState('correct');
                else
                    setAnsweState('wrong')
    
    
                setTimeout(() => {
                    setAnsweState('')
                },2000)
            },1000);
    
        },
        [activeQuestion]
    );

    const handleSkipAnswer = useCallback(
        () => handleAnswerClick(null), 
        [handleAnswerClick]
    );


    if (quizCompleted){
        return (
            <div id="summary">
                <img src={quizCompletedImg} alt="trophy"/>
                <h2> Quiz Completed </h2>
            </div>
        )
    }


    return (
        <div id="quiz">
            <Question 
            key={activeQuestion}
            questionText={QUESTIONS[activeQuestion].text}
            answers = {QUESTIONS[activeQuestion].answers}
            selectedAnswer = {answersList[answersList.length - 1]}
            answerState = {answerState}
            onSelectAnswer={handleAnswerClick}
            onSkipAnswer = {handleSkipAnswer}

            />
        </div>
    );
}