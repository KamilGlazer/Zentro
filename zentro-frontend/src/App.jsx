import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage />}/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<h1>Strona główna (do zmiany)</h1>} />
      </Routes>
    </Router>
  )
};

export default App
