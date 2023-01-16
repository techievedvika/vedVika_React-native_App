import * as React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
  Text,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Categories from "../../components/Categories";

const HomeScreen = () => {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false, //header none
    });
  }, []);

  const data = [
    {
      image: require("../../assets/img/learningAlphabets.jpg"),
      route: "LearningAlphabet",
    },
    {
      image: require("../../assets/img/colourSection.jpg"),
      route: "Colors",
    },
    {
      image: require("../../assets/img/learningNumber.jpg"),
      route: "LearningNumber",
    },
  ];

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* categories  */}
      <ImageBackground source="../../assets/img/BG-01.jpg" resizeMode="cover">
        <Categories data={data} autoPlay={false} pagination={true} />
      </ImageBackground>
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "white",
  },
  text: { textAlign: "center", color: "black", marginBottom: 10 },
  carouselContainer: {
    marginBottom: 20,
  },
});
