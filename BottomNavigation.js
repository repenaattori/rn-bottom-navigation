
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {AntDesign} from '@expo/vector-icons';
import {HomeScreen, MessagesScreen, SettingsScreen} from './Screens'

const HOME = 'Home';
const MESSAGES = 'Messages';
const SETTINGS = 'Settings';


export default function BottomNavigation() {

    return (
    <NavigationContainer>
    </NavigationContainer>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
