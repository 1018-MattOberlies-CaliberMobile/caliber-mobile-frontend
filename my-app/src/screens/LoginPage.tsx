import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button } from 'react-native';

type Props = {

};

const LoginPage: React.FC<Props> = (props): JSX.Element => {
  const navigation = useNavigation();
  const Press = (): void => navigation.navigate(
    'HomeDrawer', { screens: 'QualityAudit' },
  );
  return (
    <>
      <Button title='button' onPress={Press}/>
    </>
  );
};

export default LoginPage;
