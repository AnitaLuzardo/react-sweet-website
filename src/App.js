import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import { Button } from '@mui/material';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element= {<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
