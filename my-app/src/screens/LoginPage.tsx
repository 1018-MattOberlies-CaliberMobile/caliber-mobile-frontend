import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

type Props = {

};

const LoginPage: React.FC<Props> = (props): JSX.Element => {
  const navigation = useNavigation();
  const [username, setUserName] = useState<string>('');
  const [password, setPassWord] = useState<string>('');
  const handleLogin = ():void => {};
  const Press = (): void => navigation.navigate(
    'HomeDrawer', { screens: 'QualityAudit' },
  );
  return (
    <View>
      <Text>Username: </Text>
      <TextInput testID='username-input' onChangeText={(text):void => setUserName(text)}></TextInput>
      <Text>Password: </Text>
      <TextInput testID='password-input' onChangeText={(text):void => setPassWord(text)}></TextInput>
      <Button title='login' testID='login-button' onPress={handleLogin}/>
    </View>
  );
};

export default LoginPage;
