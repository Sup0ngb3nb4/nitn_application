import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import { TabContainer, TabButton } from "./TabComponents";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AntDesign } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TextInput } from "react-native-gesture-handler";

export default function Login({ navigation }) {
  const [activeTab, setActiveTab] = useState("student");
  const [idNo, setIdNo] = useState("");
  const [registrationNo, setRegistrationNo] = useState("");
  const [studentPassword, setStudentPassword] = useState("");
  const [staffPassword, setStaffPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps="handled"
      style={styles.container}
    >
      <Image
        alt="App Logo"
        resizeMode="contain"
        style={styles.headerImg}
        source={require("../../assets/NIT Nagaland Logo.png")}
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
      </TabContainer>

      <View style={styles.inputContainer}>
        {activeTab === "staff" ? (
          <>
            <View style={styles.inputWrapper}>
              <AntDesign
                name="idcard"
                size={20}
                color="#999"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="ID"
                placeholderTextColor="#999"
                value={idNo}
                onChangeText={setIdNo}
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
                value={staffPassword}
                onChangeText={setStaffPassword}
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
          </>
        ) : (
          <>
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
                value={registrationNo}
                onChangeText={setRegistrationNo}
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
                value={studentPassword}
                onChangeText={setStudentPassword}
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
          </>
        )}
      </View>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => {
          navigation.navigate("drawerNavigator");
        }}
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

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
