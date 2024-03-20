import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductPage from './components/ProductPage';



const App: React.FC = () => {
  return (
    <div>
      <Navbar/>

      
      <Routes>
        <Route path='/' element={<ProductPage/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>}/>

      </Routes>
      <Footer/>
   
    
    </div>
  );
};

export default App;
