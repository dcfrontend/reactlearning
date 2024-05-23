import './App.css';
//import About from './componantes/About';
import Navbar from './componantes/Navbar';
import Textform from './componantes/Textform';
import React,{useState} from 'react'

function App() {
  const [mode, setDarkMode] = useState('light');

  const toggleMode = () => {    
    if(mode === 'light'){
      setDarkMode('dark');
      document.body.style.backgroundColor = '#042745';
    }
    else{
      setDarkMode('light');
      document.body.style.backgroundColor = '#fff';
    }
  }
  return (
    <>
      <Navbar title="Covert Case" mode={mode} toggleMode ={toggleMode}/>
      <Textform heading="Enter Text Here" mode={mode}/>
      {/* <About /> */}
    </>
  );
}

export default App;
