[9:59 pm, 17/02/2023] Mohammad Latif NS: import React, {useState} from 'react'
import '../styles/App.css';
const App = () => {
//code here 
  const [value,setValue]=useState(false)
  
  const handleClick=()=>{
    setValue(!value)
    
  }
  return (
[9:59 pm, 17/02/2023] Mohammad Latif NS: <div className="App">
      <button id="btn1" onClick={handleClick}>
      {value ? "ON" : "OFF"}
      </button>
      <br />
      <br />
      <button id="btn2" onClick={handleClick}>
        {value ? "OFF" : "ON"}
      </button>
    </div>
  );
}

export default App;
