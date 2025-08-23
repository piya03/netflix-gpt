import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    nowPlayingMoviesBackground: null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload
    },
    addVideoBackground: (state, action) => {
      state.nowPlayingMoviesBackground = action.payload
    }
  }
})

export const { addNowPlayingMovies, addVideoBackground } = movieSlice.actions
export default movieSlice.reducer