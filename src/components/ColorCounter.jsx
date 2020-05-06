import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = ({ onSetColorInc, onSetColorDec, color }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`Increase ${color}`} onPress={onSetColorInc} />
      <Button title={`Decrease ${color}`} onPress={onSetColorDec} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
