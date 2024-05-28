import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleIcon from "react-native-vector-icons/SimpleLineIcons";
import {
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
} from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { styles } from "./styles";
import { Dropdown } from "react-native-element-dropdown";

const Student = ({ formData, handleInputChange }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConPassVisible, setIsConPassVisible] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());

  const data = [
    { gender: "Male", value: "male" },
    { gender: "Female", value: "female" },
  ];
  const department = [
    { deptName: "B.Tech, CE" },
    { deptName: "B.Tech, CSE" },
    { deptName: "B.Tech, ECE" },
    { deptName: "B.Tech, EEE" },
    { deptName: "B.Tech, EIE" },
    { deptName: "B.Tech, ME" },
    { deptName: "M.Tech, CSE" },
    { deptName: "M.Tech, EEE" },
    { deptName: "M.Sc, SH" },
  ];

  const [gender, setGender] = useState("Gender");
  const [dept, setDept] = useState("Department");
  const [genderFocus, setGenderFocus] = useState(true);
  const [deptFocus, setDeptFocus] = useState(true);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);

    // Format the date as needed (e.g., YYYY-MM-DD)
    const formattedDate = currentDate.toISOString().split("T")[0];
    handleInputChange("student", "dateOfBirth", formattedDate);
  };
  console.log(formData);

  return (
    <>
      {/* Username */}
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
          value={formData.username}
          onChangeText={(text) =>
            handleInputChange("student", "username", text)
          }
        />
      </View>

      {/* Registration No */}
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
          value={formData.registrationNo}
          onChangeText={(text) =>
            handleInputChange("student", "registrationNo", text)
          }
        />
      </View>

      {/* Mobile No */}
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
          value={formData.mobileNo}
          onChangeText={(text) =>
            handleInputChange("student", "mobileNo", text)
          }
        />
      </View>

      {/* Email */}
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
          value={formData.email}
          onChangeText={(text) => handleInputChange("student", "email", text)}
        />
      </View>

      {/* Password */}
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
            handleInputChange("student", "password", text)
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

      {/* Confirm Password */}
      <View style={styles.inputWrapper}>
        <Icon
          name="lock-outline"
          size={20}
          color="#999"
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#999"
          secureTextEntry={!isConPassVisible}
          value={formData.confirmPassword}
          onChangeText={(text) =>
            handleInputChange("student", "confirmPassword", text)
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

      {/* Date of Birth */}
      <TouchableWithoutFeedback onPress={() => setShowDatePicker(true)}>
        <View style={styles.inputWrapper}>
          <FontAwesome
            name="calendar"
            size={20}
            color="#999"
            style={styles.inputIcon}
          />

          <TextInput
            style={styles.input}
            placeholder="Date of Birth"
            placeholderTextColor="#999"
            value={formData.dateOfBirth}
            editable={false}
          />
        </View>
      </TouchableWithoutFeedback>
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}

      {/* Gender */}
      <View style={styles.inputWrapper}>
        <MaterialCommunityIcons
          name="gender-male-female"
          size={20}
          color="#999"
          style={styles.inputIcon}
        />
        <Dropdown
          style={styles.input}
          data={data}
          placeholderStyle={genderFocus && { color: "#999" }}
          maxHeight={300}
          labelField="gender"
          valueField="value"
          placeholder={gender}
          value={formData.gender}
          autoScroll={false}
          onFocus={() => setGenderFocus(true)}
          onBlur={() => setGenderFocus(false)}
          onChange={(item) => {
            handleInputChange("student", "gender", item.value);
            setGender(item.gender);
          }}
        />
      </View>

      {/* Blood Type */}
      <View style={styles.inputWrapper}>
        <MaterialIcons
          name="bloodtype"
          size={20}
          color="#999"
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Blood Type"
          placeholderTextColor="#999"
          value={formData.bloodType}
          onChangeText={(text) =>
            handleInputChange("student", "bloodType", text)
          }
        />
      </View>

      {/* Medical Conditions */}
      <View style={styles.inputWrapper}>
        <FontAwesome5
          name="briefcase-medical"
          size={20}
          color="#999"
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Medical Conditions"
          placeholderTextColor="#999"
          value={formData.medicalConditions}
          onChangeText={(text) =>
            handleInputChange("student", "medicalConditions", text)
          }
        />
      </View>

      {/* Ethnicity */}
      <View style={styles.inputWrapper}>
        <FontAwesome6
          name="people-group"
          size={20}
          color="#999"
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Ethnicity"
          placeholderTextColor="#999"
          value={formData.ethnicity}
          onChangeText={(text) =>
            handleInputChange("student", "ethnicity", text)
          }
        />
      </View>

      {/* Address */}
      <View style={styles.inputWrapper}>
        <MaterialCommunityIcons
          name="home-outline"
          size={20}
          color="#999"
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Address"
          placeholderTextColor="#999"
          multiline
          value={formData.address}
          onChangeText={(text) => handleInputChange("student", "address", text)}
        />
      </View>

      {/* Guardian's Mobile No */}
      <View style={styles.inputWrapper}>
        <Icon
          name="cellphone"
          size={20}
          color="#999"
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Guardian's Mobile No"
          placeholderTextColor="#999"
          value={formData.guardianMobileNumber}
          onChangeText={(text) =>
            handleInputChange("student", "guardianMobileNumber", text)
          }
        />
      </View>

      {/* Department Name */}
      <View style={styles.inputWrapper}>
        <Entypo
          name="flow-tree"
          size={20}
          color="#999"
          style={styles.inputIcon}
        />
        <Dropdown
          style={styles.input}
          data={department}
          placeholderStyle={deptFocus && { color: "#999" }}
          maxHeight={300}
          labelField="deptName"
          valueField="deptName"
          placeholder={dept}
          value={formData.deptName}
          autoScroll={false}
          onFocus={() => setDeptFocus(true)}
          onBlur={() => setDeptFocus(false)}
          onChange={(item) => {
            handleInputChange("student", "deptName", item.value);
            setDept(item.deptName);
          }}
        />
      </View>

      {/* Batch */}
      <View style={styles.inputWrapper}>
        <MaterialCommunityIcons
          name="file-document-multiple-outline"
          size={20}
          color="#999"
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Batch"
          placeholderTextColor="#999"
          value={formData.batch}
          onChangeText={(text) => handleInputChange("student", "batch", text)}
        />
      </View>

      {/* Hostel Name */}
      <View style={styles.inputWrapper}>
        <FontAwesome5
          name="building"
          size={20}
          color="#999"
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Hostel Name"
          placeholderTextColor="#999"
          value={formData.hostelName}
          onChangeText={(text) =>
            handleInputChange("student", "hostelName", text)
          }
        />
      </View>
    </>
  );
};

export { Student };
