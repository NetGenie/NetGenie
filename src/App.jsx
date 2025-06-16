import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import ResumeBuilder from './components/Resume/ResumeBuilder';
import CoverLetterGenerator from './components/CoverLetter/CoverLetterGenerator';
import Homepage from './pages/HomePage';
import AuthPage from './pages/AuthPage'
import './App.css'
import './index.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/auth' element={<AuthPage/>}/>
        <Route path='/resume' element={<ResumeBuilder/>}/>
        <Route path='/cover' element={<CoverLetterGenerator/>}/>
       
     </Routes>
    </Router>
  );
};

export default App;