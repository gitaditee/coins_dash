
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "./index.css";

import Home from '../components/Home';
import Login from '../components/Login';
import { useNavigate, BrowserRouter, Routes, Route  } from "react-router-dom";

function App() {
  
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
