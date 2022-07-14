
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home/Home'
import About from './pages/About/About';

import Navbar from './components/Navbar'

function App() {
  return (
    <div className='App'>
      <h1>React Router</h1>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
