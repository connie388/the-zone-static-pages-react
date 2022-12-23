import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Cards.css";
import "../../styles/Helper.css";
function VideoItem(props) {
  return (
    <>
      <div className="cards__item">
        <Link
          className="cards__item__link"
          to={`${props.path}/${props.filename}/${props.extension}?filetype=${props.filetype}`}
          filename={props.filename}
          extension={props.extension}
          filetype={props.filetype}
        >
          <div>
            <figure
              className="films__item__pic-wrap"
              data-category={props.description}
            >
              <video className="film-video">
                <source
                  src={require(`../../assets/videos/${props.filename}.${props.extension}`)}
                  type={props.filetype}
                />
              </video>
              <div className="filmBtn">
                <button className="btn--primary btn--large">
                  START WATCHING
                  <i className="far fa-play-circle" />
                </button>
              </div>
            </figure>
          </div>
        </Link>
      </div>
    </>
  );
}

export default VideoItem;
