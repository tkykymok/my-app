import React from "react";
import { FlatList, Text, View } from "react-native";
import useSWR from "swr";

export const getTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return await response.json();
};

const Tab1 = () => {
  const { data } = useSWR("todos", getTodos);

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Item title={item.title} completed={item.completed} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export const Item = ({
  title,
  completed,
}: {
  title: string;
  completed: boolean;
}) => (
  <View className="bg-purple-200 p-4 m-2 rounded-lg">
    <Text className="text-lg font-bold">{title}</Text>
    <Text>Status: {completed ? "Completed" : "Not Completed"}</Text>
  </View>
);

export default Tab1;
