import React from "react";
import PhotoItem from "./PhotoItem";
import "./Cards.css";
import photoList from "../../assets/images/photoList";

function Photos() {
  const images = require.context("../../assets/images", true);

  return (
    <div className="cards">
      <h1> Check out these moments!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          {photoList.map((item, idx) => {
            // let imgsrc = images(`./img-${item.index}.jpg`);
            let imgsrc = images(`./${item.img}`);
            return (
              <PhotoItem
                key={idx}
                src={imgsrc}
                text={item.text}
                label={item.label}
                path={item.path}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Photos;
