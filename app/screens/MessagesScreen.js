import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nobis, culpa officiis expedita laboriosam quod libero unde quisquam. Accusamus, provident. Aliquid eius sint earum. Nobis ea totam quia dolorem officiis!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nobis, culpa officiis expedita laboriosam quod libero unde quisquam. Accusamus, provident. Aliquid eius sint earum. Nobis ea totam quia dolorem officiis!",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nobis, culpa officiis expedita laboriosam quod libero unde quisquam. Accusamus, provident. Aliquid eius sint earum. Nobis ea totam quia dolorem officiis!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nobis, culpa officiis expedita laboriosam quod libero unde quisquam. Accusamus, provident. Aliquid eius sint earum. Nobis ea totam quia dolorem officiis!",
    image: require("../assets/mosh.jpg"),
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <View>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected: ", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/mosh.jpg"),
            },
          ]);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default MessagesScreen;
