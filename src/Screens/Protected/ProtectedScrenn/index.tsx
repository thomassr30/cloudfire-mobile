import {View, Text, Button} from 'react-native';
import React, {useContext} from 'react';
import {AuthContext} from '../../../context/AuthContext';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../HomeScreen';
import ProfileScreen from '../ProfileScreen';

import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../../constant/colors';
import ListScreen from '../ListScreen';
import MapScreen from '../MapScreen';

const Tab = createBottomTabNavigator();

const ProtectedScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.black,
        tabBarInactiveTintColor: COLORS.grey,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Inicio',
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Icon
                  name="home"
                  size={24}
                  color={focused ? COLORS.black : COLORS.grey}
                />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="ListScreen"
        component={ListScreen}
        options={{
          title: 'Lista',
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Icon
                  name="document"
                  size={24}
                  color={focused ? COLORS.black : COLORS.grey}
                />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          title: 'Mapa',
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Icon
                  name="map"
                  size={24}
                  color={focused ? COLORS.black : COLORS.grey}
                />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: 'Perfil',
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Icon
                  name="person"
                  size={24}
                  color={focused ? COLORS.black : COLORS.grey}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default React.memo(ProtectedScreen);
