import React, { useState } from "react";

export default function SearchBar({ handelSearch }) {

  let [value, setValue] = useState("");

  function handelChange(e) {
    setValue(e.target.value);
  }

  function handelClick() {
    if (value.trim() !== "") {
      handelSearch(value);
      
    }else{
      setValue("");
    }
  }

  function handelKeyDown(e) {
    if(value.trim() !== ""){
      if(e.keyCode === 13){
        handelSearch(value);
      }
    }else{
      setValue("");
    }
  }
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={handelChange}
        onKeyDown={handelKeyDown}
        placeholder="type any movie name.."
      />
      <button onClick={handelClick}>Search</button>
    </>
  );
}