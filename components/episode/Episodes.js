import { View, Text, Button, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useState, useEffect, useContext } from "react";
import axios from "axios";
import List from "../List";

const Episodes = ({ data, isLoading, handleLoadMore }) => {
  const navigation = useNavigation();
  // const [episodes, setEpisodes] = useState([]);
  // const [page, setPage] = useState(1);
  // const [isLoading, setLoading] = useState(true);
  // const [filteredEpisodes, setFilteredEpisodes] = useState([]);

  // useEffect(() => {
  //   filterEpisodes();
  // }, [searchText, episodes]);

  // const filterEpisodes = () => {
  //   if (searchText) {
  //     const filteredData = episodes.filter((episode) =>
  //       episode.name.toLowerCase().includes(searchText.toLowerCase())
  //     );
  //     setFilteredEpisodes(filteredData);
  //   } else {
  //     setFilteredEpisodes(episodes);
  //   }
  // };

  // useEffect(() => {
  //   getEpisodes();
  // }, [page]);

  // const getEpisodes = async () => {
  //   try {
  //     const response = await axios.get(
  //       `https://rickandmortyapi.com/api/episode/?page=${page}`
  //     );
  //     const data = response.data.results;
  //     setEpisodes((prevCharacters) => [...prevCharacters, ...data]);
  //     setLoading(false);
  //   } catch (error) {
  //     // setEndReached(true);
  //     // console.error(error);
  //   }
  // };

  // const handleLoadMore = () => {
  //   setPage((prevPage) => prevPage + 1);
  // };

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <List
        data={data}
        screenName={"EpisodeDetails"}
        navigation={navigation}
        loading={isLoading}
        handleLoadMore={handleLoadMore}
      />
    </View>
  );
};
export default Episodes;
