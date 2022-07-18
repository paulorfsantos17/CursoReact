import {BrowserRouter, Route, Routes, } from 'react-router-dom'
import './App.css';
import PageOne from './Pages/PageOne';
import PageTwo from './Pages/PageTwo';
import PageThree from './Pages/PageThree'
import Navbar from './components/Navbar';

function App() {
  return (
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/pageOne" element={<PageOne/>} />
    <Route path="/pageTwo" element={<PageTwo/>} />
    <Route path="/pageThree" element={<PageThree/>} />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
