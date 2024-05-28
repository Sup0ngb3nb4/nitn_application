import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { styles } from "./styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const handleSaveChanges = () => {
  Alert.alert(
    "Confirm",
    "Are you sure you want to save these changes?",
    [
      {
        text: "No",
        onPress: () => console.log("Changes not saved"),
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => console.log("Changes saved"),
      },
    ],
    { cancelable: false }
  );
};

export default function StudentProfile() {
  const [name, setName] = useState("");
  const [regNo, setRegNO] = useState("");
  const [hostel, setHostel] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Registration No</Text>
        <TextInput style={styles.input} value={regNo} onChangeText={setRegNO} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Hostel</Text>
        <View style={styles.box}>
          <Picker
            selectedValue={hostel}
            onValueChange={(itemValue) => setHostel(itemValue)}
          >
            <Picker.Item label="Japfu" value="Japfu" />
            <Picker.Item label="Shilloi A" value="Shilloi A" />
            <Picker.Item label="Shilloi B" value="Shilloi B" />
            <Picker.Item label="Shilloi C" value="Shilloi C" />
            <Picker.Item label="Tiyi" value="Tiyi" />
          </Picker>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Mobile Number</Text>
        <TextInput
          style={styles.input}
          value={mobileNo}
          onChangeText={setMobileNo}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
}
