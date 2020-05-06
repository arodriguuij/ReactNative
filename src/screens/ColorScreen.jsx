import React, { useReducer } from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "add_color":
      return { colors: [...state.colors, action.payload] };
    default:
      return state;
  }
};

const ColorScree = () => {
  const initalState = { colors: [] };
  const [state, dispatch] = useReducer(reducer, initalState);

  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() => dispatch({ type: "add_color", payload: randomRgb() })}
      />
      <FlatList
        data={state.colors}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={{ height: 100, width: 100, backgroundColor: item }} />
        )}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
};
const styles = StyleSheet.create({});

export default ColorScree;
