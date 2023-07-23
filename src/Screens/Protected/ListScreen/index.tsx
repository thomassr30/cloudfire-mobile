import {View, Text, Image, Button} from 'react-native';
import React, {useRef} from 'react';
import ActionSheet, {ActionSheetRef} from 'react-native-actions-sheet';
import styles from './styles';

const ListScreen = () => {
  const actionSheetRef = useRef<ActionSheetRef>(null);
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../../../assets/img/cb2sa-green.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.containerForm}></View>
    </View>
  );
};

export default React.memo(ListScreen);
