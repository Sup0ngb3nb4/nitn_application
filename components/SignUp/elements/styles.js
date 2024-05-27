import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: height * 0.02,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: width * 0.03,
    paddingHorizontal: width * 0.03,
    marginBottom: height * 0.03,
  },
  input: {
    flex: 1,
    paddingVertical: height * 0.012,
    paddingHorizontal: width * 0.03,
    color: "#333",
  },
  inputIcon: {
    marginRight: width * 0.03,
  },
  eyeIcon: {
    padding: width * 0.012,
  },
});
