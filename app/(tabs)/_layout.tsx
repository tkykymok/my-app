import React from "react";
import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

const _Layout = () => {
  return (
    <Tabs
      initialRouteName={"tab1"}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "orange",
        tabBarIconStyle: {
          marginBottom: -3,
        },
      }}
    >
      <Tabs.Screen
        name="tab1"
        options={{
          tabBarLabel: "Tab 1",
          title: "Tab 1",
          tabBarIcon: () => <FontAwesome name="home" size={24} />,
        }}
      />
      <Tabs.Screen
        name="tab2"
        options={{
          tabBarLabel: "Tab 2",
          tabBarIcon: () => <FontAwesome name="home" />,
        }}
      />
    </Tabs>
  );
};

export default _Layout;
