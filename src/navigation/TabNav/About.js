import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../../assets/style/style';
import ButtonWithLoader from '../../component/ButtonWithLoader';

const About = ({navigation}) => {
  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <ButtonWithLoader text="Logout" onPress={navigateToLogin} />
    </View>
  );
};

export default About;
