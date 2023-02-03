import * as React from "react";
import { ImageBackground, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AlphabetsCategories from "../../components/AlphabetsCategories";

const LearningAlphabetScreen = () => {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false, //header none
    });
  }, []);

  const data = [
    {
      image: require("../../assets/img/alphabetScreenCard.jpeg"),
      route: "Alphabet",
    },
    {
      image: require("../../assets/img/writingImg.jpg"),
      route: "Writing",
    },
    {
      image: require("../../assets/img/phonicsImg.jpg"),
      route: "Phonic",
    },
    {
      image: require("../../assets/img/assessmentImg.jpg"),
      route: "Assessment",
    },
    {
      image: require("../../assets/img/alphabetGamesImg.jpeg"),
      route: "Games",
    },
  ];

  return (
    <View className="flex-1 justify-center items-center">
      <ImageBackground>
        {/* alphabet categories  */}
        <AlphabetsCategories data={data} autoPlay={false} pagination={true} />
      </ImageBackground>
    </View>
  );
};

export default LearningAlphabetScreen;
