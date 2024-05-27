import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: width * 0.05,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: width * 0.06,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: height * 0.02,
  },
  profileImage: {
    width: width * 0.25,
    height: width * 0.25,
    borderRadius: (width * 0.25) / 2,
    alignSelf: "center",
    marginBottom: height * 0.02,
  },
  inputContainer: {
    marginBottom: height * 0.015,
  },
  label: {
    fontSize: width * 0.035,
    color: "#333",
    marginBottom: height * 0.005,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: width * 0.03,
    fontSize: width * 0.04,
  },
  box: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  picker: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  saveButton: {
    backgroundColor: "#6a0dad",
    padding: width * 0.04,
    borderRadius: 5,
    alignItems: "center",
    marginTop: height * 0.03,
    marginHorizontal: width * 0.02,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: width * 0.045,
    fontWeight: "bold",
  },
});
