import './App.css';
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Navbar from './features/Nav.jsx'
import HomePage from './pages/HomePage.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
// import FirstSection from './features/FirstSection.jsx';




function App() {
  return (
    <>
    <div className='App'>
    <Router>
    <Routes>
        <Route path = "/" element={<HomePage />} />
        <Route path = "/login" element={<Login />} />
        {/* <Route path = "/register" element={<Register />} /> */}
    </Routes>
    </Router>
    </div>
   </>
  );
}

export default App;
