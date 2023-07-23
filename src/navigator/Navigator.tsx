import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from '../Screens/Auth/WelcomeScreen';
import SignInScreen from '../Screens/Auth/SignInScreen';
import SignUpScreen from '../Screens/Auth/SignUpScreen';
import {NavigationContainer} from '@react-navigation/native';
import RecoverPassScreen from '../Screens/Auth/RecoverPassScreen';
import {AuthContext} from '../context/AuthContext';
import ProtectedScrenn from '../Screens/Protected/ProtectedScrenn';
import Loading from '../components/Loading';

const Stack = createStackNavigator();

const Navigator = () => {
  const {status} = useContext(AuthContext);

  if (status === 'checking') return <Loading />;

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="WelcomeScreen"
        screenOptions={{headerShown: false}}>
        {status === 'authenticated' ? (
          <>
            <Stack.Screen name="ProtectedScrenn" component={ProtectedScrenn} />
          </>
        ) : (
          <>
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
            <Stack.Screen name="SignInScreen" component={SignInScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            <Stack.Screen
              name="RecoverPassScreen"
              component={RecoverPassScreen}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
