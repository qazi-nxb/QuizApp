import quizCompletedImg from "../assets/quiz-complete.png"
import  QUESTIONS  from "../questions.js";


export default function Summary({answersList}){

    const skipAnswers = answersList.filter((answer) => answer === null)
    const correctAnswer = answersList.filter((answer, index) => answer === QUESTIONS[index].answers[0])

    const skipAnswersPercentage = Math.round((skipAnswers.length / answersList.length) * 100)
    const correctAnswerPercentage = Math.round((correctAnswer.length / answersList.length) * 100)
    const wrongAnswerPercentage = 100 - (correctAnswerPercentage + skipAnswersPercentage)

    return(
        <div id="summary">
            <img src={quizCompletedImg} alt="trophy"/>
            <h2> Quiz Completed! </h2>
            <div id="summary-stats">
                <p>
                    <span className="number">{skipAnswersPercentage}%</span>
                    <span className="text">skipped</span>
                </p>
                <p>
                    <span className="number">{correctAnswerPercentage}%</span>
                    <span className="text">correct</span>
                </p>
                <p>
                    <span className="number">{wrongAnswerPercentage}% </span>
                    <span className="text">incorrect</span>
                </p>
            </div>
            <ol>
                {answersList.map((answer,index) => {

                    let cssClass = 'user-answer';
                    if(answer===null){
                        cssClass += ' skipped'
                    }else if (answer === QUESTIONS[index].answers[0]){
                        cssClass += ' correct'
                    }else{
                        cssClass += ' wrong'
                    }
                    return(
                        <li key={index}>
                            <h3>{index + 1}</h3>
                            <p className={cssClass}> {QUESTIONS[index].text} </p>
                            <p className={cssClass}>  {answer ?? 'Skipped'} </p>
                        </li>
                    )
                })}
            </ol>
        </div> 
    )
}