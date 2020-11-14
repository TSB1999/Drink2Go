import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  left: {
    flexDirection: "row",
  },
  right: {
    marginRight: 15,
  },
  name: {
    alignSelf: "center",
    fontWeight: "bold",
    color: "#1150A9",
    fontFamily: "Arial",
  },
});

export default styles;
