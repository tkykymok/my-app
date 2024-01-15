import { View, Text, Pressable } from "react-native";
import { Link, router } from "expo-router";

export default function Details() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-lg">Details Screen</Text>

      <Link href="/" className="p-2">
        <Text className="p-2 bg-pink-200 rounded-lg">Back to Home</Text>
      </Link>

      <Pressable onPress={() => router.back()}>
        <Text>Go back</Text>
      </Pressable>
    </View>
  );
}
