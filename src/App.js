// import './App.css';
import {useState} from 'react'
import { BrowserRouter,Routes,Route} from  "react-router-dom";
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';

function App() {
  const [mode,setMode]=useState("light")
  const[alert,setAlert]=useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
  const toggleMode=()=>{
      if(mode === 'light'){
        setMode('dark')
        document.body.style.backgroundColor='#042743'
        showAlert("Dark mode has been Enabled","success")
        document.title="TextUtils - Darkmode"
        // setInterval(()=>{
        //     document.title="Install the  app now"
        // },1500)
        // setInterval(()=>{
        //     document.title="Hurry up !!!"
        // },2000)
      }
      else{
        setMode('light')
        document.body.style.backgroundColor='white'
        showAlert("Light mode has been Enabled","success")
        document.title="TextUtils - Lightmode"
      }
  }
  return (
    <>
    <BrowserRouter>
    
        <Navbar title="Word Counter" about="About us" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <Routes>
          <Route 
          path="/about"
          element= {<About mode={mode}/>}
          />
          <Route path="/home"
          element={ <div className='container my-3'>
          <Textform heading="Word Counter" showAlert={showAlert} mode={mode}/>
          </div>}/>
        </Routes>
        </BrowserRouter>
        
    </>
  );
}

export default App;
