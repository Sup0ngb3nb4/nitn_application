import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3EDF7",
    borderRadius: width * 0.05,
    overflow: "hidden",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: width * 0.05,
  },
  imageBackground: {
    resizeMode: "repeat",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gridItem: {
    width: width * 0.3,
    alignItems: "center",
    justifyContent: "center",
    padding: width * 0.03,
    borderRadius: width * 0.035,
    marginVertical: height * 0.015,
    shadowOpacity: 0.1,
    shadowRadius: width * 0.1,
    elevation: 5,
    paddingTop: height * 0.05,
    backgroundColor: "#fff",
  },
  icon: {
    width: width * 0.2,
    height: width * 0.2,
    marginBottom: height * 0.01,
  },
  gridText: {
    fontSize: width * 0.035,
    textAlign: "center",
  },
  issueComplainButton: {
    backgroundColor: "#6a0dad",
    padding: width * 0.05,
    borderRadius: width * 0.05,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: width * 0.1,
    elevation: 5,
  },
  issueComplainText: {
    color: "#fff",
    fontSize: width * 0.04,
    fontWeight: "bold",
  },
  checkBoxWrapper: {
    position: "absolute",
    top: width * 0.01,
    left: width * 0.01,
    zIndex: 1,
  },

  /*Modal */

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: height * 0.08,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    width: width * 0.9, 
    maxWidth: 400,
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.05,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    marginBottom: height * 0.02,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    height: height * 0.05,
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    padding: width * 0.025,
    marginBottom: height * 0.03,
  },
  textArea: {
    height: height * 0.1,
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    padding: width * 0.025,
    marginBottom: height * 0.03,
  },
  button: {
    backgroundColor: "#6a0dad",
    borderRadius: 10,
    paddingVertical: height * 0.025,
    paddingHorizontal: width * 0.03,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  charCount: {
    alignSelf: "flex-start",
    marginBottom: height * 0.01,
    color: "grey",}
});
