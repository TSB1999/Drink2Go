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

const UpdatesScreen = ({ navigation }) => {
    return (
        <View style={styles.title}>
            <Text>Updates Screen</Text>
            <Button
                title="Go Home"
                onPress={() => navigation.navigate("Home")}
            />
        </View>
    )
}

export default UpdatesScreen

const styles = StyleSheet.create({
    title: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
});