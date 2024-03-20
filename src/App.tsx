// src/App.tsx

import React from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import { Routes,Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
   
    
    </div>
  );
};

export default App;
