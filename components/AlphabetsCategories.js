import {
  StyleSheet,
  View,
  Image,
  useWindowDimensions,
  TouchableOpacity,
  ImageBackground,
  Text,
  Button,
  Pressable,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect, useRef, Component } from "react";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  useAnimatedRef,
} from "react-native-reanimated";
import Pagination from "./Pagination";
import Bg from "../assets/img/purple_bg.png";
import backbt from "../assets/backward-01.png";

const AlphabetsCategories = ({ data, autoPlay, pagination }) => {
  const scrollViewRef = useAnimatedRef(null);
  const navigation = useNavigation();
  const interval = useRef();
  const [isAutoPlay, setIsAutoPlay] = useState(autoPlay);
  const [newData] = useState([
    { key: "spacer-left" },
    ...data,
    { key: "spacer-right" },
  ]);
  const { width, height } = useWindowDimensions();
  const SIZE = width * 0.5;
  const SPACER = (width - SIZE) / 2;
  const x = useSharedValue(0);
  const offSet = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x;
    },
  });
  useEffect(() => {
    if (isAutoPlay === true) {
      let _offSet = offSet.value;
      interval.current = setInterval(() => {
        if (_offSet >= Math.floor(SIZE * (data.length - 1) - 10)) {
          _offSet = 0;
        } else {
          _offSet = Math.floor(_offSet + SIZE);
        }
        scrollViewRef.current.scrollTo({ x: _offSet, y: 0 });
      }, 2000);
    } else {
      clearInterval(interval.current);
    }
  }, [SIZE, SPACER, isAutoPlay, data.length, offSet.value, scrollViewRef]);

  return (
    <>
      <StatusBar hidden={true} />

      <View className="">
        <ImageBackground
          source={Bg}
          style={{ height: height, width: width }}
          // resizeMode="cover"
          className="overflow-visible flex-1 justify-center w-full"
        >
          <View className="mt-5 ml-10">
            <Pressable
              onPress={() => navigation.goBack()}
              className="flex-row justify-start items-start"
            >
              <Image source={backbt} alt="back button" className="h-10 w-10" />
            </Pressable>
          </View>

          <View className="flex-1">
            <Animated.ScrollView
              ref={scrollViewRef}
              onScroll={onScroll}
              onScrollBeginDrag={() => {
                setIsAutoPlay(false);
              }}
              onMomentumScrollEnd={(e) => {
                offSet.value = e.nativeEvent.contentOffset.x;
                setIsAutoPlay(autoPlay);
              }}
              scrollEventThrottle={16}
              decelerationRate="fast"
              snapToInterval={SIZE}
              horizontal
              bounces={false}
              showsHorizontalScrollIndicator={false}
            >
              {newData.map((item, index) => {
                const style = useAnimatedStyle(() => {
                  const scale = interpolate(
                    x.value,
                    [(index - 2) * SIZE, (index - 1) * SIZE, index * SIZE],
                    [0.7, 1.2, 0.7]
                  );
                  return {
                    transform: [{ scale }],
                  };
                });
                if (!item.image) {
                  return <View style={{ width: SPACER }} key={index} />;
                }
                return (
                  <View
                    style={{
                      width: SIZE,
                      // height: height,
                      justifyContent: "center",
                      flex: 1,
                    }}
                    key={index}
                  >
                    <Animated.View
                      style={[styles.imageContainer, style]}
                      className="relative flex-row  justify-center items-end overflow-visible"
                    >
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate(item?.route);
                        }}
                      >
                        <Image
                          source={item.image}
                          style={styles.image}
                          // resizeMode="stretch"
                          // className={`overflow-scroll`}
                        />
                      </TouchableOpacity>
                      <View className=" absolute bg-purple-400 rounded-xl">
                        <Text className="text-2xl  p-1 text-white">
                          {item.title}
                        </Text>
                      </View>
                    </Animated.View>
                  </View>
                );
              })}
            </Animated.ScrollView>

            {pagination && <Pagination data={data} x={x} size={SIZE} />}
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

export default AlphabetsCategories;

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 18,
    overflow: "hidden",
    backgroundColor: "pink",
  },
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 16 / 9,
  },
});
