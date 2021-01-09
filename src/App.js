import React, { useState, useEffect } from "react"
import './App.css';
import SearchBar from "./components/SearchBar";
import ListMovie from "./components/ListMovie";
function App() {

  let [results, setResults] = useState([])
  let [searchValue, setSearchValue] = useState("")
  let [loading, setloding] = useState(false);
  let [page, setPage] = useState(0)
 

useEffect(() => {

  let target = document.querySelector("#last");
  // console.log(target);
  if(target != null){
    var observer = new IntersectionObserver((entries) => {
      entries.forEach(async function (entry) {
        if (entry.isIntersecting) {
          observer.disconnect();
          let url = "/.netlify/functions/handelSearch?query=";

          setloding(true);
          let res = await fetch(`${url}${searchValue}&page=${page + 1}`);
          if (res.status === 200) {
            let resBody = await res.json();
              if (resBody.total_pages !== 1){
                // console.log("here...")
                setloding(false);
                setResults(
                  (prevResults) => new Set([...prevResults, ...resBody.results])
                );
              } 
              if(page + 1 !== resBody.total_pages)
                  setPage(resBody.page);
            
          }
          
        }
      });
    });
    observer.observe(target);

    
  }

  // console.log("ok...");
  }, [searchValue, page]);
  
  
  async function handelSearch(value){
    setSearchValue(value);
    setloding(true);
     let res = await fetch(`/.netlify/functions/handelSearch?query=${value}&page=${1}`);
    //  console.log(res);
     if(res.status === 200){
       let resBody = await res.json();
       setloding(false);
       setResults([...resBody.results]);
      //  console.log(resBody);
       if (resBody.page !== resBody.total_pages);
          setPage(resBody.page);
       
     }
  }

  return (
    <div className="App">
      <SearchBar handelSearch={handelSearch} />
      {results.length !== 0 && <ListMovie listItem={[...results]} />}
      {loading && (
        <div className="loader">
          <span></span>
        </div>
      )}
    </div>
  );
}

export default React.memo(App);
