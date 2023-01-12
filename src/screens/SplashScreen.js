import * as React from "react";
import { Button, View, Text, Image, ImageBackground } from "react-native";
import Logo from "../../assets/img/vedvika_logo.png";
import Bg from "../../assets/img/BG-01.jpg";

const SplashScreen = ({ navigation }) => {
  return (
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    // <View
    //   className="flex-1 items-center justify-center"
    //   style={{ backgroundColor: "#A5F1E9" }}
    // >
    // </View>
    <ImageBackground
      source={Bg}
      resizeMode="cover"
      className="flex-1 items-center justify-center"
    >
      <View className="">
        <Image source={Logo} className="w-44 h-48" />
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </ImageBackground>
  );
};

export default SplashScreen;
