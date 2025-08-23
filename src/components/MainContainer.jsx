import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movie?.nowPlayingMovies);

  if (movies === null) return; // early return
  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;
  console.log("🚀 ~ MainContainer ~ mainMovie:", mainMovie);
  console.log("🚀 ~ Browse ~ movies:", movies);

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
