import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Skills from './Component/Skills/Skills';
import Projects from './Component/Peojects/Projects';

function App() {
  return (
    <div>
       <Navbar></Navbar>
       <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='home' element={<Home></Home>}></Route>
         <Route path='about' element={<About></About>}></Route>
         <Route path='skills' element={<Skills></Skills>}></Route>
         <Route path='projects' element={<Projects></Projects>}></Route>
       </Routes>
    </div>
  );
}

export default App;
