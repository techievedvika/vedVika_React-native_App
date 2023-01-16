import learningAlphabets from "../assets/img/learningAlphabets.jpg";
import colourSection from "../assets/img/colourSection.jpg";
import learningNumber from "../assets/img/learningNumber.jpg";
import Bg from "../assets/img/BG-01.jpg";
import {
  ScrollView,
  Text,
  View,
  ImageBackground,
  useWindowDimensions,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Categories = () => {
  // router navigation variable
  const navigation = useNavigation();
  // display Dimensions
  const { height, width } = useWindowDimensions();
  return (
    <>
      <View>
        <View>
          {/* background image  */}
          <ImageBackground
            source={Bg}
            style={{ height: height, width: width }}
            resizeMode="cover"
            className="px-5"
          >
            <View className="flex-1 items-center justify-center">
              {/* Scrolling screens  */}
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginHorizontal: 10,
                }}
              >
                {/* Alphabets Touchable Card  */}
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("LearningAlphabet");
                  }}
                >
                  <Image
                    source={learningAlphabets}
                    className="w-full h-56 md:h-auto object-cover md:w-64 rounded-lg"
                  />
                  <Text className="absolute bottom-1 left-1 text-white font-bold text-xl">
                    Alphabets
                  </Text>
                </TouchableOpacity>
                {/* Number Touchable Card  */}
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("LearningNumber");
                  }}
                >
                  <Image
                    source={learningNumber}
                    className="w-full h-56 md:h-auto object-cover md:w-64 rounded-lg"
                  />
                  <Text className="absolute bottom-1 left-1 text-white font-bold text-xl">
                    Numbers
                  </Text>
                </TouchableOpacity>
                {/* Colour Touchable Card  */}
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Colors");
                  }}
                >
                  <Image
                    source={colourSection}
                    className="w-full h-56 md:h-auto object-cover md:w-64 rounded-lg"
                  />
                  <Text className="absolute bottom-1 left-1 text-white font-bold text-xl">
                    Colors
                  </Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </ImageBackground>
        </View>
      </View>
    </>
  );
};

export default Categories;
