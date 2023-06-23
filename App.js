import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { SafeAreaView } from "react-native-safe-area-context";
import Home from "./components/Home";
import EpisodeDetails from "./components/episode/EpisodeDetails";
import LocationDetails from "./components/location/LocationDetails";
import { Provider } from "react-redux";
import store from "./redux/store";
import { colors } from "./styles";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={{ backgroundColor: colors.main, flex: 1 }}>
          <View style={styles.container}>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="EpisodeDetails"
                component={EpisodeDetails}
                options={{
                  headerBackTitleVisible: false,
                  headerStyle: { backgroundColor: colors.main },
                  headerTitleStyle: { color: "#fff" },
                }}
              />
              <Stack.Screen
                name="LocationDetails"
                component={LocationDetails}
                options={{
                  headerBackTitleVisible: false,
                  headerStyle: { backgroundColor: colors.main },
                  headerTitleStyle: { color: "#fff" },
                }}
              />
            </Stack.Navigator>
          </View>
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: colors.main,
  },
});
