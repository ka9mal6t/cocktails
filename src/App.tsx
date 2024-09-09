import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  return (
    <AuthProvider>
    <Router basename='/'>
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </Router>
  </AuthProvider>
  );
}

export default App;
