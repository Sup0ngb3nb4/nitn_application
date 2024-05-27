import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: width * 0.1,
    paddingVertical: height * 0.05,
  },
  headerImg: {
    width: width * 0.5,
    height: width * 0.5,
    alignSelf: "center",
    marginBottom: height * 0.036,
  },
  header: {
    alignItems: "flex-start",
    marginBottom: height * 0.02,
  },
  headerText: {
    fontSize: width * 0.08,
    fontWeight: "bold",
    color: "#333",
  },
  subHeaderText: {
    fontSize: width * 0.04,
    color: "#999",
  },
  inputContainer: {
    marginBottom: height * 0.02,
  },
  loginButton: {
    backgroundColor: "#6a0dad",
    paddingVertical: height * 0.02,
    marginHorizontal: width * 0.02,
    borderRadius: width * 0.05,
    alignItems: "center",
    marginBottom: height * 0.02,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: width * 0.05,
    fontWeight: "bold",
  },
  forgotPasswordText: {
    textAlign: "center",
    color: "#6a0dad",
    marginBottom: height * 0.02,
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  signupText: {
    color: "#999",
    fontSize: width * 0.04,
  },
  signupLink: {
    color: "#6a0dad",
    marginLeft: width * 0.02,
    fontSize: width * 0.04,
  },
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

  /* TabButton */

  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: height * 0.03,
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: height * 0.015,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  activeTabButton: {
    borderBottomColor: "#6a0dad",
  },
  tabButtonText: {
    fontSize: width * 0.04,
    color: "#999",
  },
  activeTabButtonText: {
    color: "#6a0dad",
  },
  tabButtonImage: {
    width: width * 0.06,
    height: width * 0.06,
    marginBottom: height * 0.01,
  },
});
