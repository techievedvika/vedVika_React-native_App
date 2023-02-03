import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  StatusBar,
  ImageBackground,
  useWindowDimensions,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import WritingDraw from "./WritingDraw";

export default function WritingScreen() {
  const navigation = useNavigation();

  const data = [
    {
      image: require("../../../../assets/alphabets/A-01.jpg"),
      imageName: require("../../../../assets/alphabetImages/apple-01.jpg"),
      title: "A",
    },
    {
      image: require("../../../../assets/alphabets/B-01.jpg"),
      imageName: require("../../../../assets/alphabetImages/ball-01.jpg"),
      title: "B",
    },
    {
      image: require("../../../../assets/alphabets/C-01.jpg"),
      imageName: require("../../../../assets/alphabetImages/cat-01.jpg"),
      title: "C",
    },
    {
      image: require("../../../../assets/alphabets/D-01.jpg"),
      imageName: require("../../../../assets/alphabetImages/dog-01.jpg"),
      title: "D",
    },
    {
      image: require("../../../../assets/alphabets/E-01.jpg"),
      imageName: require("../../../../assets/alphabetImages/egg-01.jpg"),
      title: "E",
    },
    {
      image: require("../../../../assets/alphabets/F-01.jpg"),
      imageName: require("../../../../assets/alphabetImages/fish-01.jpg"),
      title: "F",
    },
    {
      image: require("../../../../assets/alphabets/G-01.jpg"),
      imageName: require("../../../../assets/alphabetImages/Grapes-01.jpg"),
      title: "G",
    },
    {
      image: require("../../../../assets/alphabets/H-01.jpg"),
      imageName: require("../../../../assets/alphabetImages/Hat-01.jpg"),
      title: "H",
    },
    {
      image: require("../../../../assets/alphabets/I-01.jpg"),
      imageName: require("../../../../assets/alphabetImages/ice-cream-01.jpg"),
      title: "I",
    },
    {
      image: require("../../../../assets/alphabets/J-01.jpg"),
      imageName: require("../../../../assets/alphabetImages/Jug-01.jpg"),
      title: "J",
    },
    {
      image: require("../../../../assets/alphabets/K-01.jpg"),
      imageName: require("../../../../assets/alphabetImages/Kite-01.jpg"),
      title: "K",
    },
    {
      image: require("../../../../assets/alphabets/L-01.jpg"),
      imageName: require("../../../../assets/alphabetImages/lion-01.jpg"),
      title: "L",
    },
    {
      image: require("../../../../assets/alphabets/M-01.jpg"),
      imageName: require("../../../../assets/alphabetImages/monkey-01.jpg"),
      title: "M",
    },
    {
      image: require("../../../../assets/alphabets/N-01.jpg"),
      imageName: require("../../../../assets/alphabetImages/nest-01.jpg"),
      title: "N",
    },
    {
      image: require("../../../../assets/alphabets/O-01.jpg"),
      imageName: require("../../../../assets/alphabetImages/orenge-01.jpg"),
      title: "O",
    },
    {
      image: require("../../../../assets/alphabets/P-01.jpg"),
      imageName: require("../../../../assets/alphabetImages/parrot-01.jpg"),
      title: "P",
    },
    {
      image: require("../../../../assets/alphabets/Q-01.jpg"),
      imageName: require("../../../../assets/alphabetImages/queen-01.jpg"),
      title: "Q",
    },
    {
      image: require("../../../../assets/alphabets/R-01.jpg"),
      imageName: require("../../../../assets/alphabetImages/rat-01.jpg"),
      title: "R",
    },
    {
      image: require("../../../../assets/alphabets/S-01.jpg"),
      imageName: require("../../../../assets/alphabetImages/star-01.jpg"),
      title: "S",
    },
    {
      image: require("../../../../assets/alphabets/T-01.jpg"),
      imageName: require("../../../../assets/alphabetImages/tiger-01.jpg"),
      title: "T",
    },
    {
      image: require("../../../../assets/alphabets/U-01.jpg"),
      imageName: require("../../../../assets/alphabetImages/umbrella-01.jpg"),
      title: "U",
    },
    {
      image: require("../../../../assets/alphabets/V-01.jpg"),
      imageName: require("../../../../assets/alphabetImages/van-01.jpg"),
      title: "V",
    },
    {
      image: require("../../../../assets/alphabets/W-01.jpg"),
      imageName: require("../../../../assets/alphabetImages/water-01.jpg"),
      title: "W",
    },
    {
      image: require("../../../../assets/alphabets/X-01.jpg"),
      imageName: require("../../../../assets/alphabetImages/X-mas-01.jpg"),
      title: "X",
    },
    {
      image: require("../../../../assets/alphabets/Y-01.jpg"),
      imageName: require("../../../../assets/alphabetImages/yolk-01.jpg"),
      title: "Y",
    },
    {
      image: require("../../../../assets/alphabets/Z-01.jpg"),
      imageName: require("../../../../assets/alphabetImages/zebra-01.jpg"),
      title: "Z",
    },
  ];

  const { width, height } = useWindowDimensions();

  return (
    <>
      <StatusBar hidden={true} />
      <ImageBackground
        source="../../../../assets/img/BG-01.jpg"
        resizeMode="cover"
        style={{ height: height, width: width }}
        className="overflow-visible flex-1 items-center justify-center"
      >
        <View className=" mt-5 ml-10 ">
          <Pressable
            onPress={() => navigation.goBack()}
            className="flex-row justify-start items-start"
          >
            <Text className="font-bold text-lg float-left">Go Back</Text>
          </Pressable>
        </View>

        <View className="flex-1 justify-center items-center">
          <ScrollView
            horizontal
            bounces={false}
            showsHorizontalScrollIndicator={false}
          >
            {data?.map((item, index) => {
              return (
                <View
                  className="flex-1 justify-center items-center mx-2"
                  key={index}
                >
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("WritingDraw", {
                        latter : item?.title
                      });
                    }}
                  >
                    {/* <WritingDraw /> */}
                    <Image
                      source={item?.image}
                      className="h-64 w-80 border rounded-lg shadow-md"
                    />
                  </TouchableOpacity>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </ImageBackground>
    </>
  );
}
