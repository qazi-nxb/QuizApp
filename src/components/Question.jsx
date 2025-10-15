import QuizTimer from "./QuizTimer.jsx";
import Answer from "./Answer.jsx";

export default function Question({questionText, answers, selectedAnswer, answerState, onSelectAnswer, onSkipAnswer }){

    return(
        <div>
            <QuizTimer 
                onTimeout={onSkipAnswer} 
                timeout={10000} 
            />
            <div id="question">
                <h2>{questionText}</h2>
                <Answer 
                    answersList={answers}
                    selectedAnswer = {selectedAnswer}
                    answerState = {answerState}
                    onSelect={onSelectAnswer}
                />
            </div>
        </div>
    )
} 