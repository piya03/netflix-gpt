import React, { useEffect } from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
// fetching the trailer video and updating the store
const VideoBackground = ({ movieId }) => {
  const { videoBackgroundTrailerId } = useMovieTrailer(movieId);
  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          videoBackgroundTrailerId?.key +
          "?autoplay=1&mute=true"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
