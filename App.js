// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import SplashScreen from "./src/screens/SplashScreen";
import { TailwindProvider } from "tailwindcss-react-native";
import LearningAlphabetScreen from "./src/screens/LearningAlphabet";
import LearningNumberScreen from "./src/screens/LearningNumberScreen";
import ColorScreen from "./src/screens/ColorScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="LearningAlphabet" component={LearningAlphabetScreen} />
          <Stack.Screen name="LearningNumber" component={LearningNumberScreen} />
          <Stack.Screen name="Colors" component={ColorScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}

export default App;
