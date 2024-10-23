import React, { useState, useEffect } from 'react'; // Ensure useEffect is imported
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import 'bootstrap/dist/css/bootstrap.min.css';
import './Question.css';

const Questions = () => {
  const [quizType, setQuizType] = useState("");
  const [region, setRegion] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate(); // Initialize the useNavigate hook

  useEffect(() => {
    const storedQuizType = localStorage.getItem('quizType');
    const storedRegion = localStorage.getItem('region'); // Retrieve region from localStorage
    const storedUsername = localStorage.getItem('username'); // Retrieve username from localStorage

    if (storedQuizType) {
      setQuizType(storedQuizType); // Set quizType state
    }
    if (storedRegion) {
      setRegion(storedRegion); // Set region state
    }
    if (storedUsername) {
      setUsername(storedUsername); // Set username state
    }
  }, []);

  const handleClick = () => {
    if (!region || !username) {
      alert("Please select a region and enter your name."); // Simple validation
      return; // Prevent navigation if validation fails
    }

    // Store region and username in localStorage
    localStorage.setItem('region', region);
    localStorage.setItem('username', username);

    navigate('/quiz', { state: { region, username } });
  };

  return (
    <div>
      <section id="question-section" className="buytoken d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className='col-md-12 text-center'>
              <h1 className='protest-strike-regular'>How Well Do Your Friends Know You?</h1>
              <div className="quiz-type-display">{quizType && `Quiz Type: ${quizType}`}</div>
            </div>
            <h5 className='protest-strike-regular-inst'>Instructions:</h5>
            <ul>
              <li>Choose your region.</li>
              <li>Enter your name.</li>
              <li>Answer any 10 Questions about yourself.</li>
              <li>Your quiz-link will be ready.</li>
              <li>Share your quiz-link with your friends.</li>
              <li>Your friends will try to guess the right answers.</li>
              <li>Check the score of your friends at your quiz-link!</li>
            </ul>
            
            {/* Region Selection */}
            <div className='col-md-12 text-center region'>
              <label htmlFor="region-select" className='protest-strike-regular-head'>
                Select your region
              </label>
              <select
                id="region-select"
                className='region-select protest-strike-regular-options'
                value={region}
                onChange={(e) => setRegion(e.target.value)} // Update region state
              >
                <option value="">Select</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="China">China</option>
                <option value="UK">UK</option>
                <option value="Australia">Australia</option>
                <option value="Europe">Europe</option>
              </select>
            </div>

            {/* Username Input */}
            <div className='col-md-12 text-center name'>
              <input
                type='text'
                placeholder='Enter your name eg: Joey'
                className='input-name'
                value={username}
                onChange={(e) => setUsername(e.target.value)} // Update username state
              />
            </div>

            {/* Submit Button */}
            <div className='col-md-12 text-center question'>
              <button className='btn btn-primary protest-strike-regular-submit' onClick={handleClick}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Questions;
