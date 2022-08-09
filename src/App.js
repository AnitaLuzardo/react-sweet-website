import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Footer from './components/Footer';
// import { Button } from '@mui/material';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element= {<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
