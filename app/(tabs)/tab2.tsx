import React from "react";
import { ScrollView } from "react-native";
import useSWR from "swr";
import { getTodos, Item } from "./tab1";

const Tab2 = () => {
  const { data } = useSWR("todos", getTodos);

  return (
    <ScrollView>
      {data.map((item: any) => (
        <Item title={item.title} completed={item.completed} />
      ))}
    </ScrollView>
  );
};

export default Tab2;
