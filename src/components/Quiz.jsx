import { useState } from "react";
import  QUESTIONS  from "../questions.js";
import { useCallback } from "react";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
    const [answersList, setAnswersList] = useState([]);

    const activeQuestion = answersList.length;
    const quizCompleted = activeQuestion === QUESTIONS.length;

    const handleAnswerClick = useCallback(function handleAnswerClick(answer) {
        setAnswersList((prevAnswersList) => { 
            return [...prevAnswersList, answer];
        });
      },[]
    );

    const handleSkipAnswer = useCallback(
        () => handleAnswerClick(null), 
        [handleAnswerClick]
    );


    if (quizCompleted){
        return (
            <Summary answersList={answersList}/>
        )
    }


    return (
        <div id="quiz">
            <Question 
            key={activeQuestion}
            index={activeQuestion}
            onSelectAnswer={handleAnswerClick}
            onSkipAnswer = {handleSkipAnswer}

            />
        </div>
    );
}