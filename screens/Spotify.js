import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Button,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import * as Animatable from "react-native-animatable";
import img from "../images/9yporc9d7pv51.jpg";
import Slider from "@react-native-community/slider";

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#007bff" barStyle="light-content" />

      <LinearGradient colors={["#1DB954", "#BA9790"]} style={styles.header}>
        <View style={styles.header}>
          <View style={{ alignSelf: "center" }}>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.minorButton}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("SignInScreen")}
                >
                  <MaterialIcons name="explore" color="#1DB954" size={30} />
                </TouchableOpacity>
              </View>

              <View style={styles.minorButton}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("SignInScreen")}
                >
                  <MaterialIcons name="attach-file" color="#1DB954" size={30} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View>
            <Animatable.Image
              animation="bounceIn"
              // duration="1500"
              style={styles.logo}
              resizeMode="stretch"
              source={img}
            />
          </View>
        </View>
      </LinearGradient>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.title}>Paris Morton Music 3</Text>
        <Text style={styles.text}>Drake</Text>
        <View style={{ flexDirection: "row" }}>
          <Text>-:--</Text>
          <Slider
            style={{ width: "80%", height: 40 }}
            minimumValue={0}
            maximumValue={20}
            minimumTrackTintColor="#1DB954"
            maximumTrackTintColor="#000000"
          />
          <Text>-:--</Text>
        </View>
        <View style={styles.button}>
          <View style={styles.secondaryButton}>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignInScreen")}
            >
              <MaterialIcons name="shuffle" color="#1DB954" size={25} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")}>
            <LinearGradient
              colors={["#1DB954", "#BA9790"]}
              style={styles.signIn}
            >
              <MaterialIcons name="skip-previous" color="#fff" size={25} />
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")}>
            <LinearGradient
              colors={["#BA9790", "#1DB954"]}
              style={styles.signIn}
            >
              <MaterialIcons
                name="play-circle-outline"
                color="#fff"
                size={30}
                //pause-circle-outline
              />
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")}>
            <LinearGradient
              colors={["#1DB954", "#BA9790"]}
              style={styles.signIn}
            >
              <MaterialIcons name="skip-next" color="#fff" size={25} />
            </LinearGradient>
          </TouchableOpacity>

          <View style={styles.secondaryButton}>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignInScreen")}
            >
              <MaterialIcons name="replay" color="#1DB954" size={25} />
            </TouchableOpacity>
          </View>
        </View>
        <SafeAreaView style={styles.bottom}></SafeAreaView>
      </Animatable.View>
    </View>
  );
};

export default SettingsScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.35;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
    backgroundColor: "whitesmoke",
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "white",
  },
  title: {
    color: "#21295c",
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 10,
  },
  text: {
    color: "grey",
    marginTop: 5,
    fontSize: 20,
    alignSelf: "center",
  },
  button: {
    alignSelf: "center",
    marginTop: 5,
    flexDirection: "row",
  },
  signIn: {
    width: 50,
    height: 50,
    marginLeft: 5,
    marginRight: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    flexDirection: "row",
  },
  secondaryButton: {
    width: 40,
    height: 40,
    marginLeft: 5,
    marginRight: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "#1DB954",
  },
  minorButton: {
    width: 100,
    height: 50,
    marginLeft: 5,
    marginRight: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "#1DB954",
    backgroundColor: "white",
    margin: 10,
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
  },
  bottom: {
    position: "absolute",
    bottom: 10,
    alignSelf: "center",
  },
});
