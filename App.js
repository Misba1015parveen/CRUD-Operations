import './App.css';
import React from "react";

import './components/Create.css'; 
import './components/Edit.css';   
import './components/Home.css';   
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Create from "./components/Create";
import Edit from "./components/Edit";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <h1 className='content'> !! Welcome to CRUD Operations !!</h1><br></br>
      <h1 className='container'> ...... CRUD APPLICATION .....</h1>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
        path="/create"
        element={<Create />}
        />
        <Route
        path="/edit"
        element={<Edit />}
        />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
