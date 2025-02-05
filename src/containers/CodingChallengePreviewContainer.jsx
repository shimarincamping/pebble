import React, { useState, useEffect } from 'react';
import CodingChallengePreview from '../components/CodingChallengePreview';
import ComponentLoadingSpinner from '../components/ComponentLoadingSpinner';
import styles from '../styles/CodingChallengePreview.module.css';

function CodingChallengePreviewContainer() {
    const dummyCodingPreviewData = [
        {
            codingTitle: "PHP Variables Quiz!",
            codingDescription: "Test out whether you understand how PHP variables really work!",
            codingLevel: "Easy"
        },
        {
            codingTitle: "JavaScript Loops Challenge",
            codingDescription: "Can you solve looping problems in JavaScript?",
            codingLevel: "Easy"
        },
        {
            codingTitle: "Python Functions Exercise",
            codingDescription: "Practice writing Python functions and understand their scope!",
            codingLevel: "Medium"
        },
        {
            codingTitle: "React Props and State",
            codingDescription: "Improve your React skills with this interactive props and state challenge!",
            codingLevel: "Medium"
        },
        {
            codingTitle: "SQL Joins Mastery",
            codingDescription: "Test your SQL join skills with real-world queries.",
            codingLevel: "Hard"
        },
        {
            codingTitle: "Data Structures: Linked Lists",
            codingDescription: "Implement and manipulate linked lists in your favorite language!",
            codingLevel: "Hard"
        }
    ];

    const getLevelClass = (level) => {
        switch (level) {
            case "Easy":
                return styles.easy;
            case "Medium":
                return styles.medium;
            case "Hard":
                return styles.hard;
            default:
                return '';
        }
    };

    const [codingList, setCodingList] = useState(null);

useEffect(() => {
        const fetchData = setTimeout(() => {
            setCodingList(dummyCodingPreviewData);
        }, 500);

        return () => clearTimeout(fetchData);
    }, []);

    return (
        <div>
            {codingList ? (
                <div>
                    {codingList.map((challenge, index) => (
                        <CodingChallengePreview 
                            key={index} 
                            codingTitle={challenge.codingTitle} 
                            codingDescription={challenge.codingDescription} 
                            codingLevel={challenge.codingLevel} 
                            levelClass={getLevelClass(challenge.codingLevel)}
                        />
                    ))}
                </div>
            ) : (
                <ComponentLoadingSpinner />
            )}
        </div>
    );
}

export default CodingChallengePreviewContainer;