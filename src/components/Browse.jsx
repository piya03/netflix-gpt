import React, { useEffect } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/*  MainContainer 
            VideoBackground
            VideoTitle
           SecondaryContainer
            MovieList *n
            Card +n
  */}
    </>
  );
};

export default Browse;
