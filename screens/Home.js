import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  RefreshControl,
  Text,
  Button,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { Picker } from '@react-native-picker/picker';

import Post from "../components/Post";
import UserStore from "../stores/UserStore";
import { observer } from "mobx-react";
import axios from "axios";

// function wait(timeout) {
//   return new Promise((res) => {
//     setTimeout(res, timeout);
//   });
// }

function wait(timeout) {
  return new Promise((res) => {
    setTimeout(res, timeout);
  });
}

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: 'yellow' }}
    style={{ backgroundColor: '#21295c' }}
    inactiveColor={'#fff'}
    activeColor={'yellow'}
  />
);

const ThirdRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

const initialLayout = { width: Dimensions.get('window').width };

const HomeScreen = () => {


  const [selectedValue, setSelectedValue] = React.useState("Westwood");
  const [selectDrink, setSelectDrink] = React.useState({})
  const [refreshing, setRefreshing] = React.useState(false);
  const [items, setItems] = React.useState([])
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Drinks' },
    { key: 'second', title: 'Delivery' },
    { key: 'third', title: 'Pay' },
  ]);


  const FirstRoute = (data) => (
    <Animatable.View animation={'bounceIn'} style={[styles.scene, { backgroundColor: 'whitesmoke', alignItems: 'center' }]}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <FlatList
          numColumns={2}
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => {
              setSelectDrink(item)
              setIndex(1)
            }}>
              <View style={{ height: 0.45 * Dimensions.get('window').width, width: 0.45 * Dimensions.get('window').width, margin: 10, backgroundColor: '#fff', margin: 5, borderRadius: 10, alignItems: 'center' }}>
                <View style={{ top: 7, position: 'relative', flex: 1, backgroundColor: '#007bff', padding: 3, borderRadius: 4, marginBottom: 5, justifyContent: 'center' }}>
                  <Text style={{ color: '#fff', fontWeight: 'bold', textTransform: 'capitalize' }}>{item.name}</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'center', margin: 2 }}>
                  <Text style={{ color: '#007bff', fontWeight: 'bold' }}>{`£${item.price}`}</Text>
                </View>
                <View style={{ flex: 5, justifyContent: 'center', }}>
                  <Image source={{ uri: item.image }} style={{ height: 100, width: 100, borderRadius: 10 }} />
                </View>
                <View style={{ flex: 1, alignItems: 'center', marginTop: 3 }}>
                  <Text style={{ bottom: 0, position: 'absolute', color: '#007bff', textTransform: 'capitalize' }}>{`${item.quantity} left`}</Text>
                </View>
              </View>
            </TouchableOpacity>

          )}
          keyExtractor={item => item.name}
        />
      </ScrollView>
    </Animatable.View>
  );

  const SecondRoute = () => {
    const [data, setData] = React.useState({
      track: 0,
    });
    const handleQuantityChange = (val) => {
      setData({ ...data, track: val });
    };
    return (
      <Animatable.View animation={'bounceIn'} style={[styles.scene, { backgroundColor: '#fff', }]}>





        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          style={{ backgroundColor: "whitesmoke", borderRadius: 20, margin: 20 }}
        >
          <Picker.Item label="Bluebell" value="bluebell" />
          <Picker.Item label="Arthur Vick" value="arthur_vick" />
          <Picker.Item label="Sherbourne" value="sherbourne" />
          <Picker.Item label="Westwood" value="westwood" />
          <Picker.Item label="Lakeside" value="lakeside" />
        </Picker>

        <View style={[styles.action, { bottom: 0, position: 'relative' }]}>
          <View style={{ margin: 20, flexDirection: 'row' }}>
            <Text style={{ padding: 5, color: '#007bff', fontWeight: 'bold' }}>{`Total : £${selectDrink.price * data.track}`}</Text>
            <Text style={{ flex: 3, textAlign: 'right', padding: 5, fontWeight: 'bold', color: '#21295c' }}>#</Text>
            <TextInput
              placeholder={`${selectDrink.quantity} left`}
              autoCapitalize="none"
              style={{ marginLeft: 10, flex: 1, borderWidth: 2, padding: 5, borderRadius: 5, borderColor: '#007bff', color: '#21295c', fontWeight: 'bold', textAlign: 'center' }}
              onChangeText={(val) => handleQuantityChange(val)}
            />
          </View>

          <View style={{ margin: 5, flexDirection: 'row', alignSelf: 'center' }} >
            <Image
              source={{ uri: selectDrink.image }} //drink image
              style={{
                height: 100,
                width: 100,
                borderRadius: 10,
                borderWidth: 2,
                borderColor: "#fff",
              }}
            />
          </View>
        </View>

        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <TouchableOpacity
            // onPress={() => navigation.navigate("SignUpScreen")}
            style={[
              styles.signIn,
              { borderColor: "#007bff", borderWidth: 1, margin: 25 },
            ]}
          >
            <Text style={[styles.textSign, { color: "#007bff" }]}>
              {`PAY £${selectDrink.price * data.track}`}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setIndex(0)}
            style={[
              styles.signIn,
              { borderColor: "red", borderWidth: 1, margin: 25 },
            ]}
          >
            <Text style={[styles.textSign, { color: "red", }]}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>


      </Animatable.View>
    )
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => {
      setRefreshing(false);
      // new post
      axios.get(`https://europe-west1-drinks2go-d8456.cloudfunctions.net/api/getDrinks`)
        .then(res => {
          // console.log(res.data)
          setItems(res.data)
        })
        .catch(err => console.log(err))
    }, [refreshing]);
  });

  const renderScene = SceneMap({
    first: () => FirstRoute(items),
    second: SecondRoute,
    third: ThirdRoute
  });

  React.useEffect(() => {
    axios.get(`https://europe-west1-drinks2go-d8456.cloudfunctions.net/api/getDrinks`)
      .then(res => {
        // console.log(res.data)
        setItems(res.data)
      })
      .catch(err => console.log(err))
    console.log(items, 'u')


  }, []);

  // const [refreshing, setRefreshing] = React.useState(false);

  // const onRefresh = React.useCallback(() => {
  //   setRefreshing(true);

  //   wait(2000).then(() => {
  //     setRefreshing(false);
  //     // new post
  //     axios
  //       .get("https://europe-west1-projectmelo.cloudfunctions.net/api/posts")
  //       .then((res) => {
  //         console.log("yes");
  //         UserStore.allPosts = res.data;
  //       })
  //       .catch((err) => console.log(err));
  //   }, [refreshing]);
  // });

  // let recentPostsMarkup = UserStore.allPosts ? (
  //   UserStore.allPosts.map((post) => <Post key={post.postID} post={post} />)
  // ) : (
  //     <Text>Loading</Text>
  //   );
  return (
    <View style={{ backgroundColor: '#007bff', height: height }}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        swipeEnabled={false}
        renderTabBar={renderTabBar}
      />
    </View>
  )
};

export default observer(HomeScreen);

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  title: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
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
    flex: 1.9,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // paddingHorizontal: 20,
    // paddingVertical: 30,
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
    flexDirection: "column",
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
    width: "30%",
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
  scene: {
    flex: 1,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
});
