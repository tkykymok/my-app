import React from "react";
import {
  Alert,
  Button,
  Pressable,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { Link, router } from "expo-router";

const RoutingSample = () => {
  const onHandlePress = () => {
    console.log("onHandlePress");
  };

  const handleLongPress = () => {
    Alert.alert("Long Press Detected", "ボタンが長押しされました！");
  };
  return (
    <View className="flex-1 items-center justify-around bg-blue-100">
      <Pressable onPress={() => router.push("./about")}>
        <Text className="p-2 bg-pink-200 rounded-lg">Go to About</Text>
      </Pressable>

      <Pressable
        onPress={() => console.log("Pressed!")}
        onLongPress={handleLongPress}
        className="p-2 bg-green-300 active:bg-green-500 rounded-lg"
      >
        <Text>Press Me</Text>
      </Pressable>

      <Link href={"./about"} asChild>
        <TouchableOpacity activeOpacity={0.8}>
          <Text className="text-blue-500 underline">Go to About</Text>
        </TouchableOpacity>
      </Link>

      <TouchableOpacity activeOpacity={0.8} onPress={onHandlePress}>
        <Text className="p-2 bg-pink-200 rounded-lg">TouchableOpacity</Text>
      </TouchableOpacity>

      <TouchableHighlight
        underlayColor={"#f4511e"}
        className="p-2 bg-pink-200 rounded-lg"
        onPress={onHandlePress}
      >
        <Text>TouchableHighlight</Text>
      </TouchableHighlight>

      <Button
        title="Go to Details"
        color="black"
        onPress={() => router.push("./details")}
      />
    </View>
  );
};

export default RoutingSample;
