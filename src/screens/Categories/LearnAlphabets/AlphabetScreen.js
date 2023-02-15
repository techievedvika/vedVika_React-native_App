import { View, Text, ImageBackground } from "react-native";
import React from "react";
import AlphabetsDisplay from "../../../../components/AlphabetsDisplay";

const AlphabetScreen = () => {
  const data = [
    {
      imageAlphabets: require("../../../../assets/alphabets/A-01.jpg"),
      images: [
        {
          img: require("../../../../assets/alphabetImages/apple-01.jpg"),
          speech: "a for apple",
        },
        {
          img: require("../../../../assets/alphabetImages/ant-01.jpg"),
          speech: "a for ant",
        },
      ],
      // title: "A",
      // speech: "a for apple",
    },
    {
      imageAlphabets: require("../../../../assets/alphabets/B-01.jpg"),
      images: [
        {
          img: require("../../../../assets/alphabetImages/ball-01.jpg"),
          speech: "b for ball",
        },
        {
          img: require("../../../../assets/alphabetImages/balloon-01.jpg"),
          speech: "b for balloon",
        },
      ],
      // title: "B",
      // speech: "b for ball",
    },
    {
      imageAlphabets: require("../../../../assets/alphabets/C-01.jpg"),
      images: [
        {
          img: require("../../../../assets/alphabetImages/ball-01.jpg"),
          speech: "b for ball",
        },
        {
          img: require("../../../../assets/alphabetImages/balloon-01.jpg"),
          speech: "b for balloon",
        },
      ],
    },
    {
      imageAlphabets: require("../../../../assets/alphabets/D-01.jpg"),
      images: [
        {
          img: require("../../../../assets/alphabetImages/ball-01.jpg"),
          speech: "b for ball",
        },
        {
          img: require("../../../../assets/alphabetImages/balloon-01.jpg"),
          speech: "b for balloon",
        },
      ],
    },
    {
      imageAlphabets: require("../../../../assets/alphabets/E-01.jpg"),
      images: [
        {
          img: require("../../../../assets/alphabetImages/ball-01.jpg"),
          speech: "b for ball",
        },
        {
          img: require("../../../../assets/alphabetImages/balloon-01.jpg"),
          speech: "b for balloon",
        },
      ],
    },
    {
      imageAlphabets: require("../../../../assets/alphabets/F-01.jpg"),
      images: [
        {
          img: require("../../../../assets/alphabetImages/ball-01.jpg"),
          speech: "b for ball",
        },
        {
          img: require("../../../../assets/alphabetImages/balloon-01.jpg"),
          speech: "b for balloon",
        },
      ],
    },
    {
      imageAlphabets: require("../../../../assets/alphabets/G-01.jpg"),
      images: [
        {
          img: require("../../../../assets/alphabetImages/ball-01.jpg"),
          speech: "b for ball",
        },
        {
          img: require("../../../../assets/alphabetImages/balloon-01.jpg"),
          speech: "b for balloon",
        },
      ],
    },
    {
      imageAlphabets: require("../../../../assets/alphabets/H-01.jpg"),
      images: [
        {
          img: require("../../../../assets/alphabetImages/ball-01.jpg"),
          speech: "b for ball",
        },
        {
          img: require("../../../../assets/alphabetImages/balloon-01.jpg"),
          speech: "b for balloon",
        },
      ],
    },
    {
      imageAlphabets: require("../../../../assets/alphabets/I-01.jpg"),
      images: [
        {
          img: require("../../../../assets/alphabetImages/ball-01.jpg"),
          speech: "b for ball",
        },
        {
          img: require("../../../../assets/alphabetImages/balloon-01.jpg"),
          speech: "b for balloon",
        },
      ],
    },
    {
      imageAlphabets: require("../../../../assets/alphabets/J-01.jpg"),
      images: [
        {
          img: require("../../../../assets/alphabetImages/ball-01.jpg"),
          speech: "b for ball",
        },
        {
          img: require("../../../../assets/alphabetImages/balloon-01.jpg"),
          speech: "b for balloon",
        },
      ],
    },
    {
      imageAlphabets: require("../../../../assets/alphabets/K-01.jpg"),
      images: [
        {
          img: require("../../../../assets/alphabetImages/ball-01.jpg"),
          speech: "b for ball",
        },
        {
          img: require("../../../../assets/alphabetImages/balloon-01.jpg"),
          speech: "b for balloon",
        },
      ],
    },
    {
      imageAlphabets: require("../../../../assets/alphabets/L-01.jpg"),
      images: [
        {
          img: require("../../../../assets/alphabetImages/ball-01.jpg"),
          speech: "b for ball",
        },
        {
          img: require("../../../../assets/alphabetImages/balloon-01.jpg"),
          speech: "b for balloon",
        },
      ],
    },
    {
      imageAlphabets: require("../../../../assets/alphabets/M-01.jpg"),
      images: [
        {
          img: require("../../../../assets/alphabetImages/ball-01.jpg"),
          speech: "b for ball",
        },
        {
          img: require("../../../../assets/alphabetImages/balloon-01.jpg"),
          speech: "b for balloon",
        },
      ],
    },
    {
      imageAlphabets: require("../../../../assets/alphabets/N-01.jpg"),
      images: [
        {
          img: require("../../../../assets/alphabetImages/ball-01.jpg"),
          speech: "b for ball",
        },
        {
          img: require("../../../../assets/alphabetImages/balloon-01.jpg"),
          speech: "b for balloon",
        },
      ],
    },
    {
      imageAlphabets: require("../../../../assets/alphabets/O-01.jpg"),
      images: [
        {
          img: require("../../../../assets/alphabetImages/ball-01.jpg"),
          speech: "b for ball",
        },
        {
          img: require("../../../../assets/alphabetImages/balloon-01.jpg"),
          speech: "b for balloon",
        },
      ],
    },
    {
      imageAlphabets: require("../../../../assets/alphabets/P-01.jpg"),
      images: [
        {
          img: require("../../../../assets/alphabetImages/ball-01.jpg"),
          speech: "b for ball",
        },
        {
          img: require("../../../../assets/alphabetImages/balloon-01.jpg"),
          speech: "b for balloon",
        },
      ],
    },
    {
      imageAlphabets: require("../../../../assets/alphabets/Q-01.jpg"),
      images: [
        {
          img: require("../../../../assets/alphabetImages/ball-01.jpg"),
          speech: "b for ball",
        },
        {
          img: require("../../../../assets/alphabetImages/balloon-01.jpg"),
          speech: "b for balloon",
        },
      ],
    },
    {
      imageAlphabets: require("../../../../assets/alphabets/R-01.jpg"),
      images: [
        {
          img: require("../../../../assets/alphabetImages/ball-01.jpg"),
          speech: "b for ball",
        },
        {
          img: require("../../../../assets/alphabetImages/balloon-01.jpg"),
          speech: "b for balloon",
        },
      ],
    },
    {
      imageAlphabets: require("../../../../assets/alphabets/S-01.jpg"),
      images: [
        {
          img: require("../../../../assets/alphabetImages/ball-01.jpg"),
          speech: "b for ball",
        },
        {
          img: require("../../../../assets/alphabetImages/balloon-01.jpg"),
          speech: "b for balloon",
        },
      ],
    },
    {
      imageAlphabets: require("../../../../assets/alphabets/T-01.jpg"),
      images: [
        {
          img: require("../../../../assets/alphabetImages/ball-01.jpg"),
          speech: "b for ball",
        },
        {
          img: require("../../../../assets/alphabetImages/balloon-01.jpg"),
          speech: "b for balloon",
        },
      ],
    },
    {
      imageAlphabets: require("../../../../assets/alphabets/U-01.jpg"),
      images: [
        {
          img: require("../../../../assets/alphabetImages/ball-01.jpg"),
          speech: "b for ball",
        },
        {
          img: require("../../../../assets/alphabetImages/balloon-01.jpg"),
          speech: "b for balloon",
        },
      ],
    },
    {
      imageAlphabets: require("../../../../assets/alphabets/V-01.jpg"),
      images: [
        {
          img: require("../../../../assets/alphabetImages/ball-01.jpg"),
          speech: "b for ball",
        },
        {
          img: require("../../../../assets/alphabetImages/balloon-01.jpg"),
          speech: "b for balloon",
        },
      ],
    },
    {
      imageAlphabets: require("../../../../assets/alphabets/W-01.jpg"),
      images: [
        {
          img: require("../../../../assets/alphabetImages/ball-01.jpg"),
          speech: "b for ball",
        },
        {
          img: require("../../../../assets/alphabetImages/balloon-01.jpg"),
          speech: "b for balloon",
        },
      ],
    },
    {
      imageAlphabets: require("../../../../assets/alphabets/X-01.jpg"),
      images: [
        {
          img: require("../../../../assets/alphabetImages/ball-01.jpg"),
          speech: "b for ball",
        },
        {
          img: require("../../../../assets/alphabetImages/balloon-01.jpg"),
          speech: "b for balloon",
        },
      ],
    },
    {
      imageAlphabets: require("../../../../assets/alphabets/Y-01.jpg"),
      images: [
        {
          img: require("../../../../assets/alphabetImages/yolk-01.jpg"),
          speech: "y for yolk",
        },
        {
          img: require("../../../../assets/alphabetImages/yoyo-01.jpg"),
          speech: "y for yoyo",
        },
      ],
    },
    {
      imageAlphabets: require("../../../../assets/alphabets/Z-01.jpg"),
      images: [
        {
          img: require("../../../../assets/alphabetImages/zebra-01.jpg"),
          speech: "z for zebra",
        },
        {
          img: require("../../../../assets/alphabetImages/zero-01.jpg"),
          speech: "z for zero",
        },
      ],
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
