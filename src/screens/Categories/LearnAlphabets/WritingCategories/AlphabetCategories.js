import {
  View,
  Text,
  ImageBackground,
  useWindowDimensions,
  ScrollView,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import backgroundImage from "../../../../../assets/img/purple_bg.png";
import backbt from "../../../../../assets/backward-01.png";

export default function AlphabetCategories({ route, navigation }) {
  const { latter } = route?.params;
  const data = [
    {
      A: {
        twentyFive: {
          img: require(`../../../../../assets/VedvikaTechnology/100_(A-Z)/A-01.png`),
          title: latter,
        },
        fifty: {
          img: require(`../../../../../assets/VedvikaTechnology/75_(A-Z)/A-01.png`),
          title: latter,
        },
        seventyFive: {
          img: require(`../../../../../assets/VedvikaTechnology/50_(a-z)/A-01(1).png`),
          title: latter,
        },
        hundred: {
          img: require(`../../../../../assets/VedvikaTechnology/25_(A-Z)/A-01.png`),
          title: latter,
        },
      },
    },
  ];
  const { width, height } = useWindowDimensions();
  //   console.log(data[0].A.twentyFive.img);
  return (
    <ImageBackground
      source={backgroundImage}
      style={{ height: height, width: width }}
      resizeMode="cover"
      className="overflow-visible flex-1"
    >
      <View className="mt-5 ml-10">
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={backbt} alt="back button" className="h-10 w-10" />
        </Pressable>
      </View>

      <View className="flex-1 mx-5">
        <ScrollView
          horizontal
          bounces={false}
          showsHorizontalScrollIndicator={false}
        >
          {/* {data?.map((item, index) => { */}
          {/* return ( */}
          <View
            className="flex-row justify-center items-center gap-5"
            // key={index}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("WritingDraw", {
                  // navigation.navigate("WritingAplphabetCategories", {
                  latter: data[0].A.twentyFive.title,
                  image: "100_(A-Z)",
                });
              }}
            >
              {/* <WritingDraw /> */}
              <Image
                // source={data[0].A.twentyFive.img}
                source={{
                  uri: `https://new.advanceexcel.in/vedvika/Vedvika%20Technology/100_(A-Z)/${latter}-01(1).png`,
                }}
                className="h-64 w-72 border rounded-lg shadow-md bg-white overflow-hidden"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("WritingDraw", {
                  // navigation.navigate("WritingAplphabetCategories", {
                  latter: data[0].A.twentyFive.title,
                  image: "75_(A-Z)",
                });
              }}
            >
              <Image
                // source={data[0].A.fifty.img}
                source={{
                  uri: `https://new.advanceexcel.in/vedvika/Vedvika%20Technology/75_(A-Z)/${latter}-01(1).png`,
                }}
                className="h-64 w-72 border rounded-lg shadow-md bg-white"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("WritingDraw", {
                  // navigation.navigate("WritingAplphabetCategories", {
                  latter: data[0].A.twentyFive.title,
                  image: "50_(A-Z)",
                });
              }}
            >
              <Image
                // source={data[0].A.seventyFive.img}
                source={{
                  uri: `https://new.advanceexcel.in/vedvika/Vedvika%20Technology/50_(A-Z)/${latter}-01(1).png`,
                }}
                className="h-64 w-72 border rounded-lg shadow-md bg-white"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("WritingDraw", {
                  // navigation.navigate("WritingAplphabetCategories", {
                  latter: data[0].A.twentyFive.title,
                  image: "25_(A-Z)",
                });
              }}
            >
              <Image
                // source={data[0].A.hundred.img}
                source={{
                  uri: `https://new.advanceexcel.in/vedvika/Vedvika%20Technology/25_(A-Z)/${latter}-01(1).png`,
                }}
                className="h-64 w-72 border rounded-lg shadow-md bg-white"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("WritingDraw", {
                  // navigation.navigate("WritingAplphabetCategories", {
                  latter: "A",
                  image: "",
                });
              }}
            >
              <Image
                // source={require("../../../../../assets/VedvikaTechnology/Alphabet(png)/A(1).png")}
                source={{
                  uri: `https://new.advanceexcel.in/vedvika/Vedvika%20Technology/Alphabet(png)/${latter}(1).png`,
                }}
                className="h-64 w-72 border rounded-lg shadow-md"
              />
            </TouchableOpacity>
          </View>
          {/* );
          })} */}
        </ScrollView>
      </View>
    </ImageBackground>
  );
}
