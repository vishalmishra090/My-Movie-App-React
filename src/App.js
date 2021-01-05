import React from "react"
import './App.css';

function App() {
  async function handelClick(){
     let res = await fetch("/.netlify/functions/handelSearch?name=vishal mishra&name=ram");
     let msg = await res.json();
     console.log(msg);
  }
  return (
    <div className="App">
       <button onClick={handelClick}>ClickMe</button>
    </div>
  );
}

export default App;
