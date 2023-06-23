import { View, Text, FlatList, Image } from "react-native";
import React, { useState, useEffect } from "react";

const Characters = ({ data, navigation, route }) => {
  const [characters, setCharacters] = useState([]);

  const getCharacter = async () => {
    try {
      const characterDataPromises = data.map(async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        return data;
      });

      const characterData = await Promise.all(characterDataPromises);
      setCharacters(characterData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCharacter();
  }, []);

  useEffect(() => {
    navigation.setOptions({ title: route.params.item.name });
  }, [navigation, route.name]);

  const renderItem = ({ item }) =>
    characters.length > 0 ? (
      <View
        style={{
          flex: 1,
          marginVertical: 10,
          alignItems: "center",
          justifyContent: "center",
          marginRight: 20,
        }}
      >
        <Image
          source={{
            uri: item.image,
          }}
          style={{
            width: 80,
            height: 80,
            borderRadius: 50,
          }}
        />
        <Text
          style={{
            textAlign: "center",
            fontSize: 14,
          }}
        >
          {item.name}
        </Text>
      </View>
    ) : (
      <View style={{ borderWidth: 2, backgroundColor: "black" }}>
        <Text>No hay nada por aqui</Text>
      </View>
    );

  return (
    <FlatList
      horizontal
      data={characters}
      keyExtractor={({ id }) => id}
      renderItem={renderItem}
    />
  );
};

export default Characters;
