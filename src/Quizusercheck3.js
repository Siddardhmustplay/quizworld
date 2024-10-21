import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Quiz.css';

const Quizusercheck3 = () => {
    const location = useLocation(); // Get the location object
    const navigate = useNavigate(); // Initialize navigate
    const { region, username } = location.state || {}; // Destructure state

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [hasCompletedTask, setHasCompletedTask] = useState(false); // State to track if the user has completed the quiz
    const [isQuizCompleted, setIsQuizCompleted] = useState(false); // State to track quiz completion
    const [formData, setFormData] = useState({
        dateofbirth: "", // Only store dateofbirth
        crickter: "",
        actor: "",
        car: "",
        bike: "",
        place: "",
        teacher: "",
        pet: "",
        hillstation: "",
        commonname: "",
    });

    const questions = [
        {
            question: "What is your Date of Birth (dateofbirth)?", // Update the question to reflect only dateofbirth
            options: ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            field: 'dateofbirth', // Update field to dateofbirth
        },
        {
            question: "Who is your favourite cricketer?",
            options: ["", "Sachin Tendulkar", "Virat Kohli", "MS Dhoni", "Ricky Ponting"],
            field: 'crickter',
        },
        {
            question: "Who is your favourite actor?",
            options: ["", "Shah Rukh Khan", "Salman Khan", "Aamir Khan", "Ranbir Kapoor"],
            field: 'actor',
        },
        {
            question: "Who is your favourite teacher?",
            options: ["", "Mr. Smith", "Mrs. Johnson", "Mr. Brown", "Ms. Taylor"],
            field: 'teacher',
        },
        {
            question: "What is your favourite bike?",
            options: ["", "Harley Davidson", "Ducati", "Yamaha", "Kawasaki"],
            field: 'bike',
        },
        {
            question: "What is your favourite hill station?",
            options: ["", "Ooty", "Coorg", "Ladakh", "Manali"],
            field: 'hillstation',
        },
        {
            question: "What is your favourite pet?",
            options: ["", "Dog", "Cat", "Both"],
            field: 'pet',
        },
        {
            question: "What is your common name calling by friends?",
            options: ["", "Chintu", "Nani", "Chinna"],
            field: 'commonname',
        },
        {
            question: "What is your favourite place?",
            options: ["", "Hyderabad", "Bangalore", "Delhi", "Andhra Pradesh"],
            field: 'place',
        },
        {
            question: "What is your favourite car?",
            options: ["", "Porsche", "Ducati", "Lamborghini", "Audi"],
            field: 'car',
        },
    ];


    useEffect(() => {
        // Dynamically load Telegram script
        const telegramScript = document.createElement('script');
        telegramScript.src = "https://telegram.org/js/games.js";
        document.body.appendChild(telegramScript);

        // Fetch user data from Supabase to check if the user has completed the quiz
        const checkIfUserHasCompletedTask = async () => {
            const SUPABASE_URL = 'https://tvzirhubwcmgwachroza.supabase.co/rest/v1/Quizdata';
            const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2emlyaHVid2NtZ3dhY2hyb3phIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcyNTM0NDEsImV4cCI6MjA0MjgyOTQ0MX0.Dt4fUofu9MgETlh3zl29021YzQjebwKiJmcgVPY_G-o';
            const SUPABASE_BEARER_KEY = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2emlyaHVid2NtZ3dhY2hyb3phIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNzI1MzQ0MSwiZXhwIjoyMDQyODI5NDQxfQ.bYWGSemkvbQ1pKFk-PkBtHcw9B5yD5mUgfbp7cEA0-E';

            const headers = {
                'Content-Type': 'application/json',
                'apikey': SUPABASE_ANON_KEY,
                'Authorization': SUPABASE_BEARER_KEY,
            };

            try {
                const response = await fetch(`${SUPABASE_URL}?username=eq.${username}`, {
                    method: 'GET',
                    headers: headers,
                });

                const data = await response.json();

                if (data.length > 0) {
                    setHasCompletedTask(true); // User has completed the task
                }
            } catch (error) {
                console.error('Error checking user task status:', error);
            }
        };

        if (username) {
            checkIfUserHasCompletedTask();
        }

        // Cleanup function to remove the script when component unmounts
        return () => {
            document.body.removeChild(telegramScript);
        };
    }, [username]);

    const handleChange = (event) => {
        const { value } = event.target;
        setFormData({
            ...formData,
            [questions[currentQuestionIndex].field]: value, // Update the corresponding field
        });
    };

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            postScoreToDatabase(); // Call the function to post data when quiz is complete
        }
    };

    const postScoreToDatabase = async () => {
        const SUPABASE_URL = 'https://tvzirhubwcmgwachroza.supabase.co/rest/v1/Quizdata';
        const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2emlyaHVid2NtZ3dhY2hyb3phIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcyNTM0NDEsImV4cCI6MjA0MjgyOTQ0MX0.Dt4fUofu9MgETlh3zl29021YzQjebwKiJmcgVPY_G-o';
        const SUPABASE_BEARER_KEY = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2emlyaHVid2NtZ3dhY2hyb3phIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNzI1MzQ0MSwiZXhwIjoyMDQyODI5NDQxfQ.bYWGSemkvbQ1pKFk-PkBtHcw9B5yD5mUgfbp7cEA0-E';

        const headers = {
            'Content-Type': 'application/json',
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': SUPABASE_BEARER_KEY,
        };

        if (!formData.dateofbirth) {
            console.error('Please select a valid dateofbirth.');
            return;
        }

        try {
            const response = await fetch(SUPABASE_URL, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({
                    username: username,
                    region: region,
                    dateofbirth: formData.dateofbirth,
                    ...formData,
                }),
            });

            if (response.ok) {
                console.log('Data posted successfully!');
                setIsQuizCompleted(true); // Mark the quiz as completed
            } else {
                const error = await response.json();
                console.error('Error posting data:', error);
            }
        } catch (error) {
            console.error('Error posting data:', error);
        }
    };

    const handleBack = () => {
        navigate('/'); // Navigate to home page on 'Back' button click
    };

    const shareOnTelegram = () => {
        if (window.TelegramGameProxy) {
            window.TelegramGameProxy.shareScore();
        } else {
            console.error('TelegramGameProxy is not available.');
        }
    };
    const shareOnX = () => {
        const url = 'https://your-quiz-link.com'; // Replace with your quiz link
        const text = encodeURIComponent('Check out my quiz results!');
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
    };

    if (isQuizCompleted) {
        return (
            <div className="text-center">
                <h1>Quiz completed</h1>
                <button className="btn btn-primary mt-3" onClick={handleBack}>
                    Back
                </button>
                <div className="share-buttons mt-3">
                    <button className="btn-t" onClick={shareOnTelegram}>
                        Share on Telegram
                    </button>
                    <button className="btn-x" onClick={shareOnX}>
                        Share on X
                    </button>
                </div>
            </div>
        );
    }

    if (hasCompletedTask) {
        return (
            <div className="completed-task-message text-center">
                <h1>You have completed the task!</h1>
            </div>
        );
    }

    return (
        <div>
            <section id="question-section" className="buytoken d-flex align-items-center justify-content-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className='col-md-12 text-center'>
                            <h1 className='protest-strike-regular'>Welcome to Quiz Questions</h1>
                            <div className='progress'>
                                <div
                                    className='progress-bar'
                                    style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                                >
                                    {currentQuestionIndex + 1} / {questions.length}
                                </div>
                            </div>
                            <div className='question protest-strike-regular'>
                                <p>{questions[currentQuestionIndex].question}</p>

                                <select
                                    className='form-select'
                                    value={formData[questions[currentQuestionIndex].field] || ""}
                                    onChange={handleChange}
                                >
                                    {questions[currentQuestionIndex].options.map((option, index) => (
                                        <option key={index} value={option}>{option}</option>
                                    ))}
                                </select>

                                <button 
                                    className="btn btn-primary mt-3" 
                                    onClick={handleNext}
                                >
                                    {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Submit'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Quizusercheck3;
