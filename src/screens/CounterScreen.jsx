import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { ...state, counter: state.counter + action.payload };
    case "decrease":
      return {
        ...state,
        counter:
          state.counter > 0 ? state.counter - action.payload : state.counter,
      };
    default:
      return state;
  }
};
const CounterScreen = () => {
  const initialState = { counter: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: "increase", payload: 1 })}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({ type: "decrease", payload: 1 })}
      />
      <Text>Current Count: {state.counter}</Text>
    </View>
  );
};

const styless = StyleSheet.create({});

export default CounterScreen;
