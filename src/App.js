
import "./App.css";
// import About from "./Compnents/About";
import Navbar from "./Compnents/Navbar";
import TextForm from "./Compnents/TextForm";
import React, { useState } from 'react'
import Alert from "./Compnents/Alert";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  // For Alert
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type1)=>
  {
    setAlert ({
      msg: message,
      type: type1
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>
  {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode"

      // setInterval(()=>
      // {
      //   document.title = 'TextUtils is Amazing';
      // }, 2000);
      // setInterval(()=>
      // {
      //   document.title = 'Install TextUtils Now';
      // }, 1500);

      
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils Light Mode"

    }

  }
  return(
    <>
    {/* <Router> */}
      <Navbar title="Textutils" aboutText="About Textuitls" mode={mode}  toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        {/* /users --> Component 1
        /users/home --> Component 2 */}
        {/* <Switch> */}
            {/* <Route exact path="/about"> */}
              {/* <About /> */}
            {/* </Route>  */}
            {/* <Route path="/"> */}
              <TextForm heading="Enter your text to analyze below" mode={mode} showAlert={showAlert}/>
            {/* </Route> */}
        {/* </Switch> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
