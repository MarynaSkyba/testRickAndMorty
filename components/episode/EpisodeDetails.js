import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState, useEffect } from "react";
import Characters from "../Characters";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import FormikForm from "../FormikForm";

const EpisodeDetails = ({ route, navigation }) => {
  const { item } = route.params;

  return (
    <KeyboardAwareScrollView>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ marginHorizontal: 15 }}>
          <View style={{ marginVertical: 10 }}>
            <Text
              style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}
            >
              {item.episode} : {item.name}
            </Text>
            <Text style={{ fontSize: 15 }}>{item.air_date}</Text>
          </View>
          <View style={{ marginVertical: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: "500" }}>Presonajes</Text>

            <Characters
              data={item.characters}
              navigation={navigation}
              route={route}
            />
          </View>
          <FormikForm />
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

export default EpisodeDetails;
