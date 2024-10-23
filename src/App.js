import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Question from './Question';
import Quizusercheck4 from './Quizusercheck4';
import Questionsecond from './Questionsecond';
import Questionthird from './Questionthird';


function App() {
  const [sessionData, setSessionData] = useState("");

  // Load sessionData from localStorage when the app loads
  useEffect(() => {
    const storedData = localStorage.getItem("mySessionData");
    if (storedData) {
      setSessionData(storedData); // Set sessionData from localStorage
    }
  }, []);

  // Save sessionData to localStorage whenever it changes
  useEffect(() => {
    if (sessionData) {
      localStorage.setItem("mySessionData", sessionData);
    }
  }, [sessionData]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home sessionData={sessionData} setSessionData={setSessionData} />} />
          <Route path="/question" element={<Question sessionData={sessionData} setSessionData={setSessionData} />} />
          <Route path="/questionsecond" element={<Questionsecond sessionData={sessionData} setSessionData={setSessionData} />} />
          <Route path="/questionthird" element={<Questionthird sessionData={sessionData} setSessionData={setSessionData} />} />
          <Route path="/quiz" element={<Quizusercheck4 sessionData={sessionData} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
