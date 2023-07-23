import {View, Text} from 'react-native';
import React from 'react';
import Navigator from './src/navigator/Navigator';
import {AuthProvider} from './src/context/AuthContext';

const AppState = ({children}: {children: JSX.Element | JSX.Element[]}) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default function App() {
  return (
    <AppState>
      <Navigator />
    </AppState>
  );
}
