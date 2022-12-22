import React from "react";
import { Link } from "react-router-dom";
function PhotoItem(props) {
  return (
    <>
      <div className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              src={require(`./images/${props.src}`)}
              alt="Travel"
              className="cards__item__img"
            />
          </figure>
          <div className="cards__item__info">
            <label className="cards__item__text">{props.text}</label>
          </div>
        </Link>
      </div>
    </>
  );
}

export default PhotoItem;
