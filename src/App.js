import React, { useState } from "react"
import './App.css';
import SearchBar from "./components/SearchBar";
import ListMovie from "./components/ListMovie";
function App() {

  let [searchResult, setSearchResult] = useState([]);
  
  async function handelSearch(value){
     let res = await fetch("/.netlify/functions/handelSearch?query="+value);
     if(res.status === 200){
       let resBody = await res.json();
       setSearchResult([...resBody.results]);
     }
  }

  return (
    <div className="App">
       <SearchBar handelSearch = {handelSearch}/>
       {(searchResult.length !== 0) && <ListMovie listItem = {[...searchResult]}/>}
   </div>
  );
}

export default App;
