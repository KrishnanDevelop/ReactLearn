// src/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

// Import pages
// import Dashboard from './components/Router/Dashboard'
import About from '../components/Router/About'
import Contact from '../components/Router/Contact'
import Dashboard from '../components/Router/Dashboard';

// export default function AppRoutes() {
//   return (
//     // <Routes>
//     //   <Route path="/" element={<Dashboard />} />
//     //   <Route path="/about" element={<About />} />
//     //   <Route path="/contact" element={<Contact />} />
//     // </Routes>
//   );
// }



export default function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1); // this triggers re-render
  };

  return (
    <div>
      <p>{count}</p> {/* updates on button click */}
      <button onClick={handleClick}>Increase</button>
    </div>
  );
}

      <div>
        <ul>
          <li>dddd
            <div>
              <div style="height:200px">
                <a href="" style="height: 400px"></a>
              </div>
            </div>
          </li>
        </ul>
      </div>
