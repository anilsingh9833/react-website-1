import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';



function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/services' Component={Services} />
        <Route path='/Products' Component={Products} />
        <Route path='/Sign-up' Component={SignUp} />
      </Routes>
     </Router>
    </>
  );
}


export default App;
