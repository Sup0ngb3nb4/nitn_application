import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { styles } from "./styles";
import { TabContainer, TabButton } from "./TabComponents";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AntDesign } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as Animatable from "react-native-animatable";

export default function Login({ navigation }) {
  const [activeTab, setActiveTab] = useState("student");
  const [formData, setFormData] = useState({
    staffIdNo: "",
    maintenanceIdNo: "",
    regNo: "",
    studentPassword: "",
    staffPassword: "",
    maintenancePassword: "",
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const getCurrentPassword = () => {
    if (activeTab === "student") return formData.studentPassword;
    if (activeTab === "staff") return formData.staffPassword;
    if (activeTab === "maintenance") return formData.maintenancePassword;
  };

  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps="handled"
      style={styles.container}
    >
      <Image
        alt="App Logo"
        resizeMode="contain"
        style={styles.headerImg}
        source={require("../../assets/NIT_Nagaland_Logo.png")}
      />
      <View style={styles.header}>
        <Text style={styles.headerText}>Login</Text>
        <Text style={styles.subHeaderText}>Please sign in to continue</Text>
      </View>

      <TabContainer>
        <TabButton
          image={require("../../assets/staff.png")}
          text="Staff"
          active={activeTab === "staff"}
          onPress={() => setActiveTab("staff")}
        />
        <TabButton
          image={require("../../assets/student.png")}
          text="Student"
          active={activeTab === "student"}
          onPress={() => setActiveTab("student")}
        />
        <TabButton
          image={require("../../assets/maintenance.png")}
          text="Maintenance"
          active={activeTab === "maintenance"}
          onPress={() => setActiveTab("maintenance")}
        />
      </TabContainer>

      <View style={styles.inputContainer}>
        {activeTab === "staff" && (
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
              onChangeText={(text) => handleInputChange("staffIdNo", text)}
            />
          </View>
        )}

        {activeTab === "student" && (
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
              onChangeText={(text) => handleInputChange("regNo", text)}
            />
          </View>
        )}

        {activeTab === "maintenance" && (
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
              value={formData.maintenanceIdNo}
              onChangeText={(text) =>
                handleInputChange("maintenanceIdNo", text)
              }
            />
          </View>
        )}

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
            value={getCurrentPassword()}
            onChangeText={(text) => {
              if (activeTab === "student")
                handleInputChange("studentPassword", text);
              if (activeTab === "staff")
                handleInputChange("staffPassword", text);
              if (activeTab === "maintenance")
                handleInputChange("maintenancePassword", text);
            }}
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
      </View>

      <Animatable.View
        animation="pulse"
        iterationCount="infinite"
        useNativeDriver
      >
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            navigation.navigate("drawerNavigator");
          }}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </Animatable.View>

      <TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("registration");
          }}
        >
          <Text style={styles.signupLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
}
