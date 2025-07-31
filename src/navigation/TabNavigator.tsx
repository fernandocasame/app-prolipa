import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Import screens
import HomeScreen from '../screens/HomeScreen';
import LibrosScreen from '../screens/LibrosScreen';
import CuadernosScreen from '../screens/CuadernosScreen';
import TareasScreen from '../screens/TareasScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Libros') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'Cuadernos') {
            iconName = focused ? 'notebook' : 'notebook-outline';
          } else if (route.name === 'Tareas') {
            iconName = focused ? 'checkbox-marked' : 'checkbox-blank-outline';
          }

          // You can return any component that you like here!
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Libros" component={LibrosScreen} />
      <Tab.Screen name="Cuadernos" component={CuadernosScreen} />
      <Tab.Screen name="Tareas" component={TareasScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
