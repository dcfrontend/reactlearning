
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import "./App.css";
import Alert from "./componantes/Alert";
import About from "./componantes/About";
import Navbar from "./componantes/Navbar";
import Textform from "./componantes/Textform";
import React, { useState } from "react";
//import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  const [mode, setDarkMode] = useState("light");
  const [alert, setAlert] = useState(null);

  let showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "#042745";
      showAlert("Dark Mode is enabled.", "success");
    } else {
      setDarkMode("light");
      document.body.style.backgroundColor = "#fff";
      showAlert("Light Mode is enabled.", "success");
    }
  };
  return (
 
    <Router>
       <Navbar title="Covert Case" mode={mode} toggleMode={toggleMode} />
      <Alert Alert={alert} />
      <Routes>
          <Route path="/"  element={<About />}></Route>
          <Route path="/textform" element={<Textform heading="Enter Text Here" mode={mode} />}></Route>
      </Routes>
      </Router>

  );
}

export default App;
