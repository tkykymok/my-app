import { View, Text, Button } from "react-native";
import { Link } from "expo-router";

export default function About() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-lg mb-4">About</Text>
      <Link href="/">Back to Home</Link>
    </View>
  );
}
