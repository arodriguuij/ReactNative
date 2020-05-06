import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INC = 20;
const COLOR_DEC = 10;

const reducer = (state, action) => {
  switch (action.type) {
    case "change_red":
      return { ...state, red: checkLimits(state.red, action.payload) };
    case "change_green":
      return { ...state, green: checkLimits(state.green, action.payload) };
    case "change_blue":
      return { ...state, blue: checkLimits(state.blue, action.payload) };
  }
};

const checkLimits = (prevState, amount) => {
  return amount > 0
    ? prevState + amount <= 255
      ? prevState + amount
      : 255
    : prevState + amount >= 0
    ? prevState + amount
    : 0;
};

const SquareScree = () => {
  const initialState = {
    red: 0,
    green: 0,
    blue: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        onSetColorInc={() =>
          dispatch({ type: "change_red", payload: COLOR_INC })
        }
        onSetColorDec={() =>
          dispatch({ type: "change_red", payload: -1 * COLOR_DEC })
        }
        color={"red"}
      />
      <ColorCounter
        onSetColorInc={() =>
          dispatch({ type: "change_green", payload: COLOR_INC })
        }
        onSetColorDec={() =>
          dispatch({ type: "change_green", payload: -1 * COLOR_DEC })
        }
        color={"green"}
      />
      <ColorCounter
        onSetColorInc={() =>
          dispatch({ type: "change_blue", payload: COLOR_INC })
        }
        onSetColorDec={() =>
          dispatch({ type: "change_blue", payload: -1 * COLOR_DEC })
        }
        color={"blue"}
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
      <Text>
        {red} - {green} - {blue}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScree;
