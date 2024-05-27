import React from "react";
import { View, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");
const CustomCheckBox = ({ isChecked, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.checkBoxContainer}>
      <View style={[styles.checkBox, isChecked && styles.checked]}>
        {isChecked && <Ionicons name="checkmark" size={15} color="white" />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkBoxContainer: {
    padding: width * 0.02,
  },
  checkBox: {
    width: width * 0.05,
    height: width * 0.05,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: width * 0.05,
    alignItems: "center",
    justifyContent: "center",
  },
  checked: {
    backgroundColor: "#000",
  },
});
export default CustomCheckBox;
