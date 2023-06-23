import { View, Text } from "react-native";
import React from "react";
import Characters from "../Characters";
const LocationDetails = ({ route, navigation }) => {
  const { item } = route.params;

  return (
    <View style={{ marginHorizontal: 15 }}>
      <View style={{ marginVertical: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
          {item.name}
        </Text>
        <Text style={{ fontSize: 15 }}>{item.dimension}</Text>
      </View>
      <View style={{ marginVertical: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: "500" }}>Habitatines</Text>

        <Characters
          data={item.residents}
          navigation={navigation}
          route={route}
        />
      </View>
    </View>
  );
};

export default LocationDetails;
