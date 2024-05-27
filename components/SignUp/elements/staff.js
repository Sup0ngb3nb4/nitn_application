import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleIcon from "react-native-vector-icons/SimpleLineIcons";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./styles";

const Staff = ({ formData, handleInputChange }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConPassVisible, setIsConPassVisible] = useState(false);

  return (
    <>
      <View style={styles.inputWrapper}>
        <SimpleIcon
          name="user"
          size={20}
          color="#999"
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#999"
          value={formData.staffName}
          onChangeText={(text) => handleInputChange("staff", "staffName", text)}
        />
      </View>

      <View style={styles.inputWrapper}>
        <AntDesign
          name="idcard"
          size={20}
          color="#999"
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="ID No"
          placeholderTextColor="#999"
          value={formData.staffIdNo}
          onChangeText={(text) => handleInputChange("staff", "staffIdNo", text)}
        />
      </View>

      <View style={styles.inputWrapper}>
        <Icon
          name="cellphone"
          size={20}
          color="#999"
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          placeholderTextColor="#999"
          keyboardType="phone-pad"
          value={formData.staffMobileNo}
          onChangeText={(text) => handleInputChange("staff", "staffMobileNo", text)}
        />
      </View>

      <View style={styles.inputWrapper}>
        <Icon
          name="email-outline"
          size={20}
          color="#999"
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="email@example.com"
          placeholderTextColor="#999"
          keyboardType="email-address"
          value={formData.staffEmail}
          onChangeText={(text) => handleInputChange("staff", "staffEmail", text)}
        />
      </View>

      <View style={styles.inputWrapper}>
        <Icon
          name="lock-outline"
          size={20}
          color="#999"
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry={!isPasswordVisible}
          value={formData.staffPassword}
          onChangeText={(text) => handleInputChange("staff", "staffPassword", text)}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          <Icon
            name={isPasswordVisible ? "eye-outline" : "eye-off-outline"}
            size={20}
            color="#999"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#999"
          secureTextEntry={!isConPassVisible}
          value={formData.staffConfirmPassword}
          onChangeText={(text) =>
            handleInputChange("staff", "staffConfirmPassword", text)
          }
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setIsConPassVisible(!isConPassVisible)}
        >
          <Icon
            name={isConPassVisible ? "eye-outline" : "eye-off-outline"}
            size={20}
            color="#999"
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export { Staff };
