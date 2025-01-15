import React from 'react';

import styles from '../styles/CodingChallenge.module.css';

function CodingChallengeQuestion(props) {
    return (
        <div>
            <button onClick={props.handleExitQuiz} className={`${styles.codingQuestion__backButton}`}>
                Leave
            </button>

            <h1 className={`${styles.codingQuestion__quizTitle}`}>{props.quizName}</h1>

            <p>Question {props.currentQuestionIndex + 1} of {props.totalQuestions}</p>
            <h3>{props.questionBody}</h3>
            {
                (props.questionOptions).map((option, index) => (
                    <button className={`
                        ${styles.codingQuestion__option} 
                        ${(props.revealAnswer ? option.isCorrect ? styles.codingQuestion__correctOption : styles.codingQuestion__incorrectOption : styles.codingQuestion__unansweredOption)}
                    `} onClick={props.handleAnswerSubmit}>
                        {option.optionText}
                    </button>
                ))
            }

            <nav className={`${styles.codingQuestion__navigationRow}`}>
                {props.prevButtonVisible && <button onClick={props.handleGoToPreviousQuestion}>Previous</button>}
                {props.nextButtonVisible && <button onClick={props.handleGoToNextQuestion}>Next</button>}
            </nav>
        </div>
    )
}

export default CodingChallengeQuestion;