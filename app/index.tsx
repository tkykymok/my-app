import { Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-blue-100">
      <Link href={"./routing-sample"} asChild>
        <TouchableOpacity activeOpacity={0.8}>
          <Text className="text-lg text-blue-500 underline">
            Routing Sample
          </Text>
        </TouchableOpacity>
      </Link>

      <Link href={"./(tabs)/tab1"} asChild>
        <TouchableOpacity activeOpacity={0.8}>
          <Text className="text-lg text-blue-500 underline">Tabs</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
