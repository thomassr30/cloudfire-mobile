import {View, Text, Button, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {AuthContext} from '../../../context/AuthContext';

import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import {COLORS} from '../../../constant/colors';

const HomeScreen = () => {
  const {user} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <Text
            style={{color: COLORS.darkGrey, fontWeight: '300', fontSize: 18}}>
            Bienvenido
          </Text>
          <Text
            style={{color: COLORS.darkGrey, fontWeight: '600', fontSize: 28}}>
            {user?.nombre} {user?.apellPat}
          </Text>
        </View>
      </View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default React.memo(HomeScreen);
