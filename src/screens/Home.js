import {Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import styles from '../assets/style/style';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Chating from '../navigation/TabNav/Chating';
import About from '../navigation/TabNav/About';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator initialRouteName="About">
      <Tab.Screen
        name="Chating"
        component={Chating}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../assets/images/chat.png')
                  : require('../assets/images/chat.png')
              }
              style={{width: 24, height: 24}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          headershown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../assets/images/info.jpg')
                  : require('../assets/images/info.jpg')
              }
              style={{width: 24, height: 24}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;
