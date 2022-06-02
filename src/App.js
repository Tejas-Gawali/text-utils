// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import About from './components/About';
import TextForm from './components/TextForm'
import React, { useState } from "react";
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [mode, setmode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
      })
      setTimeout(()=>{
        setAlert(null);
      }, 500);
  }

  const toggleMode=()=>{
    if (mode==='light') {
      setmode('dark');
      document.body.style.backgroundColor='black';
      showAlert("Dark mode enabled", "success");
      document.title="TextUtils-Dark mode";
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode enabled", "primary");
      document.title="TextUtils-Light mode";
    }
    
    
  }
  return (
    <>
    <Router>
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
        {/* <TextForm showAlert={showAlert} heading="Enter Text to Analyze" mode={mode}/> */}
    <Routes>
      <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Text to Analyze" mode={mode}/>}/>
      <Route exact path="/about" element={<About mode={mode}/>}/>
      
    </Routes>
    
    
    </div>
    </Router>
    
    </>
  );
}

export default App;
