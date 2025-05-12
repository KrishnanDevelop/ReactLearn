import logo from './logo.svg';
import './App.css';
import Garage from './components/Garage';
import Dashboard from './components/Router/Dashboard'
import About from './components/Router/About'
import Contact from './components/Router/Contact'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Paramter from './components/Router/Paramter';


function App() {
  return (
    // <Garage/>
    <div className='App'>
      <BrowserRouter>
      <ul>
            <li>
                    <Link to='/'>Home</Link>
            </li>
            <li>
                    <Link to='/contact'>Contact</Link>
            </li>
            <li>
                    <Link to='/about'>About</Link>
            </li>
            <li>
                    <Link to='/parameter/2'>parameter</Link>
            </li>
      </ul>
          <Routes>
              <Route path="/" element={<Dashboard/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/parameter/:id" element={<Paramter/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
