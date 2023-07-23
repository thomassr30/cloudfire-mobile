import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import styles from './style';
import {StackScreenProps} from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}

const WelcomeScreen = ({navigation}: Props) => {
  return (
    <ImageBackground
      style={styles.img}
      source={require('../../../../assets/img/welcome.png')}>
      <View style={styles.details}>
        <View style={styles.containerImg}>
          <Image
            source={require('../../../../assets/img/cb2sa-white.png')}
            style={{width: 250, height: 250}}
          />
        </View>
        <Text style={styles.textTitle}>Segunda Compañía</Text>
        <Text style={styles.textSubtitle}>Zapadores Puerto San Antonio</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SignInScreen')}
          activeOpacity={0.9}>
          <Text style={styles.textBtn}>Ingresar</Text>
        </TouchableOpacity>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 12,
            paddingTop: 30,
          }}>
          Developed by CloudFire
        </Text>
      </View>
    </ImageBackground>
  );
};

export default React.memo(WelcomeScreen);
