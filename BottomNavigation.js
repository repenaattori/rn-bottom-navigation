
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import {AntDesign} from '@expo/vector-icons';
import {HomeScreen, MessagesScreen, SettingsScreen} from './Screens'


const Tab = createBottomTabNavigator();

const HOME = 'Home';
const MESSAGES = 'Messages';
const SETTINGS = 'Settings';
const icons ={
  [HOME]: 'home',
  [MESSAGES]: 'message1',
  [SETTINGS]: 'setting'
}


export default function BottomNavigation() {

  const screenOpt = ({route}) =>{
    return{
      tabBarIcon: ()=> <AntDesign name={icons[route.name]} size={30} color="red" />,
      tabBarStyle: {height:80, backgroundColor: 'blue', paddingBottom:5},
      tabBarLabelStyle: {fontsize: 16}
    }
  }

  return (
  <NavigationContainer>
    <Tab.Navigator screenOptions={screenOpt}>
      <Tab.Screen name={HOME} component={HomeScreen}/>
      <Tab.Screen name={MESSAGES} component={MessagesScreen}/>
      <Tab.Screen name={SETTINGS} component={HomeScreen}/>
    </Tab.Navigator>
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
