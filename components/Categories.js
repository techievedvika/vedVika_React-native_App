import { View, Text, ScrollView, ImageBackground } from "react-native";
import CategoryCard from "./CategoryCard";
import LearningAlphabets from "../assets/img/learningAlphabets.jpg";
import colourSection from "../assets/img/colourSection.jpg";
import learningNumber from "../assets/img/learningNumber.jpg";
import Bg from "../assets/img/BG-01.jpg";

const Categories = () => {
  return (
    <ImageBackground
      source={Bg}
      resizeMode="cover"
      className="flex-1 items-center justify-center"
    >
      <View className="flex-1 items-center justify-center px-10">
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginVertical: 100,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CategoryCard imageUrl={LearningAlphabets} tittle="Alphabets" />
          <CategoryCard imageUrl={learningNumber} tittle="Numbers" />
          <CategoryCard imageUrl={colourSection} tittle="Colors" />
          <CategoryCard
            imageUrl="https://picsum.photos/200/300"
            tittle="Testing"
          />
          <CategoryCard
            imageUrl="https://picsum.photos/200/300"
            tittle="Testing"
          />
          <CategoryCard
            imageUrl="https://picsum.photos/200/300"
            tittle="Testing"
          />
          <CategoryCard
            imageUrl="https://picsum.photos/200/300"
            tittle="Testing"
          />
          <CategoryCard
            imageUrl="https://picsum.photos/200/300"
            tittle="Testing"
          />
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default Categories;
