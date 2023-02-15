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
import AlphabetScreen from "./src/screens/Categories/LearnAlphabets/AlphabetScreen";
import WritingScreen from "./src/screens/Categories/LearnAlphabets/WritingScreen";
import PhonicScreen from "./src/screens/Categories/LearnAlphabets/PhonicScreen";
import AssessmentScreen from "./src/screens/Categories/LearnAlphabets/AssessmentScreen";
import GamesScreen from "./src/screens/Categories/LearnAlphabets/GamesScreen";
import WritingDraw from "./src/screens/Categories/LearnAlphabets/WritingDraw";
import AlphabetCategories from "./src/screens/Categories/LearnAlphabets/WritingCategories/AlphabetCategories";

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
          <Stack.Screen
            name="LearningAlphabet"
            component={LearningAlphabetScreen}
          />
          <Stack.Screen
            name="LearningNumber"
            component={LearningNumberScreen}
          />
          <Stack.Screen name="Colors" component={ColorScreen} />
          <Stack.Screen
            name="Alphabet"
            component={AlphabetScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Writing"
            component={WritingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="WritingDraw"
            component={WritingDraw}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="WritingAplphabetCategories"
            component={AlphabetCategories}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Phonic"
            component={PhonicScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Assessment" component={AssessmentScreen} />
          <Stack.Screen name="Games" component={GamesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}

export default App;
