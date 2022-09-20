import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import BottomNavigation from './BottomNavigation';
import DrawerNavigation from './DrawerNavigation';

export default function App() { 
  return (
    <DrawerNavigation/>
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
