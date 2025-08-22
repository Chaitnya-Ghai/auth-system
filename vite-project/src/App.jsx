import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  return (
    <> 
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={ <Login></Login>} />
      <Route path="/signup" element={ <SignUp></SignUp> } />
      <Route path="*" element={<NotFound></NotFound>} />
    </Routes>
     </>
  )
}

export default App
