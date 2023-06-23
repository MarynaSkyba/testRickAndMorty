import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import SearchSvg from "../assets/search.svg";
import CloseSvg from "../assets/close.svg";

export default function Search({ onSearch }) {
  const [text, setText] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const handleResetText = () => {
    setShowSearch(false);
    setText("");
    onSearch("");
  };

  return (
    <View
      style={{
        padding: 15,
        flexDirection: "row",
        backgroundColor: "#9999FF",
      }}
    >
      {showSearch ? (
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              borderBottomColor: "#fff",
              borderBottomWidth: 1,
            }}
          >
            <TextInput
              style={{
                color: "#fff",
                fontSize: 20,
                alignSelf: "flex-start",
                width: 200,
                marginVertical: 5,
              }}
              placeholder="Escribe aqui"
              placeholderTextColor="#fff"
              value={text}
              onChangeText={setText}
            />
            <Pressable
              onPress={() => onSearch(text)}
              style={{ marginRight: 20 }}
            >
              <SearchSvg width={30} height={30} />
            </Pressable>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Pressable onPress={handleResetText}>
              <CloseSvg width={30} height={30} />
            </Pressable>
          </View>
        </View>
      ) : (
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 20 }}>Ricky and Morty</Text>
          <Pressable onPress={() => setShowSearch(true)}>
            <SearchSvg width={30} height={30} />
          </Pressable>
        </View>
      )}
    </View>
  );
}
