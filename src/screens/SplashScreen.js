import * as React from "react";
import {
  Button,
  View,
  Text,
  Image,
  ImageBackground,
  Pressable,
  StatusBar,
} from "react-native";
import Logo from "../../assets/img/vedvika_logo.png";
import Bg from "../../assets/img/BG-01.jpg";

const SplashScreen = ({ navigation }) => {
  return (
    <>
      <StatusBar hidden={true} />
      <ImageBackground
        source={Bg}
        resizeMode="cover"
        className="flex-1 items-center justify-center"
      >
        <View className="gap-y-6">
          <Image source={Logo} className="w-44 h-48" />
          {/* <Button
          title="Get Start"
          onPress={() => navigation.navigate("Home")}
        /> */}
          <Pressable
            // style={{
            //   backgroundColor: "black",
            // }}
            className="inline-block px-6 py-2 bg-orange-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out items-center"
            onPress={() => navigation.navigate("Home")}
          >
            <Text
              // style={{
              //   fontSize: 16,
              //   lineHeight: 21,
              //   fontWeight: "bold",
              //   letterSpacing: 0.25,
              //   color: "white",
              // }}
              className="text-white text-3xl font-bold"
            >
              Get Started
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </>
  );
};

export default SplashScreen;
