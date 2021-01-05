import React from "react";
import { pos_img_url, ph_img_url } from "../../url";

function Card({ cardItem }) {
  let imgUrl = ph_img_url;
  cardItem.poster_path && (imgUrl = `${pos_img_url}${cardItem.poster_path}`);

  return (
    <div className="card">
      <img src={imgUrl} alt={cardItem.original_title} />
      <h3>{cardItem.original_title}</h3>
    </div>
  );
}

export default function ListMovie({ listItem }) {
  
  return (
    <div className="searchResult">
      {listItem.map((cardItem) => (
        <Card key={cardItem.id} cardItem={cardItem} />
      ))}
    </div>
  );
}