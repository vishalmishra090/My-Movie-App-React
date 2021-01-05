import React from "react";
import { pos_img_url, ph_img_url } from "../url";

function Card({ cardData }) {
  let imgUrl = ph_img_url;
  cardData.poster_path && (imgUrl = `${pos_img_url}${cardData.poster_path}`);

  return (
    <div className="card">
      <img src={imgUrl} alt={cardData.original_title} />
      {console.log(pos_img_url)}
      <h3>{cardData.original_title}</h3>
    </div>
  );
}

export default function ListResult({ searchData }) {
  return (
    <div className="searchResult">
      {searchData.map((cardData) => (
        <Card key={cardData.id} cardData={cardData} />
      ))}
    </div>
  );
}