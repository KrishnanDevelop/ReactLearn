import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import EditData from './Components/EditData';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userLogin" element={<Login />} />
          <Route path="/editData/:userId" element={<EditData />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
