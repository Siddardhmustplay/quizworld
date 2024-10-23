import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import friends from './images/friends.jpg';

const Home = () => {
  const navigate = useNavigate();

  const quizzes = [
    { type: 'friend1', path: '/question' },
    { type: 'friend2', path: '/questionsecond' },
    { type: 'friend3', path: '/questionthird' },
  ];

  const handleStartClick = (quizType, path) => {
    localStorage.setItem('quizType', quizType); // Store quiz type in localStorage
    navigate(path); // Navigate to the specified page
  };

  return (
    <div>
      {quizzes.map((quiz, index) => (
        <section key={index} className="d-flex align-items-center justify-content-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className='col-md-12 text-center'>
                <h1 className='protest-strike-regular-head text-center'>Know Your Friend</h1>
                <div>
                  <img src={friends} className='frnd-png' alt="Friends" />
                </div>
                <button 
                  onClick={() => handleStartClick(quiz.type, quiz.path)} 
                  className='btn-start protest-strike-regular-BTN'
                >
                  Start
                </button>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Home;
