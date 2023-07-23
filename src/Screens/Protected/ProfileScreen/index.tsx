import {View, Text, Button} from 'react-native';
import React, {useContext} from 'react';
import {AuthContext} from '../../../context/AuthContext';

const ProfileScreen = () => {
  const {logOut, user} = useContext(AuthContext);

  return (
    <View>
      <Text>{JSON.stringify(user, null, 10)}</Text>
      <Button title="Salir" onPress={logOut} />
    </View>
  );
};

export default React.memo(ProfileScreen);
