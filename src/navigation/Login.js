import {Alert, Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '../assets/style/style';
import Textinputwithlabels from '../component/Textinputwithlabels';
import ButtonWithLoader from '../component/ButtonWithLoader';
import {useDispatch, useSelector} from 'react-redux';
import style from '../assets/style/style';
import {APICALL} from '../redux/actions/action';
import dataJson from '../json/data.json';

const Login = ({navigation}) => {
  // const dispatch = useDispatch();
  // const [emailapiwali, setemailapiwali] = useState([]);

  // const onLogin = () => {
  //   if (email == '' || password == '') {
  //     Alert.alert('Please Fill The Form');
  //     return;
  //   }
  //   navigation.navigate('SignUp');
  // };

  // const getAPIdata = async () => {
  //   // const data = await dispatch(APICALL());
  //   const emails = dataJson.data.map(item => item.email);
  //   console.log(dataJson);
  //   setemailapiwali(emails);
  // };

  // useEffect(() => {
  //   getAPIdata();
  // }, []);

  const [email, setemail] = useState();
  const [pass, setpass] = useState();

  const checkemail = () => {
    const foundEmail = dataJson.find(item => item.email === email);
    const foundPass = dataJson.find(item => item.password === pass);

    console.log(foundEmail, foundPass);
    if (foundEmail && foundPass) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Nikal');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageCenter}>
        <Image
          source={require('../assets/images/logo.png')}
          style={style.imageLogo}
          resizeMode="contain"
        />
      </View>
      <Textinputwithlabels
        label="Email"
        placheHolder="Enter Your Email"
        onChangeText={setemail}
        value={email}
      />

      <Textinputwithlabels
        label="Password"
        placheHolder="Enter Your Password"
        onChangeText={setpass}
        value={pass}
        secureTextEntry={true}
      />
      <ButtonWithLoader onPress={checkemail} text="Submit" />
    </View>
  );
};

export default Login;
