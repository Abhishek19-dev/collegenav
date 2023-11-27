import './App.css';
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Navbar from './features/Nav.jsx'
import HomePage from './pages/HomePage.jsx';
// import FirstSection from './features/FirstSection.jsx';




function App() {
  return (
    <>
    <div className='App'>
    <Router>
    <Navbar />
    <Routes>
        <Route path = "/" element={<HomePage />} />
    </Routes>
    </Router>
    </div>
   </>
  );
}

export default App;
