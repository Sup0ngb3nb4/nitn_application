import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";
import { TabContainer, TabButton } from "./TabComponents";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Staff } from "./elements/staff";
import { Student } from "./elements/student";
import { Maintenance } from "./elements/maintenance";
import * as Animatable from "react-native-animatable";
import getEndPoint from "../endpoints/getEndpoint";
import { storeTokens } from "../tokens/tokenManager";
import api from "../tokens/api";

export default function Registration({ navigation }) {
  const [activeTab, setActiveTab] = useState("student");
  const [studentData, setStudentData] = useState({
    username: "",
    registrationNo: "",
    mobileNo: "",
    email: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    gender:"Select gender",
    bloodType: "",
    medicalConditions: "",
    ethnicity: "",
    address: "",
    guardianMobileNumber: "",
    deptName: "Select Department",
    batch: "",
    hostelName: ""
  });

  const [staffData, setStaffData] = useState({
    staffName: "",
    staffIdNo: "",
    staffMobileNo: "",
    staffEmail: "",
    staffPassword: "",
    staffConfirmPassword: "",
  });

  const [maintenanceData, setMaintenanceData] = useState({
    maintenanceName: "",
    maintenanceIdNo: "",
    maintenanceMobileNo: "",
    maintenanceEmail: "",
    maintenancePassword: "",
    maintenanceConfirmPassword: "",
  });

  const handleInputChange = (type, key, value) => {
    if (type === "student") {
      setStudentData({ ...studentData, [key]: value });
    } else if (type === "staff") {
      setStaffData({ ...staffData, [key]: value });
    } else if (type === "worker") {
      setMaintenanceData({ ...maintenanceData, [key]: value });
    }
  };

  const registerStudent = async (studentData) => {
    try {
      if (studentData.studentPassword !== studentData.studentConfirmPassword) {
        Alert.alert("Error", "Passwords do not match");
        return;
      }

      const response = await api.post(
        getEndPoint("STUDENT_REGISTER"),
        studentData
      );
      console.log("Student registered successfully:", response.data);

      if (response.status == 200) {
        await storeTokens(response.data.access, response.data.refresh);
        navigation.navigate("drawerNavigator");
        Alert.alert(
          "Registration Successful",
          "You have registered successfully as a student."
        );
      } else {
        console.error("Invalid response format:", response);
        Alert.alert("Error", "Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error registering student:", error);
      Alert.alert(
        "Registration Failed",
        "An error occurred while registering. Please try again."
      );
    }
  };

  const handleRegister = () => {
    if (activeTab === "student") {
      registerStudent(studentData);
    } else if (activeTab === "staff") {
      registerStaff(staffData);
    } else if (activeTab === "maintenance") {
      registerMaintenance(maintenanceData);
    }
  };

  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps="handled"
      style={styles.container}
      contentContainerStyle
    >
      <View style={styles.header}>
        <Text style={styles.headerText}>Register</Text>
        <Text style={styles.subHeaderText}>Please sign up to continue</Text>
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
        {activeTab === "staff" ? (
          <Staff formData={staffData} handleInputChange={handleInputChange} />
        ) : activeTab === "student" ? (
          <Student
            formData={studentData}
            handleInputChange={handleInputChange}
          />
        ) : (
          <Maintenance
            formData={maintenanceData}
            handleInputChange={handleInputChange}
          />
        )}
      </View>

      <Animatable.View
        animation="pulse"
        iterationCount="infinite"
        useNativeDriver
      >
        <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
          <Text style={styles.loginButtonText}>Register</Text>
        </TouchableOpacity>
      </Animatable.View>

      <TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Already have an account?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("login");
          }}
        >
          <Text style={styles.signupLink}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
}
