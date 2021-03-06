import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Button, View, Text, TouchableOpacity, Image,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useToast } from 'react-native-styled-toast';
import { useAppDispatch } from '../redux';
import { loginAsync } from '../redux/slices/user.slice';
import LoginPageStyles from '../styles/LoginPageStyles';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const revlogo = require('../../assets/images/rev-logo.png');

const LoginPage: React.FC<unknown> = (): JSX.Element => {
  const { toast } = useToast();
  const [username, setUserName] = useState<string>('');
  const [password, setPassWord] = useState<string>('');
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const handleLogin = async ():Promise<void> => {
    const result = await dispatch(loginAsync({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      navigation.navigate('HomeDrawer', { screens: 'QualityAudit' });
    } else {
      toast({ message: 'Login Credentials invalid', intent: 'ERROR' });
    }
  };

  return (
    <>
      <View style={LoginPageStyles.container}>
        <View style={LoginPageStyles.imageContainer}>
          <Image style = {LoginPageStyles.image}
            source={revlogo}
          />
        </View>
        <Text style={LoginPageStyles.label} testID="username-input-label">Username: </Text>
        <TextInput
          style={LoginPageStyles.inputField} placeholder='username' testID='username-input' onChangeText={(text):void => setUserName(text)}></TextInput>
        <Text style={LoginPageStyles.label} testID="password-input-label">Password: </Text>
        <TextInput style={LoginPageStyles.inputField} placeholder='password' testID='password-input' secureTextEntry={true} onChangeText={(text):void => setPassWord(text)}></TextInput>
        <TouchableOpacity style={LoginPageStyles.button} testID='login-button' onPress={handleLogin}>
          <Text style={ LoginPageStyles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default LoginPage;
