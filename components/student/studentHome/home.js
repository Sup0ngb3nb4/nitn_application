import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import CustomCheckBox from "./customs/checkbox";
import * as Animatable from "react-native-animatable";
import { styles } from "./styles";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const MAX_CHARACTERS = 50;

const GridItem = ({ item, selected, toggleSelection }) => (
  <TouchableOpacity
    style={styles.gridItem}
    onPress={() => toggleSelection(item.name)}
  >
    <View style={styles.checkBoxWrapper}>
      <CustomCheckBox
        isChecked={selected}
        onPress={() => toggleSelection(item.name)}
      />
    </View>
    <Image source={item.image} style={styles.icon} />
    <Text style={styles.gridText}>{item.label}</Text>
  </TouchableOpacity>
);

export default function Home() {
  const items = [
    { name: "Door", label: "Door", image: require("../../../assets/door.png") },
    {
      name: "Electric Switch",
      label: "Electric Switch",
      image: require("../../../assets/electric switch.png"),
    },
    {
      name: "Geyser",
      label: "Geyser",
      image: require("../../../assets/geyser.png"),
    },
    {
      name: "Plumbing",
      label: "Plumbing",
      image: require("../../../assets/plumbing.png"),
    },
    {
      name: "Water Filter",
      label: "Water Filter",
      image: require("../../../assets/water filter.png"),
    },
    {
      name: "Water Tap",
      label: "Water Tap",
      image: require("../../../assets/water-tap.png"),
    },
    {
      name: "Window",
      label: "Window",
      image: require("../../../assets/window.png"),
    },
    {
      name: "Tubelight",
      label: "Tubelight",
      image: require("../../../assets/tubelight.png"),
    },
    {
      name: "Others",
      label: "Others",
      image: require("../../../assets/others.png"),
    },
  ];

  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [description, setDescription] = useState("");

  const toggleSelection = (itemName) => {
    setSelectedItem((prev) => (prev === itemName ? null : itemName));
  };

  const handleIssueComplain = () => {
    if (selectedItem) {
      setModalVisible(true);
    } else {
      alert("Please select an item first.");
    }
  };

  const handleSend = () => {
    console.log("Title:", selectedItem);
    console.log("Description:", description);
    setModalVisible(false);
    setDescription("");
  };

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInUp" useNativeDriver>
        <ScrollView contentContainerStyle={styles.grid}>
          {items.map((item) => (
            <GridItem
              key={item.name}
              item={item}
              selected={selectedItem === item.name}
              toggleSelection={toggleSelection}
            />
          ))}
        </ScrollView>
      </Animatable.View>

      <Animatable.View
        animation="pulse"
        iterationCount="infinite"
        useNativeDriver
        style={{
          position: "absolute",
          bottom: width * 0.1,
          right: width * 0.1,
        }}
      >
        <TouchableOpacity
          onPress={handleIssueComplain}
          style={styles.issueComplainButton}
        >
          <Text style={styles.issueComplainText}>Issue Complain</Text>
        </TouchableOpacity>
      </Animatable.View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.centeredView}>
            <TouchableWithoutFeedback>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>Issue Complain</Text>
              <TextInput
                style={styles.input}
                value={selectedItem}
                editable={false}
              />

              <Text style={styles.charCount}>
                Maximum Characters: {MAX_CHARACTERS - description.length}
              </Text>

              <TextInput
                style={styles.textArea}
                placeholder="Description"
                placeholderTextColor="#999"
                multiline
                numberOfLines={4}
                maxLength={MAX_CHARACTERS}
                value={description}
                onChangeText={setDescription}
              />

              <TouchableOpacity style={styles.button} onPress={handleSend}>
                <Text style={styles.buttonText}>Send</Text>
              </TouchableOpacity>
            </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}
