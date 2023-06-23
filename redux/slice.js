import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchText: "",
  episodes: [],
  locations: [],
  pageEpisode: 1,
  pageLocation: 1,
  isLoading: true,
  filteredLocations: [],
  filteredEpisodes: [],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setEpisodes: (state, action) => {
      state.episodes = action.payload;
    },
    setLocations: (state, action) => {
      state.locations = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setFilteredLocations: (state, action) => {
      state.filteredLocations = action.payload;
    },
    setFilteredEpisodes: (state, action) => {
      state.filteredEpisodes = action.payload;
    },

    incrementEpisodePage: (state) => {
      state.pageEpisode += 1;
    },
    incrementLocationPage: (state) => {
      state.pageLocation += 1;
    },
  },
});

export const {
  setSearchText,
  setEpisodes,
  setLocations,
  setLoading,
  setFilteredLocations,
  setFilteredEpisodes,
  incrementEpisodePage,
  incrementLocationPage,
} = appSlice.actions;

export default appSlice.reducer;
