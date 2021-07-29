import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text } from 'react-native';

type Props = {

}

const BatchSelectionScreen: React.FC<Props> = (props): JSX.Element => {
  const navigation = useNavigation();
  console.log('Batch Selection');
  return (
    <>
      <Text>this is the Batch selection screen</Text>
      <Button title='Week Notes' onPress={(): void => navigation.navigate('NoteNavigation', { text: 'Hey' })}/>
    </>
  );
};

export default BatchSelectionScreen;
