import React, { useState, useEffect } from 'react';
import CodingChallengeQuestion from '../components/CodingChallengeQuestion';
import ComponentLoadingSpinner from '../components/ComponentLoadingSpinner';

function CodingChallengePageContainer() {
    
    // Dummy data ----------------------------
    const dummyQuizListData = {
        45 : {
            "quizID" : 1,
            "quizName" : "PHP Variables Quiz",
            "quizDescription" : "Test out whether you understand how PHP variables really work!",
            "quizDifficulty" : "Easy",
            "isQuizCompleted" : false,
            "lastAnsweredQuestion" : -1
        }
    }

    const dummyQuizQuestionData = [
        {
            "questionBody" : "Which one is NOT a keyword used inside switch code blocks?",
            "questionOptions" : [{
                optionText : "break",
                isCorrect : false
            }, {
                optionText : "default",
                isCorrect : false
            },  {
                optionText : "case",
                isCorrect: true
            }, {
                optionText : "return",
                isCorrect: false
            }],
        }, {
            "questionBody" : "Which operator can be used to perform string concatenation, or joining strings, in PHP?",
            "questionOptions" : [{
                optionText : "=",
                isCorrect : false
            }, {
                optionText : "+",
                isCorrect : false
            }, {
                optionText : "$",
                isCorrect: false
            }, {
                optionText : ".",
                isCorrect: true
            }]
        }, {
            "questionBody" : "All variables in PHP start with which symbol?",
            "questionOptions" : [{
                optionText : "$",
                isCorrect: true
            }, {
                optionText : "!",
                isCorrect : false
            }, {
                optionText : "*",
                isCorrect : false
            }, {
                optionText : "@",
                isCorrect: false
            }]
        }, {
            "questionBody" : "Does Edmond deserve a day off tomorrow?",
            "questionOptions" : [{
                optionText : "Absolutely!",
                isCorrect: true
            }, {
                optionText : "Definitely!",
                isCorrect : true
            }, {
                optionText : "Not allowed. Get back to work.",
                isCorrect : false
            }, {
                optionText : "One hundred percent!",
                isCorrect: true
            }]
        }
    ]

    // ---------------------------------------

    const [currentQuizList, setCurrentQuizList] = useState(null);

    const [currentQuiz, setCurrentQuiz] = useState(null);
    const [currentQuizQuestions, setCurrentQuizQuestions] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    useEffect(
        () => {
            const fetchData = setInterval(() => {
                setCurrentQuizList(dummyQuizListData);
            }, 5000);

            return () => clearInterval(fetchData);
        },
    []);

    const initCodingQuestionData = ({target}) => {
        const {id} = target;
        // call Backend Get Question Data(Quiz_ID)
        setCurrentQuiz(currentQuizList[id]);
        setCurrentQuizQuestions(dummyQuizQuestionData);  // Replace with a function call using Quiz ID to backend
        setCurrentQuestionIndex(currentQuizList[id].lastAnsweredQuestion + 1);
    }

    const handleAnswerSubmit = () => {
        // Tell the backend that the user has completed this question! (Sync)
        if (currentQuestionIndex > currentQuiz.lastAnsweredQuestion) {
            setCurrentQuiz(prev => ({
                ...prev,
                lastAnsweredQuestion : currentQuestionIndex
            }));
        }
    }

    const incrementQuestion = (incr) => {
        setCurrentQuestionIndex((prev) => prev + incr);
    }

    const handleExitQuiz = () => {
        setCurrentQuestionIndex(0);
        setCurrentQuizQuestions(null);
    }


    return (
        <div>
            {
                (currentQuizList) ? (
                    (!currentQuizQuestions) ? (
                        // ------------Insert coding challenge list view here-----------------
                        <button id="45" onClick={initCodingQuestionData}>test --- coding QUIZ LIST!!!</button>
                        // -------------------------------------------------------------------
                    ) : (
                        <CodingChallengeQuestion
                            quizID={currentQuiz.quizID}
                            totalQuestions={currentQuizQuestions.length}
                            currentQuestionIndex={currentQuestionIndex}
                            questionBody={currentQuizQuestions[currentQuestionIndex].questionBody}
                            questionOptions={currentQuizQuestions[currentQuestionIndex].questionOptions}

                            {...currentQuizQuestions[currentQuestionIndex]}

                            handleGoToNextQuestion={() => incrementQuestion(1)}
                            handleGoToPreviousQuestion={() => incrementQuestion(-1)}
                            handleExitQuiz={handleExitQuiz}
                            handleAnswerSubmit={handleAnswerSubmit}

                            revealAnswer={currentQuiz.lastAnsweredQuestion >= currentQuestionIndex}
                            nextButtonVisible={(currentQuiz.lastAnsweredQuestion >= currentQuestionIndex)
                                && currentQuestionIndex < currentQuizQuestions.length - 1
                            }
                            prevButtonVisible={currentQuestionIndex > 0}
                        />
                    )
                ) : <ComponentLoadingSpinner />
            }
        </div>
    )
}

export default CodingChallengePageContainer;