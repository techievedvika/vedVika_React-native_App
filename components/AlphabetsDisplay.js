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
  Switch,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect, useRef } from "react";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  useAnimatedRef,
} from "react-native-reanimated";
import Pagination from "./Pagination";
import { StatusBar } from "expo-status-bar";

const AlphabetsDisplay = ({ data, autoPlay, pagination }) => {
  const interval = useRef();
  const navigation = useNavigation();
  const scrollViewRef = useAnimatedRef(null);
  // auto run toggleswitch
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const [isAutoPlay, setIsAutoPlay] = useState(autoPlay);

  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const [newData] = useState([
    { key: "spacer-left" },
    ...data,
    { key: "spacer-right" },
  ]);
  const { width, height } = useWindowDimensions();
  //   const SIZE = width * 0.5;
  const SIZE = width;
  const SPACER = (width - SIZE) / 1;
  //   const SPACER = (width - SIZE) / 2;
  const x = useSharedValue(0);
  const offSet = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x;
    },
  });
  useEffect(() => {
    if (isEnabled === true) {
      let _offSet = offSet.value;
      interval.current = setInterval(() => {
        if (_offSet >= Math.floor(SIZE * (data.length - 1) - 10)) {
          _offSet = 0;
        } else {
          _offSet = Math.floor(_offSet + SIZE);
        }
        scrollViewRef.current.scrollTo({ x: _offSet, y: 0 });

        // Animated.timing(fadeAnim, {
        //   toValue: 1,
        //   duration: 3000,
        //   useNativeDriver: true,
        // }).start();
      }, 2000);
    } else {
      clearInterval(interval.current);
    }
  }, [SIZE, SPACER, isEnabled, data.length, offSet.value, scrollViewRef]);

  return (
    <View className="bg-white">
      <StatusBar hidden={true} />
      <View className="flex-row">
        <View className="flex-1 justify-start">
          <Pressable
            onPress={() => navigation.goBack()}
            className="mt-20 ml-16"
          >
            <Text className="font-bold text-lg">Go Back</Text>
          </Pressable>
        </View>
        <View className="flex-1 justify-end items-end">
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            className="mt-20 mr-16"
          />
        </View>
      </View>
      <View>
        <Animated.ScrollView
          ref={scrollViewRef}
          onScroll={onScroll}
          onScrollBeginDrag={() => {
            setIsAutoPlay(false);
          }}
          onMomentumScrollEnd={(e) => {
            offSet.value = e.nativeEvent.contentOffset.x;
            setIsAutoPlay(isEnabled);
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
                [0.5, 1, 0.5]
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
                  height: height,
                  justifyContent: "center",
                }}
                key={index}
              >
                {/* <Animated.View style={[style]} className=""> */}
                <Animated.View className="flex-1 my-5 mx-auto">
                  <View className="flex-row justify-center items-center">
                    <View className="flex-1 justify-center items-center">
                      <Image
                        source={item?.image}
                        // style={styles.image}
                        className="object-center h-64 w-80 overflow-visible"
                      />
                    </View>
                    <View className="flex-1 justify-center items-center ">
                      <Animated.View>
                        <Image
                          source={item?.imageName}
                          style={{
                            ...Platform.select({
                              ios: {
                                width: 200,
                                height: 256,
                              },
                              android: {
                                width: 245,
                                height: 256,
                              },
                            }),
                          }}
                          className="object-center overflow-visible "
                        />
                      </Animated.View>
                    </View>
                  </View>
                </Animated.View>
              </View>
            );
          })}
        </Animated.ScrollView>
        {pagination && <Pagination data={data} x={x} size={SIZE} />}
      </View>
    </View>
  );
};

export default AlphabetsDisplay;

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 18,
    overflow: "hidden",
    backgroundColor: "pink",
  },
  image: {
    ...Platform.select({
      ios: {
        width: 288,
      },
      android: {
        width: "200px",
      },
    }),
  },
});
