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
      title: "Become a Mobile Application Developer",
      author: "Dr HemaLatha Ramalingam",
      profileImage: "https://i.imgur.com/qPzFvF4.jpeg",
      bannerImage: "https://i.imgur.com/qPzFvF4.jpeg",
      description: [
        {
          title: "Inventing the Future",
          content:
            "Imagine creating a system that can detect diseases in their earliest stages, recommend the perfect movie for your Friday night, or even drive a car without human intervention. Machine learning engineers do precisely that. They design and implement systems that enable machines to learn and adapt without explicit programming. As businesses and industries increasingly rely on AI-driven solutions, the demand for skilled machine learning engineers has skyrocketed. But how do you step into this exciting and impactful field?",
        },
        {
          title: "The Foundation: What Does a Machine Learning Engineer Do?",
          content:
            "A machine learning engineer sits at the intersection of software engineering and data science. They design algorithms, build models, and deploy systems that make predictions or automate tasks based on data. This role requires a strong foundation in programming, mathematics, and data manipulation—but it’s also a field where creativity thrives as you solve complex, real-world problems.",
        },
      ],      
      sections: [
        {
          title: "Recommended Courses",
          text: "Taking an external course alongside your degree in machine learning can provide practical skills, industry-relevant knowledge, and exposure to cutting-edge tools not always covered in a standard curriculum. It enhances your expertise, builds your portfolio, and gives you a competitive edge with certifications that demonstrate your abilities.",
          items: [
            {
              text: "Stanford Machine Learning, Coursera",
              link: "https://coursera.org",
              image: "https://i.imgur.com/qPzFvF4.jpeg",
              author: "Andrew Ng",
            },
            {
              text: "Deep Learning Specialization, Coursera",
              link: "https://coursera.org",
              image: "https://i.imgur.com/qPzFvF4.jpeg",
              author: "Andrew Ng",
            },
          ],
        },
        {
          title: "Recommended Competitions",
          text: "Working on machine learning projects is essential for applying theoretical knowledge to real-world problems, building practical skills, and gaining experience with tools like TensorFlow or PyTorch. Projects showcase your problem-solving abilities and demonstrate tangible results, making your portfolio stand out to employers and increasing your chances of landing a job in machine learning. Here are some recommendations:",
          items: [
            {
              text: "Kaggle Titanic Challenge",
              link: "https://kaggle.com",
              image: "https://i.imgur.com/qPzFvF4.jpeg",
              author: "Kaggle",
            },
          ],
        },
      ],
      projects: [
        {
          title: "Recommended Projects",
          text: "Working on machine learning projects is essential for applying theoretical knowledge to real-world problems, building practical skills, and gaining experience with tools like TensorFlow or PyTorch. Projects showcase your problem-solving abilities and demonstrate tangible results, making your portfolio stand out to employers and increasing your chances of landing a job in machine learning. Here are some recommendations:",
          buttons: [
            {
              name: "Predictive Analytics",
              difficulty: "Intermediate",
              duration: "4 weeks",
              description: "Build a machine learning model to predict future trends using real-world datasets.",
              image: "https://i.imgur.com/qPzFvF4.jpeg",
              link: "https://github.com",
              buttonText: "View Project",
            },
            {
              name: "Sentiment Analysis",
              difficulty: "Beginner",
              duration: "3 weeks",
              description: "Analyze social media text to determine public sentiment on various topics.",
              image: "https://i.imgur.com/qPzFvF4.jpeg",
              link: "https://github.com",
              buttonText: "View Project",
            },
          ],        
        },
      ],
    },
    {
      id: "2",
      title: "Become a Platform Engineer",
      author: "Alex Hormozi",
      profileImage: "https://i.imgur.com/qPzFvF4.jpeg",
      bannerImage: "https://i.imgur.com/qPzFvF4.jpeg",
      description: [
        {
          title: "Inventing the Future",
          content:
            "Imagine creating a system that can detect diseases in their earliest stages, recommend the perfect movie for your Friday night, or even drive a car without human intervention. Machine learning engineers do precisely that. They design and implement systems that enable machines to learn and adapt without explicit programming. As businesses and industries increasingly rely on AI-driven solutions, the demand for skilled machine learning engineers has skyrocketed. But how do you step into this exciting and impactful field?",
        },
        {
          title: "The Foundation: What Does a Machine Learning Engineer Do?",
          content:
            "A machine learning engineer sits at the intersection of software engineering and data science. They design algorithms, build models, and deploy systems that make predictions or automate tasks based on data. This role requires a strong foundation in programming, mathematics, and data manipulation—but it’s also a field where creativity thrives as you solve complex, real-world problems.",
        },
      ],      
      sections: [
        {
          title: "Recommended Courses",
          text: "Taking an external course alongside your degree in machine learning can provide practical skills, industry-relevant knowledge, and exposure to cutting-edge tools not always covered in a standard curriculum. It enhances your expertise, builds your portfolio, and gives you a competitive edge with certifications that demonstrate your abilities.",
          items: [
            {
              text: "Stanford Machine Learning, Coursera",
              link: "https://coursera.org",
              image: "https://i.imgur.com/qPzFvF4.jpeg",
              author: "Andrew Ng",
            },
            {
              text: "Deep Learning Specialization, Coursera",
              link: "https://coursera.org",
              image: "https://i.imgur.com/qPzFvF4.jpeg",
              author: "Andrew Ng",
            },
          ],
        },
        {
          title: "Recommended Competitions",
          text: "Working on machine learning projects is essential for applying theoretical knowledge to real-world problems, building practical skills, and gaining experience with tools like TensorFlow or PyTorch. Projects showcase your problem-solving abilities and demonstrate tangible results, making your portfolio stand out to employers and increasing your chances of landing a job in machine learning. Here are some recommendations:",
          items: [
            {
              text: "Kaggle Titanic Challenge",
              link: "https://kaggle.com",
              image: "https://i.imgur.com/qPzFvF4.jpeg",
              author: "Kaggle",
            },
          ],
        },
      ],
      projects: [
        {
          title: "Recommended Projects",
          text: "Working on machine learning projects is essential for applying theoretical knowledge to real-world problems, building practical skills, and gaining experience with tools like TensorFlow or PyTorch. Projects showcase your problem-solving abilities and demonstrate tangible results, making your portfolio stand out to employers and increasing your chances of landing a job in machine learning. Here are some recommendations:",
          buttons: [
            {
              name: "Predictive Analytics",
              difficulty: "Intermediate",
              duration: "4 weeks",
              description: "Build a machine learning model to predict future trends using real-world datasets.",
              image: "https://i.imgur.com/qPzFvF4.jpeg",
              link: "https://github.com",
              buttonText: "View Project",
            },
            {
              name: "Sentiment Analysis",
              difficulty: "Beginner",
              duration: "3 weeks",
              description: "Analyze social media text to determine public sentiment on various topics.",
              image: "https://i.imgur.com/qPzFvF4.jpeg",
              link: "https://github.com",
              buttonText: "View Project",
            },
          ],        
        },
      ],
    },
    {
      id: "3",
      title: "Become a Web Developer",
      author: "Nikola Tesla",
      profileImage: "https://i.imgur.com/qPzFvF4.jpeg",
      bannerImage: "https://i.imgur.com/qPzFvF4.jpeg",
      description: [
        {
          title: "Inventing the Future",
          content:
            "Imagine creating a system that can detect diseases in their earliest stages, recommend the perfect movie for your Friday night, or even drive a car without human intervention. Machine learning engineers do precisely that. They design and implement systems that enable machines to learn and adapt without explicit programming. As businesses and industries increasingly rely on AI-driven solutions, the demand for skilled machine learning engineers has skyrocketed. But how do you step into this exciting and impactful field?",
        },
        {
          title: "The Foundation: What Does a Machine Learning Engineer Do?",
          content:
            "A machine learning engineer sits at the intersection of software engineering and data science. They design algorithms, build models, and deploy systems that make predictions or automate tasks based on data. This role requires a strong foundation in programming, mathematics, and data manipulation—but it’s also a field where creativity thrives as you solve complex, real-world problems.",
        },
      ],      
      sections: [
        {
          title: "Recommended Courses",
          text: "Taking an external course alongside your degree in machine learning can provide practical skills, industry-relevant knowledge, and exposure to cutting-edge tools not always covered in a standard curriculum. It enhances your expertise, builds your portfolio, and gives you a competitive edge with certifications that demonstrate your abilities.",
          items: [
            {
              text: "Stanford Machine Learning, Coursera",
              link: "https://coursera.org",
              image: "https://i.imgur.com/qPzFvF4.jpeg",
              author: "Andrew Ng",
            },
            {
              text: "Deep Learning Specialization, Coursera",
              link: "https://coursera.org",
              image: "https://i.imgur.com/qPzFvF4.jpeg",
              author: "Andrew Ng",
            },
          ],
        },
        {
          title: "Recommended Competitions",
          text: "Working on machine learning projects is essential for applying theoretical knowledge to real-world problems, building practical skills, and gaining experience with tools like TensorFlow or PyTorch. Projects showcase your problem-solving abilities and demonstrate tangible results, making your portfolio stand out to employers and increasing your chances of landing a job in machine learning. Here are some recommendations:",
          items: [
            {
              text: "Kaggle Titanic Challenge",
              link: "https://kaggle.com",
              image: "https://i.imgur.com/qPzFvF4.jpeg",
              author: "Kaggle",
            },
          ],
        },
      ],
      projects: [
        {
          title: "Recommended Projects",
          text: "Working on machine learning projects is essential for applying theoretical knowledge to real-world problems, building practical skills, and gaining experience with tools like TensorFlow or PyTorch. Projects showcase your problem-solving abilities and demonstrate tangible results, making your portfolio stand out to employers and increasing your chances of landing a job in machine learning. Here are some recommendations:",
          buttons: [
            {
              name: "Predictive Analytics",
              difficulty: "Intermediate",
              duration: "4 weeks",
              description: "Build a machine learning model to predict future trends using real-world datasets.",
              image: "https://i.imgur.com/qPzFvF4.jpeg",
              link: "https://github.com",
              buttonText: "View Project",
            },
            {
              name: "Sentiment Analysis",
              difficulty: "Beginner",
              duration: "3 weeks",
              description: "Analyze social media text to determine public sentiment on various topics.",
              image: "https://i.imgur.com/qPzFvF4.jpeg",
              link: "https://github.com",
              buttonText: "View Project",
            },
          ],        
        },
      ],
    },
    {
      id: "4",
      title: "Become a Machine Learning Engineer",
      author: "Andrej Karpathy",
      profileImage: "https://i.imgur.com/qPzFvF4.jpeg",
      bannerImage: "https://i.imgur.com/qPzFvF4.jpeg",
      description: [
        {
          title: "Inventing the Future",
          content:
            "Imagine creating a system that can detect diseases in their earliest stages, recommend the perfect movie for your Friday night, or even drive a car without human intervention. Machine learning engineers do precisely that. They design and implement systems that enable machines to learn and adapt without explicit programming. As businesses and industries increasingly rely on AI-driven solutions, the demand for skilled machine learning engineers has skyrocketed. But how do you step into this exciting and impactful field?",
        },
        {
          title: "The Foundation: What Does a Machine Learning Engineer Do?",
          content:
            "A machine learning engineer sits at the intersection of software engineering and data science. They design algorithms, build models, and deploy systems that make predictions or automate tasks based on data. This role requires a strong foundation in programming, mathematics, and data manipulation—but it’s also a field where creativity thrives as you solve complex, real-world problems.",
        },
      ],      
      sections: [
        {
          title: "Recommended Courses",
          text: "Taking an external course alongside your degree in machine learning can provide practical skills, industry-relevant knowledge, and exposure to cutting-edge tools not always covered in a standard curriculum. It enhances your expertise, builds your portfolio, and gives you a competitive edge with certifications that demonstrate your abilities.",
          items: [
            {
              text: "Stanford Machine Learning, Coursera",
              link: "https://coursera.org",
              image: "https://i.imgur.com/qPzFvF4.jpeg",
              author: "Andrew Ng",
            },
            {
              text: "Deep Learning Specialization, Coursera",
              link: "https://coursera.org",
              image: "https://i.imgur.com/qPzFvF4.jpeg",
              author: "Andrew Ng",
            },
          ],
        },
        {
          title: "Recommended Competitions",
          text: "Working on machine learning projects is essential for applying theoretical knowledge to real-world problems, building practical skills, and gaining experience with tools like TensorFlow or PyTorch. Projects showcase your problem-solving abilities and demonstrate tangible results, making your portfolio stand out to employers and increasing your chances of landing a job in machine learning. Here are some recommendations:",
          items: [
            {
              text: "Kaggle Titanic Challenge",
              link: "https://kaggle.com",
              image: "https://i.imgur.com/qPzFvF4.jpeg",
              author: "Kaggle",
            },
          ],
        },
      ],
      projects: [
        {
          title: "Recommended Projects",
          text: "Working on machine learning projects is essential for applying theoretical knowledge to real-world problems, building practical skills, and gaining experience with tools like TensorFlow or PyTorch. Projects showcase your problem-solving abilities and demonstrate tangible results, making your portfolio stand out to employers and increasing your chances of landing a job in machine learning. Here are some recommendations:",
          buttons: [
            {
              name: "Predictive Analytics",
              difficulty: "Intermediate",
              duration: "4 weeks",
              description: "Build a machine learning model to predict future trends using real-world datasets.",
              image: "https://i.imgur.com/qPzFvF4.jpeg",
              link: "https://github.com",
              buttonText: "View Project",
            },
            {
              name: "Sentiment Analysis",
              difficulty: "Beginner",
              duration: "3 weeks",
              description: "Analyze social media text to determine public sentiment on various topics.",
              image: "https://i.imgur.com/qPzFvF4.jpeg",
              link: "https://github.com",
              buttonText: "View Project",
            },
          ],        
        },
      ],
    },
    {
      id: "5",
      title: "Become a Data Analyst",
      author: "Dr Abdul Hadi",
      profileImage: "https://i.imgur.com/qPzFvF4.jpeg",
      bannerImage: "https://i.imgur.com/qPzFvF4.jpeg",
      description: [
        {
          title: "Inventing the Future",
          content:
            "Imagine creating a system that can detect diseases in their earliest stages, recommend the perfect movie for your Friday night, or even drive a car without human intervention. Machine learning engineers do precisely that. They design and implement systems that enable machines to learn and adapt without explicit programming. As businesses and industries increasingly rely on AI-driven solutions, the demand for skilled machine learning engineers has skyrocketed. But how do you step into this exciting and impactful field?",
        },
        {
          title: "The Foundation: What Does a Machine Learning Engineer Do?",
          content:
            "A machine learning engineer sits at the intersection of software engineering and data science. They design algorithms, build models, and deploy systems that make predictions or automate tasks based on data. This role requires a strong foundation in programming, mathematics, and data manipulation—but it’s also a field where creativity thrives as you solve complex, real-world problems.",
        },
      ],      
      sections: [
        {
          title: "Recommended Courses",
          text: "Taking an external course alongside your degree in machine learning can provide practical skills, industry-relevant knowledge, and exposure to cutting-edge tools not always covered in a standard curriculum. It enhances your expertise, builds your portfolio, and gives you a competitive edge with certifications that demonstrate your abilities.",
          items: [
            {
              text: "Stanford Machine Learning, Coursera",
              link: "https://coursera.org",
              image: "https://i.imgur.com/qPzFvF4.jpeg",
              author: "Andrew Ng",
            },
            {
              text: "Deep Learning Specialization, Coursera",
              link: "https://coursera.org",
              image: "https://i.imgur.com/qPzFvF4.jpeg",
              author: "Andrew Ng",
            },
          ],
        },
        {
          title: "Recommended Competitions",
          text: "Working on machine learning projects is essential for applying theoretical knowledge to real-world problems, building practical skills, and gaining experience with tools like TensorFlow or PyTorch. Projects showcase your problem-solving abilities and demonstrate tangible results, making your portfolio stand out to employers and increasing your chances of landing a job in machine learning. Here are some recommendations:",
          items: [
            {
              text: "Kaggle Titanic Challenge",
              link: "https://kaggle.com",
              image: "https://i.imgur.com/qPzFvF4.jpeg",
              author: "Kaggle",
            },
          ],
        },
      ],
      projects: [
        {
          title: "Recommended Projects",
          text: "Working on machine learning projects is essential for applying theoretical knowledge to real-world problems, building practical skills, and gaining experience with tools like TensorFlow or PyTorch. Projects showcase your problem-solving abilities and demonstrate tangible results, making your portfolio stand out to employers and increasing your chances of landing a job in machine learning. Here are some recommendations:",
          buttons: [
            {
              name: "Predictive Analytics",
              difficulty: "Intermediate",
              duration: "4 weeks",
              description: "Build a machine learning model to predict future trends using real-world datasets.",
              image: "https://i.imgur.com/qPzFvF4.jpeg",
              link: "https://github.com",
              buttonText: "View Project",
            },
            {
              name: "Sentiment Analysis",
              difficulty: "Beginner",
              duration: "3 weeks",
              description: "Analyze social media text to determine public sentiment on various topics.",
              image: "https://i.imgur.com/qPzFvF4.jpeg",
              link: "https://github.com",
              buttonText: "View Project",
            },
          ],        
        },
      ],
    },
    {
      id: "6",
      title: "Become a UI/UX Designer",
      author: "Dr Hemalatha Ramalingam",
      profileImage: "https://i.imgur.com/qPzFvF4.jpeg",
      bannerImage: "https://i.imgur.com/qPzFvF4.jpeg",
      description: [
        {
          title: "Inventing the Future",
          content:
            "Imagine creating a system that can detect diseases in their earliest stages, recommend the perfect movie for your Friday night, or even drive a car without human intervention. Machine learning engineers do precisely that. They design and implement systems that enable machines to learn and adapt without explicit programming. As businesses and industries increasingly rely on AI-driven solutions, the demand for skilled machine learning engineers has skyrocketed. But how do you step into this exciting and impactful field?",
        },
        {
          title: "The Foundation: What Does a Machine Learning Engineer Do?",
          content:
            "A machine learning engineer sits at the intersection of software engineering and data science. They design algorithms, build models, and deploy systems that make predictions or automate tasks based on data. This role requires a strong foundation in programming, mathematics, and data manipulation—but it’s also a field where creativity thrives as you solve complex, real-world problems.",
        },
      ],      
      sections: [
        {
          title: "Recommended Courses",
          text: "Taking an external course alongside your degree in machine learning can provide practical skills, industry-relevant knowledge, and exposure to cutting-edge tools not always covered in a standard curriculum. It enhances your expertise, builds your portfolio, and gives you a competitive edge with certifications that demonstrate your abilities.",
          items: [
            {
              text: "Stanford Machine Learning, Coursera",
              link: "https://coursera.org",
              image: "https://i.imgur.com/qPzFvF4.jpeg",
              author: "Andrew Ng",
            },
            {
              text: "Deep Learning Specialization, Coursera",
              link: "https://coursera.org",
              image: "https://i.imgur.com/qPzFvF4.jpeg",
              author: "Andrew Ng",
            },
          ],
        },
        {
          title: "Recommended Competitions",
          text: "Working on machine learning projects is essential for applying theoretical knowledge to real-world problems, building practical skills, and gaining experience with tools like TensorFlow or PyTorch. Projects showcase your problem-solving abilities and demonstrate tangible results, making your portfolio stand out to employers and increasing your chances of landing a job in machine learning. Here are some recommendations:",
          items: [
            {
              text: "Kaggle Titanic Challenge",
              link: "https://kaggle.com",
              image: "https://i.imgur.com/qPzFvF4.jpeg",
              author: "Kaggle",
            },
          ],
        },
      ],
      projects: [
        {
          title: "Recommended Projects",
          text: "Working on machine learning projects is essential for applying theoretical knowledge to real-world problems, building practical skills, and gaining experience with tools like TensorFlow or PyTorch. Projects showcase your problem-solving abilities and demonstrate tangible results, making your portfolio stand out to employers and increasing your chances of landing a job in machine learning. Here are some recommendations:",
          buttons: [
            {
              name: "Predictive Analytics",
              difficulty: "Intermediate",
              duration: "4 weeks",
              description: "Build a machine learning model to predict future trends using real-world datasets.",
              image: "https://i.imgur.com/qPzFvF4.jpeg",
              link: "https://github.com",
              buttonText: "View Project",
            },
            {
              name: "Sentiment Analysis",
              difficulty: "Beginner",
              duration: "3 weeks",
              description: "Analyze social media text to determine public sentiment on various topics.",
              image: "https://i.imgur.com/qPzFvF4.jpeg",
              link: "https://github.com",
              buttonText: "View Project",
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
