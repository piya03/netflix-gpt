import React, { useEffect } from "react";
import { OPTIONS } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { addVideoBackground } from "../utils/movieSlice";
const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const videoBackgroundTrailerId = useSelector(
    (store) => store?.movie?.nowPlayingMoviesBackground
  );

  async function getMovieVideo() {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      OPTIONS
    );
    const data = await res.json();
    const filterData = data.results?.filter((elem) => elem.type === "Trailer");

    const trailer = filterData.length ? filterData[0] : data.results[0];
    dispatch(addVideoBackground(trailer));
  }

  useEffect(() => {
    getMovieVideo();
  }, []);

  return { videoBackgroundTrailerId }
}

export default useMovieTrailer