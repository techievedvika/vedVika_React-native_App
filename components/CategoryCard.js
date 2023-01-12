import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityComponent,
  Image,
} from "react-native";
import React from "react";

const CategoryCard = ({ imageUrl, tittle }) => {
  return (
    <TouchableOpacity className="rounded-lg bg-white max-w-sm mr-5">
      {/* <Image
        source={{
          uri: imageUrl,
        }}
        className="h-56 w-64 rounded-lg"
      /> */}
      <Image
        source={imageUrl}
        className="w-full h-56 md:h-auto object-cover md:w-64 rounded-lg"
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold text-xl">
        {tittle}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
