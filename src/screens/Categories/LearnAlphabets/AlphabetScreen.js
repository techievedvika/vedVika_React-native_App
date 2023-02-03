import { View, Text, ImageBackground } from "react-native";
import React from "react";
import AlphabetsDisplay from "../../../../components/AlphabetsDisplay";

const AlphabetScreen = () => {
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
  return (
    <View className="flex-1 justify-center items-center">
      <ImageBackground>
        {/* alphabet categories  */}
        <AlphabetsDisplay data={data} autoPlay={false} pagination={true} />
      </ImageBackground>
    </View>
  );
};

export default AlphabetScreen;
