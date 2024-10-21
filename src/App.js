import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'
import Question from './Question';
import Quizusercheck3 from './Quizusercheck3';
import Questionsecond from './Questionsecond';
import Questionthird from './Questionthird';
function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/question" element={<Question />} />
        <Route path="/questionsecond" element={<Questionsecond />} />
        <Route path="/questionthird" element={<Questionthird />} /> 
        <Route path="/quiz" element={<Quizusercheck3 />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
