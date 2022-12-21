import React from "react";
import VideoItem from "./VideoItem";
import "../../styles/Cards.css";
import filmList from "./filmList";

function Videos() {
  const videos = require.context("./videos", true);

  return (
    <div className="cards">
      <h1> Check out these videos!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          {filmList.map((item, idx) => {
            let videosrc = videos(`./${item.filename}.${item.extension}`);
            return (
              <VideoItem
                key={idx}
                videosrc={videosrc}
                filename={item.filename}
                extension={item.extension}
                filetype={item.filetype}
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

export default Videos;
