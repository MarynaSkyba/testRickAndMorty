import { View, Text, Button } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import React from "react";

import { useState, useEffect, r } from "react";
import List from "../List";
import axios from "axios";
r;
const Locations = ({ handleLoadMore, isLoading, filteredLocations }) => {
  const navigation = useNavigation();
  // const [locations, setLocations] = useState([]);
  // const [page, setPage] = useState(1);
  // const [isLoading, setLoading] = useState(true);
  // const [filteredLocations, setFilteredLocations] = useState([]);

  // useEffect(() => {
  //   filterLocations();
  // }, [searchText, locations]);

  // const filterLocations = () => {
  //   if (searchText) {
  //     const filteredData = locations.filter((location) =>
  //       location.name.toLowerCase().includes(searchText.toLowerCase())
  //     );
  //     setFilteredLocations(filteredData);
  //   } else {
  //     setFilteredLocations(locations);
  //   }
  // };

  // const getLocations = async () => {
  //   try {
  //     const response = await axios.get(
  //       `https://rickandmortyapi.com/api/location/?page=${page}`
  //     );
  //     const data = response.data.results;
  //     setLocations((prevCharacters) => [...prevCharacters, ...data]);
  //     setLoading(false);
  //   } catch (error) {
  //     // setEndReached(true);
  //     // console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   getLocations();
  // }, [page]);

  // const handleLoadMore = () => {
  //   setPage((prevPage) => prevPage + 1);
  // };

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <List
        data={filteredLocations}
        screenName={"LocationDetails"}
        navigation={navigation}
        loading={isLoading}
        handleLoadMore={handleLoadMore}
      />
    </View>
  );
};

export default Locations;
