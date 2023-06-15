import {Alert, Text, View} from 'react-native';
import React, {useState} from 'react';
import styles from '../assets/style/style';
import Textinputwithlabels from '../component/Textinputwithlabels';
import ButtonWithLoader from '../component/ButtonWithLoader';
import {useSelector, useDispatch} from 'react-redux';

const Login = ({navigation}) => {
  const dispatch = useDispatch();

  const [credentials, setcredentials] = useState({
    email: '',
    password: '',
    role: '',
  });

  const {email, password, role} = credentials;

  const updatecredentials = data =>
    setcredentials(() => ({...credentials, ...data}));

  const onSignUp = () => {
    if (email == '' || password == '' || role == '') {
      Alert.alert('Please Fill The Form');
      return;
    }

    const user = {email, password, role};
    dispatch(saveUser(user));

    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Textinputwithlabels
        label="Email"
        placheHolder="Enter Your Email"
        onChangeText={email => updatecredentials({email})}
      />

      <Textinputwithlabels
        label="Role"
        placheHolder="Enter Your Role"
        onChangeText={role => updatecredentials({role})}
      />

      <Textinputwithlabels
        label="Password"
        placheHolder="Enter Your Password"
        onChangeText={password => updatecredentials({password})}
        secureTextEntry={true}
      />

      <ButtonWithLoader onPress={onSignUp} text="Submit" />
    </View>
  );
};

export default Login;
