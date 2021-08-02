/* eslint-disable @typescript-eslint/no-empty-function */
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Button, View, Text, TouchableOpacity, Image,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useAppDispatch } from '../redux';
import { loginAsync } from '../redux/slices/user.slice';
import LoginPageStyles from '../styles/LoginPageStyles';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const revlogo = require('../../assets/images/rev-logo.png');

const LoginPage: React.FC<unknown> = (): JSX.Element => {
  const navigation = useNavigation();
  const [username, setUserName] = useState<string>('');
  const [password, setPassWord] = useState<string>('');
  const dispatch = useAppDispatch();
  const handleLogin = async ():Promise<void> => {
    const result = await dispatch(loginAsync({ username, password }));
    if (result) {
      // navigate to next page
    } else {
      // eslint-disable-next-line no-alert
      alert('Login failed');
    }
  };
  const Press = (): void => navigation.navigate(
    'HomeDrawer', { screens: 'QualityAudit' },
  );
  return (
    <>
      <View style={LoginPageStyles.imageContainer}>
        <Image style = {LoginPageStyles.image}
          source={revlogo}
        />
      </View>
      <View style={LoginPageStyles.container}>
        <Text testID="username-input-label">Username: </Text>
        <TextInput style={LoginPageStyles.inputField} placeholder='username' testID='username-input' onChangeText={(text):void => setUserName(text)}></TextInput>
        <Text testID="password-input-label">Password: </Text>
        <TextInput style={LoginPageStyles.inputField} placeholder='password' testID='password-input' onChangeText={(text):void => setPassWord(text)}></TextInput>
        <TouchableOpacity style={LoginPageStyles.button} testID='login-button' onPress={handleLogin}>
          <Text style={ LoginPageStyles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Button title='button' onPress={Press}/>
      </View>
    </>
  );
};

export default LoginPage;