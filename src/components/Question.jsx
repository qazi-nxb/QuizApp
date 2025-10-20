import QuizTimer from "./QuizTimer.jsx";
import Answer from "./Answer.jsx";
import { useState } from "react";
import  QUESTIONS  from "../questions.js";


export default function Question({index, onSkipAnswer, onSelectAnswer }){

    const [answer,SetAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null
    });

    let timer = 10000;

    if(answer.selectedAnswer){
        timer = 1000
    }

    if(answer.isCorrect !== null)
    {
        timer = 2000;
    }


    function handleSelectAnswer(answer){
        SetAnswer({
            selectedAnswer: answer,
            isCorrect: null
        })

        setTimeout(() => {
            SetAnswer({
                selectedAnswer: answer,
                isCorrect: QUESTIONS[index].answers[0] === answer
            })



            setTimeout(() => {
                onSelectAnswer(answer)
            }, 2000)

        },1000)

    }

    let answerState = '';
    if(answer.selectedAnswer && answer.isCorrect !== null){
        answerState = answer.isCorrect ? 'correct' : 'wrong'
    }else if(answer.selectedAnswer){
        answerState = 'answered'
    }


    return(
        <div>
            <QuizTimer 
                key={timer}
                onTimeout={answer.selectedAnswer === '' ? onSkipAnswer : null} 
                timeout={timer} 
                mode = {answerState}
            />
            <div id="question">
                <h2>{QUESTIONS[index].text}</h2>
                <Answer 
                    answersList={QUESTIONS[index].answers}
                    selectedAnswer = {answer.selectedAnswer}
                    answerState = {answerState}
                    onSelect={handleSelectAnswer}
                />
            </div>
        </div>
    )
} 