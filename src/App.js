import Header from './components/Header';
import Home from './components/Home';
import './App.css';
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Fragment } from 'react';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />}> 

           </Route>

           <Route path="/home" element={<Header />}> 

           </Route>
           <Route path="/home" element={<Home />}> 

           </Route>
          
           
           
                            
          

          

        </Routes>
      </Router>
    </div>
  );
}

export default App;
