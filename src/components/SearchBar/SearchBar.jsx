import React, { useState } from "react";

export default function SearchBar({ handelSearch }) {
  let [value, setValue] = useState("");
  function handelChange(e) {
    setValue(e.target.value);
  }
  function handelClick() {
    if (value.trim() !== "") {
      handelSearch(value);
      setValue("");
    }
  }
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={handelChange}
        placeholder="type any movie name.."
      />
      <button onClick={handelClick}>Search</button>
    </>
  );
}