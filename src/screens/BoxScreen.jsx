import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={style.viewStyle}>
      <View style={style.viewOneStyle} />
      <View style={style.viewTwoStyle} />
      <View style={style.viewThreeStyle} />
    </View>
  );
};

const style = StyleSheet.create({
  viewStyle: {
    flexDirection: "row",
    justifyContent: 'space-between' 
    /* "center" */ /* 'flex-start' */
    /* "space-between" */
    /* "space-around" */
    //alignItems: /* "flex-end" */ /* 'center' */ /* "flex-start" */ /* 'stretch' */,
    //flexDirection: "row" /* "column" */,
    //justifyContent:
    /* "space-evenly" */
  },
  viewOneStyle: {
    borderWidth: 3,
    borderColor: "red",
    width: 100,
    height: 100,
    backgroundColor: "red",
    //flex: 4,
  },
  viewTwoStyle: {
    borderWidth: 3,
    borderColor: "green",
    width: 100,
    height: 100,
    backgroundColor: "green",
    top: 100
    /* ...StyleSheet.absoluteFillObject, */
    //flex: 4,
    /* bottom: 0, top: 0, left: 0, right: 0, */
    //alignSelf: "center" /* 'flex-start' */ /* 'flex-end' */ /* 'stretch' */,
    //position: "absolute",
  },
  viewThreeStyle: {
    borderWidth: 3,
    borderColor: "purple",
    width: 100,
    height: 100,
    backgroundColor: "purple",
    //flex: 2,
  },
});

export default BoxScreen;
