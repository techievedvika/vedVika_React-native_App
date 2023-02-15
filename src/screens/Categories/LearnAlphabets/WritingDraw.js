import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { Dimensions } from "react-native";
import SignatureScreen from "react-native-signature-canvas";
import backbt from "../../../../assets/arrow-left.png";
import forword from "../../../../assets/forward-01.png";
import backword from "../../../../assets/backward-01.png";
import axios from "axios";
import Dialog from "react-native-dialog";
import * as FileSystem from "expo-file-system";

export default function WritingDraw({ route, navigation }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef();
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const { latter, image } = route.params;
  // console.log(image);

  const [result, setResult] = useState();
  const [colorText, setPenColor] = useState("");

  const [signature, setSign] = useState();

  const handleOK = async (signature) => {
    // const base64 = signature;
    // const pathToSaveImage = "../../../../assets/image.png";

    // converBase64ToImage(base64, pathToSaveImage);
    setSign(signature);
    sendImg();
  };

  const handleColorChange = () => {
    ref.current.changePenColor(colorText);
  };

  // #Function to handle Undo
  const handleUndo = () => {
    ref.current.undo();
  };

  // #Function to handle Redo
  const handleRedo = () => {
    ref.current.redo();
  };
  // console.log(windowHeight)
  const style = `
  body {
    // font-family: Helvetica, Sans-Serif;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    display: flex;
    align-items: start;
    justify-content: space-around;
    flex-flow: row wrap;
    padding: 0;
    margin: 0;
    // box-sizing: border-box;
    border: 1px solid black;
  }
  
  .m-signature-pad {
    position: absolute;
    font-size: 10px;
    width: 600px;
    height: 200px;
    top: 10%;
    left: 50%;
    margin-left: 0px;
    margin-top: 0px;
    border: 1px solid green;
    background-color: white;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.27), 0 0 40px rgba(0, 0, 0, 0.08) inset;
  }
  
  .m-signature-pad:before, .m-signature-pad:after {
    position: absolute;
    z-index: -1;
    content: "";
    width: 40%;
    height: 10px;
    left: 20px;
    bottom: 10px;
    background: transparent;
    -webkit-transform: skew(-3deg) rotate(-3deg);
    -moz-transform: skew(-3deg) rotate(-3deg);
    -ms-transform: skew(-3deg) rotate(-3deg);
    -o-transform: skew(-3deg) rotate(-3deg);
    transform: skew(-3deg) rotate(-3deg);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.4);
    // border: 1px solid pink;
  }
  
  .m-signature-pad:after {
    left: auto;
    right: 20px;
    -webkit-transform: skew(3deg) rotate(3deg);
    -moz-transform: skew(3deg) rotate(3deg);
    -ms-transform: skew(3deg) rotate(3deg);
    -o-transform: skew(3deg) rotate(3deg);
    transform: skew(3deg) rotate(3deg);
    // border: 1px solid blue;
  }
  
  .m-signature-pad--body {
    position: absolute;
    left: 20px;
    right: 20px;
    top: 0px;
    bottom: 10px;
    
    // border: 1px solid orange;
    backgroundcolor: white;
    // height:280px;
    height:${windowHeight - 150}px;
  }
  
  .m-signature-pad--body
    canvas {
      position: absolute;
      flex:1;
      justify:"center",
      alignItems:"center",
      // background-color: white;
      // z-index: -1;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border-radius: 4px;
      border: 1px solid blue;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.02) inset;
    }

    // @media (pointer: coarse) {
    //   body {
    //     overflow: hidden; /* Needed to prevent the vertical scroll on touch devices */
    //   }
    // }
  
  .m-signature-pad--footer {
    position: absolute;
    left: 20px;
    right: 20px;
    bottom: 20px;
    // height: 50px;
    top:${windowHeight - 150}px;
    padding: 0;
    margin: 0;
    border: 1px solid red;
  }
  .m-signature-pad--footer--body {
    position: absolute;
    left: 20px;
    right: 20px;
    bottom: 20px;
    height: 40px;
    top:0px;
    border: 1px solid pink;
  }
  
  .m-signature-pad--footer
    .description {
      color: #C3C3C3;
      text-align: center;
      font-size: 1.2em;
      margin-top: 1.8em;
    }
  
  .m-signature-pad--footer
    .button {
      position: absolute;
      bottom: 0;
      background-color: #3F99F7;
      width: 100px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      color: #FFF;
      border: none;
      outline: none;
    }
  
  .m-signature-pad--footer
    .button.clear {
      left: 0;
    }
  
  .m-signature-pad--footer
    .button.save {
      right: 0;
    }
  
  @media screen and (max-width: 1024px) {
    .m-signature-pad {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: auto;
      height: auto;
      min-width: 250px;
      min-height: 140px;
      margin: 0;
    }
    #github {
      display: none;
    }
  }
  
  @media screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    .m-signature-pad {
      margin: 0%;
    }
  }
  
  @media screen and (max-height: 320px) {
    .m-signature-pad--body {
      left: 0;
      right: 0;
      top: 0;
      bottom: 32px;
    }
    .m-signature-pad--footer {
      left: 20px;
      right: 20px;
      bottom: 4px;
      height: 28px;
    }
    .m-signature-pad--footer
      .description {
        font-size: 1em;
        margin-top: 1em;
      }
  }
  body,html {height: 300px; width: 300px;}
    `;

  const sendImg = async () => {
    const data = { img: signature, title: latter };
    // console.log(data);
    if (signature) {
      axios
        .post("http://localhost:3000/api/imagediff", {
          img: signature,
          title: latter,
        })
        .then(function (response) {
          setResult(response.data);
          setVisible(true);
        })
        .catch(function (error) {
          console.log("error", error.message);
        });
    }
    // try {
    //   const response = await fetch(
    //     // "http://localhost:3000/api/imagediff",
    //     "http://64.227.168.0/api/imagediff",
    //     {
    //       method: "POST",
    //       headers: {
    //         // Accept: "application/json",
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(data),
    //     }
    //   );
    //   const json = await response.json();
    //   console.log(json);
    //   setResult(json);
    // setSign(null);
    // } catch (error) {
    //   console.error(error.message);
    // }
  };

  const okHandle = () => {
    // The user has pressed the "Delete" button, so here you can do your own logic.
    // ...Your logic
    setVisible(false);
  };

  return (
    <>
      {/* <Dialog.Container visible={visible}>
        <Dialog.Title>Result</Dialog.Title>
        <Dialog.Description>
          {result?.text?.trim() === latter
            ? Math.floor(result?.result) + " %"
            : result?.message
            ? result?.message
            : result?.text}
        </Dialog.Description>
        <Dialog.Button label="Try Again" onPress={okHandle} />
      </Dialog.Container> */}
      <View className="flex-row mt-2 ml-10 items-center ">
        <View className="flex-1 justify-start">
          <Pressable
            onPress={() => navigation.goBack()}
            className="flex-row justify-start items-start"
          >
            <Image source={backbt} alt="back button" />
          </Pressable>
        </View>
        <View className="flex-1 justify-start">
          <Text>Draw this latter " {latter} "</Text>
        </View>
      </View>
      <View className="flex-row justify-center items-center h-5">
        {/* <Text>{Math.floor(result?.result) + " %"}</Text> */}
        <Text className="">
          {result?.text?.trim() === latter
            ? Math.floor(result?.result) + " %"
            : `Not ${latter} :- ` + result?.text}
        </Text>
      </View>
      <View className="flex-row justify-center h-full gap-x-3 mx-5">
        <View className="flex-1 justify-start">
          <View className="flex-1 items-center">
            <TouchableOpacity onPress={handleUndo}>
              <Image
                source={backword}
                alt="back button"
                className="h-10 w-10"
              />
            </TouchableOpacity>
            {/* <TextInput
              placeholder="Specify Pen Color"
              style={styles.textInput}
              autoCapitalize="none"
              value={colorText}
              onChangeText={setPenColor}
            />
            <TouchableOpacity
              style={styles.setButton}
              onPress={handleColorChange}
            >
              <Text style={styles.text}>Set</Text>
            </TouchableOpacity> */}
          </View>
        </View>
        {/* <Image
          source={require("../../../../assets/VedvikaTechnology/Alphabet(png)/A(1).png")}
          className="h-16 w-16"
        /> */}

        <View
          className="flex-1 justify-center items-center w-full"
          // style={{ width: 300 }}
        >
          <SignatureScreen
            ref={ref}
            onOK={handleOK}
            penColor={colorText}
            webStyle={style}
            minWidth={5}
            bgSrc={
              image
                ? `https://new.advanceexcel.in/vedvika/Vedvika%20Technology/${image}/${latter}-01(1).png`
                : ""
            }
            // backgroundColor="white"
            bgWidth={300}
            bgHeight={220}
            style={{ margin: 10, justifyContent: "center" }}
            // clearText="Clear"
            // confirmText="Save"
            // canvasProps={{ width: 0, height: 0 }}
          />
        </View>

        <View className="flex-1 justify-start">
          <View className="flex-1 items-center">
            <TouchableOpacity onPress={handleRedo}>
              <Image source={forword} alt="back button" className="h-10 w-10" />
            </TouchableOpacity>
            {/* <TextInput
              placeholder="Specify Pen Color"
              style={styles.textInput}
              autoCapitalize="none"
              value={colorText}
              onChangeText={setPenColor}
            />
            <TouchableOpacity
              style={styles.setButton}
              onPress={handleColorChange}
            >
              <Text style={styles.text}>Set</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    // marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  textSign: {
    color: "deepskyblue",
    fontWeight: "bold",
    paddingVertical: 3,
  },
  text: {
    color: "#fff",
    fontWeight: "900",
  },
  textInput: {
    paddingVertical: 10,
    textAlign: "center",
  },
  setButton: {
    backgroundColor: "deepskyblue",
    textAlign: "center",
    fontWeight: "900",
    color: "#fff",
    marginHorizontal: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
