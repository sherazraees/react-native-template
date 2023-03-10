import {View, Image} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';

const Splash = props => {
  const {navigate} = props.navigation;

  useEffect(() => {
    setTimeout(() => {
      navigate('Login');
    }, 2300);
  });

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/logo.png')}></Image>
    </View>
  );
};

export default Splash;
