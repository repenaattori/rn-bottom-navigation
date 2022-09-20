import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import {AntDesign} from '@expo/vector-icons';
import {HomeScreen, MessagesScreen, SettingsScreen} from './Screens'

const Drawer = createDrawerNavigator();

const HOME = 'Home';
const MESSAGES = 'Messages';
const SETTINGS = 'Settings';
const icons ={
    [HOME]: 'home',
    [MESSAGES]: 'message1',
    [SETTINGS]: 'setting'
  }

export default function DrawerNavigation(){
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen 
                name={HOME} 
                component={HomeScreen}
                options={{drawerIcon: ()=> <AntDesign name={icons[HOME]} size={30}/>}}
                
                />
                <Drawer.Screen name={MESSAGES} component={MessagesScreen}/>
                <Drawer.Screen name={SETTINGS} component={HomeScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

