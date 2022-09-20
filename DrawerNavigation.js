import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import {AntDesign} from '@expo/vector-icons';
import {HomeScreen, MessagesScreen, SettingsScreen} from './Screens'

const HOME = 'Home';
const MESSAGES = 'Messages';
const SETTINGS = 'Settings';

export default function DrawerNavigation(){
    return (
        <NavigationContainer>
        </NavigationContainer>
    );
}

