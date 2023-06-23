import React, { useEffect } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Episodes from "./episode/Episodes";
import Locations from "./location/Locations";
import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchText,
  setEpisodes,
  setLocations,
  setLoading,
  setFilteredLocations,
  setFilteredEpisodes,
  incrementEpisodePage,
  incrementLocationPage,
} from "../redux/slice";
import axios from "axios";

const Tab = createMaterialTopTabNavigator();

const Home = () => {
  const dispatch = useDispatch();
  const searchText = useSelector((state) => state.searchText);
  const episodes = useSelector((state) => state.episodes);
  const locations = useSelector((state) => state.locations);
  const pageEpisode = useSelector((state) => state.pageEpisode);
  const pageLocation = useSelector((state) => state.pageLocation);

  const isLoading = useSelector((state) => state.isLoading);
  const filteredLocations = useSelector((state) => state.filteredLocations);
  const filteredEpisodes = useSelector((state) => state.filteredEpisodes);

  const handleSearch = (text) => {
    dispatch(setSearchText(text));
  };

  const getEpisodes = async () => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/episode/?page=${pageEpisode}`
      );
      const data = response.data.results;
      dispatch(setEpisodes([...episodes, ...data]));
      dispatch(setLoading(false));
    } catch (error) {
      console.error(error);
    }
  };

  const getLocations = async () => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/location/?page=${pageLocation}`
      );
      const data = response.data.results;
      dispatch(setLocations([...locations, ...data]));
      dispatch(setLoading(false));
    } catch (error) {
      console.error(error);
    }
  };

  const filterLocations = () => {
    if (searchText) {
      const filteredData = locations.filter((location) =>
        location.name.toLowerCase().includes(searchText.toLowerCase())
      );
      dispatch(setFilteredLocations(filteredData));
    } else {
      dispatch(setFilteredLocations(locations));
    }
  };

  const filterEpisodes = () => {
    if (searchText) {
      const filteredData = episodes.filter((episode) =>
        episode.name.toLowerCase().includes(searchText.toLowerCase())
      );
      dispatch(setFilteredEpisodes(filteredData));
    } else {
      dispatch(setFilteredEpisodes(episodes));
    }
  };

  useEffect(() => {
    filterLocations();
    filterEpisodes();
  }, [searchText, locations, episodes]);

  const handleLoadMoreEpisodes = () => {
    if (pageEpisode === 3) {
      return;
    } else {
      dispatch(incrementEpisodePage());
    }
  };

  const handleLoadMoreLocations = () => {
    if (pageLocation === 5) {
      return;
    } else {
      dispatch(incrementLocationPage());
    }
  };

  useEffect(() => {
    getEpisodes();
  }, [pageEpisode]);

  useEffect(() => {
    getLocations();
  }, [pageLocation]);

  return (
    <>
      <Search onSearch={handleSearch} />
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 16, color: "#fff" },
          tabBarStyle: { backgroundColor: "#9999FF" },
          tabBarIndicatorStyle: {
            backgroundColor: "#fff",
            height: 2,
            borderRadius: 50,
          },
        }}
      >
        <Tab.Screen name="Episodes" options={{ tabBarLabel: "Episodios" }}>
          {() => (
            <Episodes
              handleLoadMore={handleLoadMoreEpisodes}
              isLoading={isLoading}
              data={filteredEpisodes}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="Location" options={{ tabBarLabel: "Localizaciones" }}>
          {() => (
            <Locations
              handleLoadMore={handleLoadMoreLocations}
              isLoading={isLoading}
              filteredLocations={filteredLocations}
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </>
  );
};

export default Home;
