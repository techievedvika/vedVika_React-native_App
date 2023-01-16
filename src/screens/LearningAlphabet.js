import * as React from "react";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AlphabetsCategories from "../../components/AlphabetsCategories";

const LearningAlphabetScreen = () => {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false, //header none
    });
  }, []);

  return (
    <ScrollView>
      {/* alphabet categories  */}
      <AlphabetsCategories />
    </ScrollView>
  );
};

export default LearningAlphabetScreen;
