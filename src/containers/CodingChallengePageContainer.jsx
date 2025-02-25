import React, { useState, useEffect } from 'react';
import CodingChallengePreview from '../components/CodingChallengePreview';
import CodingChallengeQuestion from '../components/CodingChallengeQuestion';
import ComponentLoadingSpinner from '../components/ComponentLoadingSpinner';

import styles from '../styles/CodingChallengePreview.module.css';


function CodingChallengePageContainer() {
    
    const [currentQuizList, setCurrentQuizList] = useState(null);

    const [currentQuiz, setCurrentQuiz] = useState(null);
    const [currentQuizQuestions, setCurrentQuizQuestions] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const handleFetchData = async () => {
        const currentUserID = "3oMAV7h8tmHVMR8Vpv9B" // Replace with value set by authentication feature, currently always Anoop

        const fetchedData = await fetch(`${process.env.REACT_APP_API_URL}/coding-challenges`);
        const fetchedJsonData = await fetchedData.json();

        setCurrentQuizList(fetchedJsonData);
    }

    useEffect(() => { handleFetchData(); }, []);

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

    const initCodingQuestionData = async (id) => {      
        const currentUserID = "3oMAV7h8tmHVMR8Vpv9B" // Replace with value set by authentication feature, currently always Anoop

        setCurrentQuiz(id);
        
        const fetchedData = await fetch(`${process.env.REACT_APP_API_URL}/coding-challenges/${id}`);
        const fetchedJsonData = await fetchedData.json();

        setCurrentQuizQuestions(fetchedJsonData); 
        setCurrentQuestionIndex(
            (currentQuizList[id].lastAnsweredQuestion >= fetchedJsonData.length - 1)
            ? fetchedJsonData.length - 1
            : currentQuizList[id].lastAnsweredQuestion + 1
        );
    }

    const handleAnswerSubmit = () => {
        // Tell the backend that the user has completed this question! (Sync)
        if (currentQuestionIndex > currentQuizList[currentQuiz].lastAnsweredQuestion) {
            setCurrentQuizList(prev => ({
                ...prev,
                [currentQuiz] : {
                    ...prev[currentQuiz],
                    lastAnsweredQuestion : currentQuestionIndex
                }
            }));

            fetch(`${process.env.REACT_APP_API_URL}/coding-challenges/${currentQuiz}/user-progress`, {
                method: 'POST',
                body: JSON.stringify({
                    newProgressValue : currentQuestionIndex
                }),
                headers: new Headers({
                    'Content-Type': 'application/json; charset=UTF-8'
                })
            });
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
                    ) : (
                        <CodingChallengeQuestion
                            quizName={currentQuizList[currentQuiz].quizName}
                            totalQuestions={currentQuizQuestions.length}
                            currentQuestionIndex={currentQuestionIndex}
                            questionBody={currentQuizQuestions[currentQuestionIndex].questionBody}
                            questionOptions={currentQuizQuestions[currentQuestionIndex].questionOptions}

                            handleGoToNextQuestion={() => incrementQuestion(1)}
                            handleGoToPreviousQuestion={() => incrementQuestion(-1)}
                            handleExitQuiz={handleExitQuiz}
                            handleAnswerSubmit={handleAnswerSubmit}

                            revealAnswer={currentQuizList[currentQuiz].lastAnsweredQuestion >= currentQuestionIndex}
                            nextButtonVisible={(currentQuizList[currentQuiz].lastAnsweredQuestion >= currentQuestionIndex)
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