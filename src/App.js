import './style.css';
import React, { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import CustomHooks from './Components/CustomHooks';
import NotFound from './Components/NotFound';
import Logo from './images/logo.svg';
import Test from './Components/Test';

function App() {
  const LinkStyles = {
    textDecoration: 'none',
    color: 'white',
    marginBottom: '20px',
  };

  return (
    <main className="App">
      <div>
        <nav>
          <img src={Logo} />
          <NavLink to="/" style={LinkStyles}>
            Custom Hooks
          </NavLink>
          <NavLink to="/ErrorBoundary" style={LinkStyles}>
            Error boundary
          </NavLink>
          <NavLink to="/PageNotFound" style={LinkStyles}>
            Not Found
          </NavLink>
        </nav>
      </div>

      <div>
        <Routes>
          <Route path="/" element={<CustomHooks />} />
          <Route path="/ErrorBoundary" element={<Test />} />
          <Route path="PageNotFound" element={<NotFound />} />
        </Routes>
      </div>
    </main>
  );
}
export default App;
