import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';



function App() {


  return (
    <div className="App bg ">
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About animate={true} />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
