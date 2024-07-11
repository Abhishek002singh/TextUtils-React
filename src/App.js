import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Textform from './components/Textform.js';
import Alert from './components/Alert.js';
import About from './components/About.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const [mode, setmode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success")

      // to change the title dynamicaly
      //document.title='TextUtils - Dark Mode';


      //   setInterval(()=>{
      //     document.title='TextUtils is amaxing';
      //   }, 2000)

      //   setInterval(()=>{
      //     document.title='Install TextUtils Now';
      //   }, 1500)

    }

    else {
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");

      // to change the title dynamicaly
      // document.title='TextUtils - Light Mode';
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container my-3'>
          <Routes>
            <Route exact path="/about" element={<About />}/>
            <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
