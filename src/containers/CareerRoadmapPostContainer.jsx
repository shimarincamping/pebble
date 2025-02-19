import React, { useState, useEffect } from "react";
import CareerRoadmapPost from "../components/CareerRoadmapPost";
import { useParams } from "react-router-dom"; // To get ID from URL
import styles from "../styles/CareerRoadmap.module.css";

const CareerRoadmapPostContainer = () => {
    const { id } = useParams(); // Get the roadmap ID from URL
    const [roadmap, setRoadmap] = useState(null);

    // Dummy roadmap data (simulate fetching from an API)
    const dummyData = [
        {
            id: "1",
            roadmapThreadTitle: "Become a Mobile Application Developer",
            roadmapThreadAuthor: "Dr HemaLatha Ramalingam",
            roadmapProfileImageLink: "https://i.imgur.com/qPzFvF4.jpeg",
            roadmapBannerImageLink: "https://i.imgur.com/qPzFvF4.jpeg",
            roadmapDescription: [
                {
                    roadmapDescriptionTitle: "Inventing the Future",
                    roadmapDescriptionContent:
                        "Imagine creating a system that can detect diseases in their earliest stages, recommend the perfect movie for your Friday night, or even drive a car without human intervention. Machine learning engineers do precisely that. They design and implement systems that enable machines to learn and adapt without explicit programming. As businesses and industries increasingly rely on AI-driven solutions, the demand for skilled machine learning engineers has skyrocketed. But how do you step into this exciting and impactful field?",
                },
                {
                    roadmapDescriptionTitle: "The Foundation: What Does a Machine Learning Engineer Do?",
                    roadmapDescriptionContent:
                        "A machine learning engineer sits at the intersection of software engineering and data science. They design algorithms, build models, and deploy systems that make predictions or automate tasks based on data. This role requires a strong foundation in programming, mathematics, and data manipulation—but it’s also a field where creativity thrives as you solve complex, real-world problems.",
                },
            ],
            roadmapSection: [
                {
                    roadmapSectionType: "courses",
                    roadmapSectionTitle: "Recommended Courses",
                    roadmapSectionDescription: "Taking an external course alongside your degree in machine learning can provide practical skills, industry-relevant knowledge, and exposure to cutting-edge tools not always covered in a standard curriculum. It enhances your expertise, builds your portfolio, and gives you a competitive edge with certifications that demonstrate your abilities.",
                    roadmapSectionButton: [
                        {
                            buttonTitle: "Stanford Machine Learning, Coursera",
                            buttonLink: "https://coursera.org",
                            buttonImage: "https://i.imgur.com/qPzFvF4.jpeg",
                            buttonAuthor: "Andrew Ng",
                        },
                        {
                            buttonTitle: "Deep Learning Specialization, Coursera",
                            buttonLink: "https://coursera.org",
                            buttonImage: "https://i.imgur.com/qPzFvF4.jpeg",
                            buttonAuthor: "Andrew Ng",
                        },
                    ],
                },
                {
                    roadmapSectionType: "competitions",
                    roadmapSectionTitle: "Recommended Competitions",
                    roadmapSectionDescription: "Working on machine learning projects is essential for applying theoretical knowledge to real-world problems, building practical skills, and gaining experience with tools like TensorFlow or PyTorch. Projects showcase your problem-solving abilities and demonstrate tangible results, making your portfolio stand out to employers and increasing your chances of landing a job in machine learning. Here are some recommendations:",
                    roadmapSectionButton: [
                        {
                            buttonTitle: "Kaggle Titanic Challenge",
                            buttonLink: "https://kaggle.com",
                            buttonImage: "https://i.imgur.com/qPzFvF4.jpeg",
                            buttonAuthor: "Kaggle",
                        },
                    ],
                },
                {
                    roadmapSectionType: "projects",
                    roadmapSectionTitle: "Recommended Projects",
                    roadmapSectionDescription: "Working on machine learning projects is essential for applying theoretical knowledge to real-world problems, building practical skills, and gaining experience with tools like TensorFlow or PyTorch. Projects showcase your problem-solving abilities and demonstrate tangible results, making your portfolio stand out to employers and increasing your chances of landing a job in machine learning. Here are some recommendations:",
                    roadmapSectionButton: [
                        {
                            buttonTitle: "Predictive Analytics",
                            buttonDifficulty: "Intermediate",
                            buttonDuration: "4 weeks",
                            buttonDescription:
                                "Build a machine learning model to predict future trends using real-world datasets.",
                            buttonImage: "https://i.imgur.com/qPzFvF4.jpeg",
                            buttonLink: "https://github.com",
                        },
                        {
                            buttonTitle: "Sentiment Analysis",
                            buttonDifficulty: "Beginner",
                            buttonDuration: "3 weeks",
                            buttonDescription:
                                "Analyze social media text to determine public sentiment on various topics.",
                            buttonImage: "https://i.imgur.com/qPzFvF4.jpeg",
                            buttonLink: "https://github.com",
                        },
                    ],
                },
            ],
        },
        {
            id: "2",
            roadmapThreadTitle: "Become a Platform Engineer",
            roadmapThreadAuthor: "Alex Hormozi",
            roadmapProfileImageLink: "https://i.imgur.com/qPzFvF4.jpeg",
            roadmapBannerImageLink: "https://i.imgur.com/qPzFvF4.jpeg",
            roadmapDescription: [
                {
                    roadmapDescriptionTitle: "Inventing the Future",
                    roadmapDescriptionContent:
                        "Imagine creating a system that can detect diseases in their earliest stages, recommend the perfect movie for your Friday night, or even drive a car without human intervention. Machine learning engineers do precisely that. They design and implement systems that enable machines to learn and adapt without explicit programming. As businesses and industries increasingly rely on AI-driven solutions, the demand for skilled machine learning engineers has skyrocketed. But how do you step into this exciting and impactful field?",
                },
                {
                    roadmapDescriptionTitle: "The Foundation: What Does a Machine Learning Engineer Do?",
                    roadmapDescriptionContent:
                        "A machine learning engineer sits at the intersection of software engineering and data science. They design algorithms, build models, and deploy systems that make predictions or automate tasks based on data. This role requires a strong foundation in programming, mathematics, and data manipulation—but it’s also a field where creativity thrives as you solve complex, real-world problems.",
                },
            ],
            roadmapSection: [
                {
                    roadmapSectionType: "courses",
                    roadmapSectionTitle: "Recommended Courses",
                    roadmapSectionDescription: "Taking an external course alongside your degree in machine learning can provide practical skills, industry-relevant knowledge, and exposure to cutting-edge tools not always covered in a standard curriculum. It enhances your expertise, builds your portfolio, and gives you a competitive edge with certifications that demonstrate your abilities.",
                    roadmapSectionButton: [
                        {
                            buttonTitle: "Stanford Machine Learning, Coursera",
                            buttonLink: "https://coursera.org",
                            buttonImage: "https://i.imgur.com/qPzFvF4.jpeg",
                            buttonAuthor: "Andrew Ng",
                        },
                        {
                            buttonTitle: "Deep Learning Specialization, Coursera",
                            buttonLink: "https://coursera.org",
                            buttonImage: "https://i.imgur.com/qPzFvF4.jpeg",
                            buttonAuthor: "Andrew Ng",
                        },
                    ],
                },
                {
                    roadmapSectionType: "competitions",
                    roadmapSectionTitle: "Recommended Competitions",
                    roadmapSectionDescription: "Working on machine learning projects is essential for applying theoretical knowledge to real-world problems, building practical skills, and gaining experience with tools like TensorFlow or PyTorch. Projects showcase your problem-solving abilities and demonstrate tangible results, making your portfolio stand out to employers and increasing your chances of landing a job in machine learning. Here are some recommendations:",
                    roadmapSectionButton: [
                        {
                            buttonTitle: "Kaggle Titanic Challenge",
                            buttonLink: "https://kaggle.com",
                            buttonImage: "https://i.imgur.com/qPzFvF4.jpeg",
                            buttonAuthor: "Kaggle",
                        },
                    ],
                },
                {
                    roadmapSectionType: "projects",
                    roadmapSectionTitle: "Recommended Projects",
                    roadmapSectionDescription: "Working on machine learning projects is essential for applying theoretical knowledge to real-world problems, building practical skills, and gaining experience with tools like TensorFlow or PyTorch. Projects showcase your problem-solving abilities and demonstrate tangible results, making your portfolio stand out to employers and increasing your chances of landing a job in machine learning. Here are some recommendations:",
                    roadmapSectionButton: [
                        {
                            buttonTitle: "Predictive Analytics",
                            buttonDifficulty: "Intermediate",
                            buttonDuration: "4 weeks",
                            buttonDescription:
                                "Build a machine learning model to predict future trends using real-world datasets.",
                            buttonImage: "https://i.imgur.com/qPzFvF4.jpeg",
                            buttonLink: "https://github.com",
                        },
                        {
                            buttonTitle: "Sentiment Analysis",
                            buttonDifficulty: "Beginner",
                            buttonDuration: "3 weeks",
                            buttonDescription:
                                "Analyze social media text to determine public sentiment on various topics.",
                            buttonImage: "https://i.imgur.com/qPzFvF4.jpeg",
                            buttonLink: "https://github.com",
                        },
                    ],
                },
            ],
        },
        {
            id: "3",
            roadmapThreadTitle: "Become a Web Developer",
            roadmapThreadAuthor: "Nikola Tesla",
            roadmapProfileImageLink: "https://i.imgur.com/qPzFvF4.jpeg",
            roadmapBannerImageLink: "https://i.imgur.com/qPzFvF4.jpeg",
            roadmapDescription: [
                {
                    roadmapDescriptionTitle: "Inventing the Future",
                    roadmapDescriptionContent:
                        "Imagine creating a system that can detect diseases in their earliest stages, recommend the perfect movie for your Friday night, or even drive a car without human intervention. Machine learning engineers do precisely that. They design and implement systems that enable machines to learn and adapt without explicit programming. As businesses and industries increasingly rely on AI-driven solutions, the demand for skilled machine learning engineers has skyrocketed. But how do you step into this exciting and impactful field?",
                },
                {
                    roadmapDescriptionTitle: "The Foundation: What Does a Machine Learning Engineer Do?",
                    roadmapDescriptionContent:
                        "A machine learning engineer sits at the intersection of software engineering and data science. They design algorithms, build models, and deploy systems that make predictions or automate tasks based on data. This role requires a strong foundation in programming, mathematics, and data manipulation—but it’s also a field where creativity thrives as you solve complex, real-world problems.",
                },
            ],
            roadmapSection: [
                {
                    roadmapSectionType: "courses",
                    roadmapSectionTitle: "Recommended Courses",
                    roadmapSectionDescription: "Taking an external course alongside your degree in machine learning can provide practical skills, industry-relevant knowledge, and exposure to cutting-edge tools not always covered in a standard curriculum. It enhances your expertise, builds your portfolio, and gives you a competitive edge with certifications that demonstrate your abilities.",
                    roadmapSectionButton: [
                        {
                            buttonTitle: "Stanford Machine Learning, Coursera",
                            buttonLink: "https://coursera.org",
                            buttonImage: "https://i.imgur.com/qPzFvF4.jpeg",
                            buttonAuthor: "Andrew Ng",
                        },
                        {
                            buttonTitle: "Deep Learning Specialization, Coursera",
                            buttonLink: "https://coursera.org",
                            buttonImage: "https://i.imgur.com/qPzFvF4.jpeg",
                            buttonAuthor: "Andrew Ng",
                        },
                    ],
                },
                {
                    roadmapSectionType: "competitions",
                    roadmapSectionTitle: "Recommended Competitions",
                    roadmapSectionDescription: "Working on machine learning projects is essential for applying theoretical knowledge to real-world problems, building practical skills, and gaining experience with tools like TensorFlow or PyTorch. Projects showcase your problem-solving abilities and demonstrate tangible results, making your portfolio stand out to employers and increasing your chances of landing a job in machine learning. Here are some recommendations:",
                    roadmapSectionButton: [
                        {
                            buttonTitle: "Kaggle Titanic Challenge",
                            buttonLink: "https://kaggle.com",
                            buttonImage: "https://i.imgur.com/qPzFvF4.jpeg",
                            buttonAuthor: "Kaggle",
                        },
                    ],
                },
                {
                    roadmapSectionType: "projects",
                    roadmapSectionTitle: "Recommended Projects",
                    roadmapSectionDescription: "Working on machine learning projects is essential for applying theoretical knowledge to real-world problems, building practical skills, and gaining experience with tools like TensorFlow or PyTorch. Projects showcase your problem-solving abilities and demonstrate tangible results, making your portfolio stand out to employers and increasing your chances of landing a job in machine learning. Here are some recommendations:",
                    roadmapSectionButton: [
                        {
                            buttonTitle: "Predictive Analytics",
                            buttonDifficulty: "Intermediate",
                            buttonDuration: "4 weeks",
                            buttonDescription:
                                "Build a machine learning model to predict future trends using real-world datasets.",
                            buttonImage: "https://i.imgur.com/qPzFvF4.jpeg",
                            buttonLink: "https://github.com",
                        },
                        {
                            buttonTitle: "Sentiment Analysis",
                            buttonDifficulty: "Beginner",
                            buttonDuration: "3 weeks",
                            buttonDescription:
                                "Analyze social media text to determine public sentiment on various topics.",
                            buttonImage: "https://i.imgur.com/qPzFvF4.jpeg",
                            buttonLink: "https://github.com",
                        },
                    ],
                },
            ],
        },
        {
            id: "4",
            roadmapThreadTitle: "Become a Machine Learning Engineer",
            roadmapThreadAuthor: "Andrej Karpathy",
            roadmapProfileImageLink: "https://i.imgur.com/qPzFvF4.jpeg",
            roadmapBannerImageLink: "https://i.imgur.com/qPzFvF4.jpeg",
            roadmapDescription: [
                {
                    roadmapDescriptionTitle: "Inventing the Future",
                    roadmapDescriptionContent:
                        "Imagine creating a system that can detect diseases in their earliest stages, recommend the perfect movie for your Friday night, or even drive a car without human intervention. Machine learning engineers do precisely that. They design and implement systems that enable machines to learn and adapt without explicit programming. As businesses and industries increasingly rely on AI-driven solutions, the demand for skilled machine learning engineers has skyrocketed. But how do you step into this exciting and impactful field?",
                },
                {
                    roadmapDescriptionTitle: "The Foundation: What Does a Machine Learning Engineer Do?",
                    roadmapDescriptionContent:
                        "A machine learning engineer sits at the intersection of software engineering and data science. They design algorithms, build models, and deploy systems that make predictions or automate tasks based on data. This role requires a strong foundation in programming, mathematics, and data manipulation—but it’s also a field where creativity thrives as you solve complex, real-world problems.",
                },
            ],
            roadmapSection: [
                {
                    roadmapSectionType: "courses",
                    roadmapSectionTitle: "Recommended Courses",
                    roadmapSectionDescription: "Taking an external course alongside your degree in machine learning can provide practical skills, industry-relevant knowledge, and exposure to cutting-edge tools not always covered in a standard curriculum. It enhances your expertise, builds your portfolio, and gives you a competitive edge with certifications that demonstrate your abilities.",
                    roadmapSectionButton: [
                        {
                            buttonTitle: "Stanford Machine Learning, Coursera",
                            buttonLink: "https://coursera.org",
                            buttonImage: "https://i.imgur.com/qPzFvF4.jpeg",
                            buttonAuthor: "Andrew Ng",
                        },
                        {
                            buttonTitle: "Deep Learning Specialization, Coursera",
                            buttonLink: "https://coursera.org",
                            buttonImage: "https://i.imgur.com/qPzFvF4.jpeg",
                            buttonAuthor: "Andrew Ng",
                        },
                    ],
                },
                {
                    roadmapSectionType: "competitions",
                    roadmapSectionTitle: "Recommended Competitions",
                    roadmapSectionDescription: "Working on machine learning projects is essential for applying theoretical knowledge to real-world problems, building practical skills, and gaining experience with tools like TensorFlow or PyTorch. Projects showcase your problem-solving abilities and demonstrate tangible results, making your portfolio stand out to employers and increasing your chances of landing a job in machine learning. Here are some recommendations:",
                    roadmapSectionButton: [
                        {
                            buttonTitle: "Kaggle Titanic Challenge",
                            buttonLink: "https://kaggle.com",
                            buttonImage: "https://i.imgur.com/qPzFvF4.jpeg",
                            buttonAuthor: "Kaggle",
                        },
                    ],
                },
                {
                    roadmapSectionType: "projects",
                    roadmapSectionTitle: "Recommended Projects",
                    roadmapSectionDescription: "Working on machine learning projects is essential for applying theoretical knowledge to real-world problems, building practical skills, and gaining experience with tools like TensorFlow or PyTorch. Projects showcase your problem-solving abilities and demonstrate tangible results, making your portfolio stand out to employers and increasing your chances of landing a job in machine learning. Here are some recommendations:",
                    roadmapSectionButton: [
                        {
                            buttonTitle: "Predictive Analytics",
                            buttonDifficulty: "Intermediate",
                            buttonDuration: "4 weeks",
                            buttonDescription:
                                "Build a machine learning model to predict future trends using real-world datasets.",
                            buttonImage: "https://i.imgur.com/qPzFvF4.jpeg",
                            buttonLink: "https://github.com",
                        },
                        {
                            buttonTitle: "Sentiment Analysis",
                            buttonDifficulty: "Beginner",
                            buttonDuration: "3 weeks",
                            buttonDescription:
                                "Analyze social media text to determine public sentiment on various topics.",
                            buttonImage: "https://i.imgur.com/qPzFvF4.jpeg",
                            buttonLink: "https://github.com",
                        },
                    ],
                },
            ],
        },
        {
            id: "5",
            roadmapThreadTitle: "Become a Data Analyst",
            roadmapThreadAuthor: "Dr Abdul Hadi",
            roadmapProfileImageLink: "https://i.imgur.com/qPzFvF4.jpeg",
            roadmapBannerImageLink: "https://i.imgur.com/qPzFvF4.jpeg",
            roadmapDescription: [
                {
                    roadmapDescriptionTitle: "Inventing the Future",
                    roadmapDescriptionContent:
                        "Imagine creating a system that can detect diseases in their earliest stages, recommend the perfect movie for your Friday night, or even drive a car without human intervention. Machine learning engineers do precisely that. They design and implement systems that enable machines to learn and adapt without explicit programming. As businesses and industries increasingly rely on AI-driven solutions, the demand for skilled machine learning engineers has skyrocketed. But how do you step into this exciting and impactful field?",
                },
                {
                    roadmapDescriptionTitle: "The Foundation: What Does a Machine Learning Engineer Do?",
                    roadmapDescriptionContent:
                        "A machine learning engineer sits at the intersection of software engineering and data science. They design algorithms, build models, and deploy systems that make predictions or automate tasks based on data. This role requires a strong foundation in programming, mathematics, and data manipulation—but it’s also a field where creativity thrives as you solve complex, real-world problems.",
                },
            ],
            roadmapSection: [
                {
                    roadmapSectionType: "courses",
                    roadmapSectionTitle: "Recommended Courses",
                    roadmapSectionDescription: "Taking an external course alongside your degree in machine learning can provide practical skills, industry-relevant knowledge, and exposure to cutting-edge tools not always covered in a standard curriculum. It enhances your expertise, builds your portfolio, and gives you a competitive edge with certifications that demonstrate your abilities.",
                    roadmapSectionButton: [
                        {
                            buttonTitle: "Stanford Machine Learning, Coursera",
                            buttonLink: "https://coursera.org",
                            buttonImage: "https://i.imgur.com/qPzFvF4.jpeg",
                            buttonAuthor: "Andrew Ng",
                        },
                        {
                            buttonTitle: "Deep Learning Specialization, Coursera",
                            buttonLink: "https://coursera.org",
                            buttonImage: "https://i.imgur.com/qPzFvF4.jpeg",
                            buttonAuthor: "Andrew Ng",
                        },
                    ],
                },
                {
                    roadmapSectionType: "competitions",
                    roadmapSectionTitle: "Recommended Competitions",
                    roadmapSectionDescription: "Working on machine learning projects is essential for applying theoretical knowledge to real-world problems, building practical skills, and gaining experience with tools like TensorFlow or PyTorch. Projects showcase your problem-solving abilities and demonstrate tangible results, making your portfolio stand out to employers and increasing your chances of landing a job in machine learning. Here are some recommendations:",
                    roadmapSectionButton: [
                        {
                            buttonTitle: "Kaggle Titanic Challenge",
                            buttonLink: "https://kaggle.com",
                            buttonImage: "https://i.imgur.com/qPzFvF4.jpeg",
                            buttonAuthor: "Kaggle",
                        },
                    ],
                },
                {
                    roadmapSectionType: "projects",
                    roadmapSectionTitle: "Recommended Projects",
                    roadmapSectionDescription: "Working on machine learning projects is essential for applying theoretical knowledge to real-world problems, building practical skills, and gaining experience with tools like TensorFlow or PyTorch. Projects showcase your problem-solving abilities and demonstrate tangible results, making your portfolio stand out to employers and increasing your chances of landing a job in machine learning. Here are some recommendations:",
                    roadmapSectionButton: [
                        {
                            buttonTitle: "Predictive Analytics",
                            buttonDifficulty: "Intermediate",
                            buttonDuration: "4 weeks",
                            buttonDescription:
                                "Build a machine learning model to predict future trends using real-world datasets.",
                            buttonImage: "https://i.imgur.com/qPzFvF4.jpeg",
                            buttonLink: "https://github.com",
                        },
                        {
                            buttonTitle: "Sentiment Analysis",
                            buttonDifficulty: "Beginner",
                            buttonDuration: "3 weeks",
                            buttonDescription:
                                "Analyze social media text to determine public sentiment on various topics.",
                            buttonImage: "https://i.imgur.com/qPzFvF4.jpeg",
                            buttonLink: "https://github.com",
                        },
                    ],
                },
            ],
        },
        {
            id: "6",
            roadmapThreadTitle: "Become a UI/UX Designer",
            roadmapThreadAuthor: "Dr Hemalatha Ramalingam",
            roadmapProfileImageLink: "https://i.imgur.com/qPzFvF4.jpeg",
            roadmapBannerImageLink: "https://i.imgur.com/qPzFvF4.jpeg",
            roadmapDescription: [
                {
                    roadmapDescriptionTitle: "Inventing the Future",
                    roadmapDescriptionContent:
                        "Imagine creating a system that can detect diseases in their earliest stages, recommend the perfect movie for your Friday night, or even drive a car without human intervention. Machine learning engineers do precisely that. They design and implement systems that enable machines to learn and adapt without explicit programming. As businesses and industries increasingly rely on AI-driven solutions, the demand for skilled machine learning engineers has skyrocketed. But how do you step into this exciting and impactful field?",
                },
                {
                    roadmapDescriptionTitle: "The Foundation: What Does a Machine Learning Engineer Do?",
                    roadmapDescriptionContent:
                        "A machine learning engineer sits at the intersection of software engineering and data science. They design algorithms, build models, and deploy systems that make predictions or automate tasks based on data. This role requires a strong foundation in programming, mathematics, and data manipulation—but it’s also a field where creativity thrives as you solve complex, real-world problems.",
                },
            ],
            roadmapSection: [
                {
                    roadmapSectionType: "courses",
                    roadmapSectionTitle: "Recommended Courses",
                    roadmapSectionDescription: "Taking an external course alongside your degree in machine learning can provide practical skills, industry-relevant knowledge, and exposure to cutting-edge tools not always covered in a standard curriculum. It enhances your expertise, builds your portfolio, and gives you a competitive edge with certifications that demonstrate your abilities.",
                    roadmapSectionButton: [
                        {
                            buttonTitle: "Stanford Machine Learning, Coursera",
                            buttonLink: "https://coursera.org",
                            buttonImage: "https://i.imgur.com/qPzFvF4.jpeg",
                            buttonAuthor: "Andrew Ng",
                        },
                        {
                            buttonTitle: "Deep Learning Specialization, Coursera",
                            buttonLink: "https://coursera.org",
                            buttonImage: "https://i.imgur.com/qPzFvF4.jpeg",
                            buttonAuthor: "Andrew Ng",
                        },
                    ],
                },
                {
                    roadmapSectionType: "competitions",
                    roadmapSectionTitle: "Recommended Competitions",
                    roadmapSectionDescription: "Working on machine learning projects is essential for applying theoretical knowledge to real-world problems, building practical skills, and gaining experience with tools like TensorFlow or PyTorch. Projects showcase your problem-solving abilities and demonstrate tangible results, making your portfolio stand out to employers and increasing your chances of landing a job in machine learning. Here are some recommendations:",
                    roadmapSectionButton: [
                        {
                            buttonTitle: "Kaggle Titanic Challenge",
                            buttonLink: "https://kaggle.com",
                            buttonImage: "https://i.imgur.com/qPzFvF4.jpeg",
                            buttonAuthor: "Kaggle",
                        },
                    ],
                },
                {
                    roadmapSectionType: "projects",
                    roadmapSectionTitle: "Recommended Projects",
                    roadmapSectionDescription: "Working on machine learning projects is essential for applying theoretical knowledge to real-world problems, building practical skills, and gaining experience with tools like TensorFlow or PyTorch. Projects showcase your problem-solving abilities and demonstrate tangible results, making your portfolio stand out to employers and increasing your chances of landing a job in machine learning. Here are some recommendations:",
                    roadmapSectionButton: [
                        {
                            buttonTitle: "Predictive Analytics",
                            buttonDifficulty: "Intermediate",
                            buttonDuration: "4 weeks",
                            buttonDescription:
                                "Build a machine learning model to predict future trends using real-world datasets.",
                            buttonImage: "https://i.imgur.com/qPzFvF4.jpeg",
                            buttonLink: "https://github.com",
                        },
                        {
                            buttonTitle: "Sentiment Analysis",
                            buttonDifficulty: "Beginner",
                            buttonDuration: "3 weeks",
                            buttonDescription:
                                "Analyze social media text to determine public sentiment on various topics.",
                            buttonImage: "https://i.imgur.com/qPzFvF4.jpeg",
                            buttonLink: "https://github.com",
                        },
                    ],
                },
            ],
        },
    ];

    // Fetch roadmap data based on the ID
    useEffect(() => {
        const selectedRoadmap = dummyData.find((item) => item.id === id);
        setRoadmap(selectedRoadmap);
    }, [id]);

    if (!roadmap) return <p>Loading roadmap details...</p>;

    return (
        <div className={styles.roadmapPost__container}>
            <CareerRoadmapPost roadmap={roadmap} />
        </div>
    );
};

export default CareerRoadmapPostContainer;
