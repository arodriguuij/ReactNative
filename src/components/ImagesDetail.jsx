import React from "react";
import { Text, View, Image } from "react-native";

const ImagesDetail = ({ title, img, score }) => {
  return (
    <View>
      <Image source={img} />
      <Text>{title}</Text>
      <Text>Image score - {score}</Text>
    </View>
  );
};

export default ImagesDetail;
