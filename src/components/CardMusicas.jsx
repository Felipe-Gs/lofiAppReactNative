import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const CardMusicas = () => {
  return (
    <>
      <TouchableOpacity onPress={playSound1}>
        <Image
          style={{ width: 200, height: 200 }}
          source={require("./imgs/lofi1.jpg")}
        />
      </TouchableOpacity>
    </>
  );
};

export default CardMusicas;

const styles = StyleSheet.create({});
