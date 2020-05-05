import React from "react";
import { FlatList } from "react-native";
import ImagesDetail from "../components/ImagesDetail";

const ImagesScreen = () => {
  const mockImages = [
    { title: "Forest", imageSource: require("../../assets/forest.jpg"), score: 8 },
    { title: "Beach", imageSource: require("../../assets/beach.jpg"), score: 2 },
    { title: "Mountain", imageSource: require("../../assets/mountain.jpg"), score: 10 },
  ];
  return (
    <FlatList
      keyExtractor={(item) => item.title}
      data={mockImages}
      renderItem={({ item }) => (
        <ImagesDetail title={item.title} img={item.imageSource} score={item.score}/>
      )}
    />
  );
};

export default ImagesScreen;
