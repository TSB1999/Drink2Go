import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#0077f6",
    margin: 5,
    borderRadius: 10,
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
    color: "#CDEDF6",
  },
});

export default styles;
