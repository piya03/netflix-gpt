import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { OPTIONS } from "../constants"

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  // fetch data from TMDB api and update store
  async function getNowPlayingMovies() {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      OPTIONS
    );

    const data = await res.json();
    dispatch(addNowPlayingMovies(data.results));
  }

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
}

export default useNowPlayingMovies