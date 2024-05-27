import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { styles } from "./styles";

const TabContainer = ({ children }) => {
  return <View style={styles.tabContainer}>{children}</View>;
};

const TabButton = ({ image, text, active, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.tabButton, active && styles.activeTabButton]}
    >
      <Image source={image} style={styles.tabButtonImage} />
      <Text
        style={[styles.tabButtonText, active && styles.activeTabButtonText]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export { TabButton, TabContainer };
