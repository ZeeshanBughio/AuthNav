import AsyncStorage from '@react-native-async-storage/async-storage';
import * as types from '../const/const';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import {base_URL} from '../../config/Config';
// export const Signup =async(data)=>(dispatch)=>{
// console.log("data in action fi;le",data)
// }

export const Signup = data => async dispatch => {
  console.log('data in action file', data);
  dispatch({
    type: types.SIGNUP,
    payload: data,
  });
};

export const saveUser = user => {
  return {
    type: types.SAVE_USER,
    payload: user,
  };
};

export const APICALL = () => async dispatch => {
  try {
    const response = await axios.get(`${base_URL}comments?postId=1`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
