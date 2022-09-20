import { useLayoutEffect } from "react";
import { View } from "react-native";

const HomeScreen = ({navigation}) => {

    return(
        <View style={{backgroundColor: '#dab304', flex:1}}/>
    );
}
const MessagesScreen = () => {
    return (
        <View style={{backgroundColor: '#5bd35f', flex:1}}/>
    );
}
const SettingsScreen = () => {
    return (
        <View style={{backgroundColor: '#08cee8', flex:1}}/>
    );
} 

export {HomeScreen, MessagesScreen, SettingsScreen};