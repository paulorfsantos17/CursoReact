
import './App.css';

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import Home from './pages/Home/Home'
import About from './pages/About/About';

import Navbar from './components/Navbar'
import Products from './pages/Product/Products';
import Info from './pages/Product/Info';
import NotFound from './components/NotFound';
import Serachform from './components/Serachform';
import Search from './pages/Search/Search';

function App() {
  return (
    <div className='App'>
      <h1>React Router</h1>
    <BrowserRouter>
      <Navbar />
      <Serachform />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/products/:id/info" element={<Info />} />
        <Route path="/company" element={<Navigate to="/about" />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
