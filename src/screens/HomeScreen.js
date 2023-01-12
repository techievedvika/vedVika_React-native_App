import * as React from "react";
import { View, Text, Button, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Categories from "../../components/Categories";

const HomeScreen = () => {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView>
      {/* categories  */}
      <Categories />
    </ScrollView>
  );
};
export default HomeScreen;
