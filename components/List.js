import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

const List = ({ data, navigation, screenName, handleLoadMore, loading }) => {
  const renderFooter = () => {
    if (!loading) return null;
    return (
      <View style={{ paddingVertical: 20 }}>
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate(screenName, { item })}>
      <View
        style={{
          paddingVertical: 10,
          marginBottom: 10,
          borderBottomColor: "grey",
          borderBottomWidth: 0.5,
        }}
      >
        <Text>
          {item.episode}
          {item.type}
        </Text>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.name}</Text>
        <Text>
          {item.air_date}
          {item.dimension}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={({ id }) => id.toString()}
      renderItem={renderItem}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={renderFooter}
    />
  );
};

export default List;
