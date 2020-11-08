import React, { Component } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
    StatusBar,
} from 'react-native';

const Profile = ({ navigation }) => {
    return (
        <View style={styles.title}>
            <Text>Profile</Text>
            <Button
                title="Check out Updates"
                onPress={() => navigation.navigate("Profile")}
            />
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    title: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
});