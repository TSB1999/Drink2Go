import React, { Component, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
  Button,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import axios from "axios";
import qs from "qs";
import * as WebBrowser from "expo-web-browser";
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";
import spotifyAPI from "../components/SpotifyAPI";
import base64 from "react-native-base64";
import { Buffer } from "buffer";
import UserStore from "../stores/UserStore";
import { observer } from "mobx-react";
import { acc } from "react-native-reanimated";

const SignInScreen = ({ navigation }) => {

  const [authorizationCode, setAuthorizationCode] = useState("");

  const [data, setData] = React.useState({
    email: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const signIn = () => {
    const userData = {
      email: data.email,
      password: data.password,
    };

    axios
      .post(
        "https://europe-west1-projectmelo.cloudfunctions.net/api/login",
        userData
      )
      .then((res) => {
        setAuthorizationCode(res.data.token);
        UserStore.authCode = res.data.token;
        console.log(res.data.token)
        UserStore.isLoggedIn = true;
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const textInputChange = (val) => {
    if (val.length != 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    (
      <View style={styles.container}>
        <StatusBar backgroundColor="#009387" barStyle="light-content" />
        <View style={styles.header}>

        </View>
        <Animatable.View style={styles.footer} animation="fadeInUpBig">
          <View
            style={{
              marginBottom: 5,
              backgroundColor: "whitesmoke",
              borderRadius: "15px",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontStyle: "normal",
                fontSize: 15,
                color: "#21295c",
              }}
            ></Text>
          </View>

          <View
            style={{
              marginBottom: 5,
              backgroundColor: "whitesmoke",
              borderRadius: 15,
              alignItems: "center",
              marginTop: 35,
            }}
          >
            <Text
              style={{
                fontStyle: "normal",
                fontSize: 15,
                color: "#21295c",
              }}
            ></Text>
          </View>
          <Text style={[styles.text_footer]}>e-mail</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Email"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => textInputChange(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>

          <Text style={[styles.text_footer, { marginTop: 35 }]}>password</Text>
          <View style={styles.action}>
            <FontAwesome name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Password"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                  <Feather name="eye" color="grey" size={20} />
                )}
            </TouchableOpacity>
          </View>

          <View style={styles.button}>
            <TouchableOpacity style={styles.signIn} onPress={signIn}>
              <LinearGradient
                colors={["#007bff", "#21295c"]}
                style={styles.signIn}
              >
                <Text style={[styles.textSign, { color: "#fff" }]}>
                  Sign In
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("SignUpScreen")}
              style={[
                styles.signIn,
                { borderColor: "#007bff", borderWidth: 1, marginTop: 15 },
              ]}
            >
              <Text style={[styles.textSign, { color: "#007bff" }]}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>

          {/* <Text style={(styles.text_footer, { marginTop: 35 })}>Password</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Email"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={() => textInputChange(val)}
          />
          <Feather name="check-circle" color="green" size={20} />
        </View>

        <View style={styles.action}>
          <FontAwesome name="user-o" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Email"
            style={styles.textInput}
            autoCapitalize="none"
          />
          <Feather name="check-circle" color="green" size={20} />
        </View> */}
        </Animatable.View>
      </View>
    )
  );
};

export default observer(SignInScreen);

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#007bff",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 25,
    paddingTop: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  logo: {
    width: "100%",
    height: "100%",
    // backgroundColor: "whitesmoke",
    borderRadius: 20,
  },
});
