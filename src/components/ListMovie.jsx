import React from "react";
import { pos_img_url, ph_img_url } from "../url";

let Card = React.memo(({ cardItem, id}) => {
  let imgUrl = ph_img_url;
  cardItem.poster_path && (imgUrl = `${pos_img_url}${cardItem.poster_path}`);

  return (
    <div className="card-box" id={id}>
      <div className="card-img">
        <img src={imgUrl} alt={cardItem.original_title} />
      </div>
      <div className="card-title">
        <h3>{cardItem.original_title}</h3>
      </div>
    </div>
  );
  });

export default function ListMovie({ listItem}) {

  return (
    <div className="result-box">
      {listItem.map((cardItem, i) => {
        if (i === listItem.length - 1) {
          return <Card id="last" key={cardItem.id + i} cardItem={cardItem} />;
        } else {
          return (
            <Card
              id={`card-${cardItem.id}`}
              key={cardItem.id+"key"+i}
              cardItem={cardItem}
            />
          );
        }
      })}
    </div>
  );
}
