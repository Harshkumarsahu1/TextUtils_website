
import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import About from './components/About.js';
import Alert from './components/Alert.js';
import { useState } from 'react';
import {
  BrowserRouter as Router,
    Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const[mode, setMode]=useState('light');
  const[alert, setAlert]=useState(null);
  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type,
    })
  }
const toggleMode=()=>{
  if(mode === 'light'){
    setMode ('dark');
    document.body.style.backgroundColor ='grey';
    showAlert("Dark mode has been enabled","success")
  }
  else{
    setMode('light');
    document.body.style.backgroundColor ='white';
    showAlert("light mode has been enabled","success")
  }
}
  return (
<>
<Router>
<Navbar title="harshukiwebsite" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container">
<Routes>
          <Route path="/about" element={ <About />}>
          </Route>
          <Route path="/" element={ <TextForm showAlert={showAlert} heading="Enter the text to analyze " mode={mode}/>}>
         
          </Route>
        </Routes> 
</div> 
      </Router>
</>    
  );
}

export default App;
