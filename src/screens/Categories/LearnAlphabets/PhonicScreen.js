import * as React from "react";
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
  Modal,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Speech from "expo-speech";
import backGroundImage from "../../../../assets/img/purple_bg.png";
import backbt from "../../../../assets/backward-01.png";

const data = [
  {
    image: require("../../../../assets/alphabets/A-01.jpg"),
    imageName: require("../../../../assets/alphabetImages/apple-01.jpg"),
    title: "A for apple",
  },
  {
    image: require("../../../../assets/alphabets/B-01.jpg"),
    imageName: require("../../../../assets/alphabetImages/ball-01.jpg"),
    title: "B for ball",
  },
  {
    image: require("../../../../assets/alphabets/C-01.jpg"),
    imageName: require("../../../../assets/alphabetImages/cat-01.jpg"),
    title: "C for cat",
  },
  {
    image: require("../../../../assets/alphabets/D-01.jpg"),
    imageName: require("../../../../assets/alphabetImages/dog-01.jpg"),
    title: "D for dog",
  },
  {
    image: require("../../../../assets/alphabets/E-01.jpg"),
    imageName: require("../../../../assets/alphabetImages/egg-01.jpg"),
    title: "E for egg",
  },
  {
    image: require("../../../../assets/alphabets/F-01.jpg"),
    imageName: require("../../../../assets/alphabetImages/fish-01.jpg"),
    title: "F for fish",
  },
  {
    image: require("../../../../assets/alphabets/G-01.jpg"),
    imageName: require("../../../../assets/alphabetImages/Grapes-01.jpg"),
    title: "G for grapes",
  },
  {
    image: require("../../../../assets/alphabets/H-01.jpg"),
    imageName: require("../../../../assets/alphabetImages/Hat-01.jpg"),
    title: "H for hat",
  },
  {
    image: require("../../../../assets/alphabets/I-01.jpg"),
    imageName: require("../../../../assets/alphabetImages/ice-cream-01.jpg"),
    title: "I for ice-cream",
  },
  {
    image: require("../../../../assets/alphabets/J-01.jpg"),
    imageName: require("../../../../assets/alphabetImages/Jug-01.jpg"),
    title: "J for jug",
  },
  {
    image: require("../../../../assets/alphabets/K-01.jpg"),
    imageName: require("../../../../assets/alphabetImages/Kite-01.jpg"),
    title: "K for kite",
  },
  {
    image: require("../../../../assets/alphabets/L-01.jpg"),
    imageName: require("../../../../assets/alphabetImages/lion-01.jpg"),
    title: "L for lion",
  },
  {
    image: require("../../../../assets/alphabets/M-01.jpg"),
    imageName: require("../../../../assets/alphabetImages/monkey-01.jpg"),
    title: "M for monkey",
  },
  {
    image: require("../../../../assets/alphabets/N-01.jpg"),
    imageName: require("../../../../assets/alphabetImages/nest-01.jpg"),
    title: "N for nest",
  },
  {
    image: require("../../../../assets/alphabets/O-01.jpg"),
    imageName: require("../../../../assets/alphabetImages/orenge-01.jpg"),
    title: "O for orange",
  },
  {
    image: require("../../../../assets/alphabets/P-01.jpg"),
    imageName: require("../../../../assets/alphabetImages/parrot-01.jpg"),
    title: "P for parrot",
  },
  {
    image: require("../../../../assets/alphabets/Q-01.jpg"),
    imageName: require("../../../../assets/alphabetImages/queen-01.jpg"),
    title: "Q for queen",
  },
  {
    image: require("../../../../assets/alphabets/R-01.jpg"),
    imageName: require("../../../../assets/alphabetImages/rat-01.jpg"),
    title: "R for rat",
  },
  {
    image: require("../../../../assets/alphabets/S-01.jpg"),
    imageName: require("../../../../assets/alphabetImages/star-01.jpg"),
    title: "S for star",
  },
  {
    image: require("../../../../assets/alphabets/T-01.jpg"),
    imageName: require("../../../../assets/alphabetImages/tiger-01.jpg"),
    title: "T for tiger",
  },
  {
    image: require("../../../../assets/alphabets/U-01.jpg"),
    imageName: require("../../../../assets/alphabetImages/umbrella-01.jpg"),
    title: "U for umbrella",
  },
  {
    image: require("../../../../assets/alphabets/V-01.jpg"),
    imageName: require("../../../../assets/alphabetImages/van-01.jpg"),
    title: "V for van",
  },
  {
    image: require("../../../../assets/alphabets/W-01.jpg"),
    imageName: require("../../../../assets/alphabetImages/water-01.jpg"),
    title: "W for water",
  },
  {
    image: require("../../../../assets/alphabets/X-01.jpg"),
    imageName: require("../../../../assets/alphabetImages/X-mas-01.jpg"),
    title: "X for x-mas",
  },
  {
    image: require("../../../../assets/alphabets/Y-01.jpg"),
    imageName: require("../../../../assets/alphabetImages/yolk-01.jpg"),
    title: "Y for yolk",
  },
  {
    image: require("../../../../assets/alphabets/Z-01.jpg"),
    imageName: require("../../../../assets/alphabetImages/zebra-01.jpg"),
    title: "Z for zebra",
  },
];

const PhonicScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = React.useState(false);
  const [imgUrl, setImgUrl] = React.useState();
  const { width, height } = useWindowDimensions();

  const speak = (txt, img) => {
    setImgUrl(img);
    setModalVisible(true);
    const thingToSay = txt;
    setTimeout(() => Speech.speak(thingToSay), 1000);
    setTimeout(() => setModalVisible(false), 2500);
  };

  return (
    <>
      <StatusBar hidden={true} />
      <ImageBackground
        source={backGroundImage}
        resizeMode="cover"
        style={{ height: height, width: width }}
        className="overflow-visible flex-1 justify-center"
      >
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          horizontal={true}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {/* <Text style={styles.modalText}>Hello World!</Text> */}
              <Image source={imgUrl} className="h-64 w-72" />
            </View>
          </View>
        </Modal>

        <View className="my-5 ml-10">
          <Pressable
            onPress={() => navigation.goBack()}
            className="flex-row justify-start items-start"
          >
            {/* <Text className="font-bold text-lg float-left">Go Back</Text> */}
            <Image source={backbt} alt="back button" className="h-10 w-10" />
          </Pressable>
        </View>

        <ScrollView
          vertical
          bounces={false}
          showsHorizontalScrollIndicator={false}
          className="mx-5"
        >
          <View className="flex-row flex-wrap justify-center w-full h-full my-3 ">
            {data?.map((item, index) => {
              return (
                //   <Image
                //   source={item?.image}
                //   className="h-20 w-20 border rounded-lg shadow-md"
                // />
                <View
                  className="m-3 flex items-center justify-center drop-shadow-md"
                  key={index}
                >
                  <TouchableOpacity
                    onPress={() => speak(item?.title, item?.imageName)}
                  >
                    {/* <WritingDraw /> */}
                    <Image
                      source={item?.image}
                      className="h-24 w-28 border rounded-lg"
                    />
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
};

export default PhonicScreen;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
