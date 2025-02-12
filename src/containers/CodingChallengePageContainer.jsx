import React, { useState, useEffect } from 'react';
import CodingChallengePreview from '../components/CodingChallengePreview';
import CodingChallengeQuestion from '../components/CodingChallengeQuestion';
import ComponentLoadingSpinner from '../components/ComponentLoadingSpinner';

import styles from '../styles/CodingChallengePreview.module.css';


function CodingChallengePageContainer() {
    
    // Dummy data ----------------------------
    const dummyQuizListData = {
        1 : {
            quizName : "PHP Variables Quiz",
            quizDescription : "Test out whether you understand how PHP variables really work!",
            quizDifficulty : "Easy",
            isQuizCompleted : false,
            lastAnsweredQuestion : -1
        },
        2 : {
            quizName : "JavaScript Loops Challenge",
            quizDescription : "Can you solve looping problems in JavaScript?",
            quizDifficulty : "Easy",
            isQuizCompleted : false,
            lastAnsweredQuestion : -1
        },
        3 : {
            quizName : "Python Functions Exercise",
            quizDescription : "Practice writing Python functions and understand their scope!",
            quizDifficulty : "Medium",
            isQuizCompleted : false,
            lastAnsweredQuestion : -1
        },
        4 : {
            quizName : "React Props and State",
            quizDescription : "Improve your React skills with this interactive props and state challenge!",
            quizDifficulty : "Medium",
            isQuizCompleted : false,
            lastAnsweredQuestion : -1
        },
        5 : {
            quizName : "SQL Joins Mastery",
            quizDescription : "Test your SQL join skills with real-world queries.",
            quizDifficulty : "Hard",
            isQuizCompleted : false,
            lastAnsweredQuestion : -1
        },
        6 : {
            quizName : "Data Structures: Linked Lists",
            quizDescription : "Implement and manipulate linked lists in your favorite language!",
            quizDifficulty : "Hard",
            isQuizCompleted : false,
            lastAnsweredQuestion : -1
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
            const fetchData = setTimeout(() => {
                setCurrentQuizList(dummyQuizListData);
            }, 5000);

            return () => clearTimeout(fetchData);
        },
    []);

    const getLevelClass = (level) => {
        switch (level) {
            case "Easy":
                return styles.easy;
            case "Medium":
                return styles.medium;
            case "Hard":
                return styles.hard;
        }
    };

    const initCodingQuestionData = (id) => {      
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
                        <>
                            {Object.keys(currentQuizList).map((quiz, index) => (
                                <CodingChallengePreview 
                                    key={quiz}
                                    codingTitle={currentQuizList[quiz].quizName}
                                    codingDescription={currentQuizList[quiz].quizDescription}
                                    codingLevel={currentQuizList[quiz].quizDifficulty}
                                    levelClass={getLevelClass(currentQuizList[quiz].quizDifficulty)}
                                    onClick={() => initCodingQuestionData(quiz)}
                                />
                            ))}
                        </>
                        // <button id="45" onClick={initCodingQuestionData}>test --- coding QUIZ LIST!!!</button>
                        // -------------------------------------------------------------------
                    ) : (
                        <CodingChallengeQuestion
                            quizName={currentQuiz.quizName}
                            totalQuestions={currentQuizQuestions.length}
                            currentQuestionIndex={currentQuestionIndex}
                            questionBody={currentQuizQuestions[currentQuestionIndex].questionBody}
                            questionOptions={currentQuizQuestions[currentQuestionIndex].questionOptions}

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