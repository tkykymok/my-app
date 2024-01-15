import "../global.css";

import { Stack } from "expo-router";
import { Button } from "react-native";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTitleAlign: "center",
        headerRight: () => (
          <Button onPress={() => alert("This is a button!")} title="Info" />
        ),
        headerBackTitle: "Back",
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen name="index" options={{ headerTitle: "Home" }} />
      <Stack.Screen name="about" options={{ headerTitle: "About" }} />
      <Stack.Screen name="details" options={{ headerTitle: "Details" }} />
      <Stack.Screen
        name="routing-sample"
        options={{ headerTitle: "Routing" }}
      />
      <Stack.Screen name="(tabs)" options={{ headerTitle: "Tabs" }} />
    </Stack>
  );
}
