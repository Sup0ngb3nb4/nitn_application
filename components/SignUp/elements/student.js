import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleIcon from "react-native-vector-icons/SimpleLineIcons";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./styles";

const Student = ({ formData, handleInputChange }) => {
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
          value={formData.studentName}
          onChangeText={(text) =>
            handleInputChange("student", "studentName", text)
          }
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
          placeholder="Registration No"
          placeholderTextColor="#999"
          keyboardType="phone-pad"
          value={formData.regNo}
          onChangeText={(text) => handleInputChange("student", "regNo", text)}
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
          value={formData.studentMobileNo}
          onChangeText={(text) =>
            handleInputChange("student", "studentMobileNo", text)
          }
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
          value={formData.studentEmail}
          onChangeText={(text) =>
            handleInputChange("student", "studentEmail", text)
          }
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
          value={formData.password}
          onChangeText={(text) =>
            handleInputChange("student", "studentPassword", text)
          }
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
          value={formData.studentConfirmPassword}
          onChangeText={(text) =>
            handleInputChange("student", "studentConfirmPassword", text)
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

export { Student };
