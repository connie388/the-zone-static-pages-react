import React from "react";
import { useParams, useLocation } from "react-router-dom";
// import ReactPlayer from "react-player";
import "../../styles/Cards.css";

function Video() {
  let params = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const filetype = queryParams.get("filetype");

  // const videos = require.context("./videos", true);
  // let videosrc = videos(`./${params.filename}.${params.extension}`);

  return (
    // <div className="player-wrapper">
    //  <ReactPlayer
    //   className="react-player"
    //   url={videosrc}
    //   playing={true}
    //   controls={true}
    //   width="100%"
    //   height="100%"
    // />
    // </div>

    <video className="film-video" autoPlay>
      <source
        src={require(`../../assets/videos/${params.filename}.${params.extension}`)}
        type={filetype}
      />
    </video>
  );
}

export default Video;
