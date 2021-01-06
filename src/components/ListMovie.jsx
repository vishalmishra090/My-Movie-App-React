import React from "react";
import { pos_img_url, ph_img_url } from "../url";


function Card({ cardItem }) {
  let imgUrl = ph_img_url;
  cardItem.poster_path && (imgUrl = `${pos_img_url}${cardItem.poster_path}`);

  return (
    <div className="card-box">
      <div className="card-img">
         <img src={imgUrl} alt={cardItem.original_title} />
      </div>
      <div className="card-title">
        <h3>{cardItem.original_title}</h3>
      </div>
    </div>
  );
}

export default function ListMovie({ listItem }) {
  
  return (
    <div className="result-box">
      {listItem.map((cardItem) => (
        <Card key={cardItem.id} cardItem={cardItem} />
      ))}
    </div>
  );
}