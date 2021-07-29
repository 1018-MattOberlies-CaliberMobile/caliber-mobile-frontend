import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { SearchBar } from '../components/SearchBar';
import { styles1 } from '../styles/style1';

type Props = {

}

const BatchSelectionScreen: React.FC<Props> = (props): JSX.Element => {
  const navigation = useNavigation();
  console.log('Batch Selection');
  return (
    <>
      <Text>this is the Batch selection screen</Text>
      <Button title='Week Notes' onPress={(): void => navigation.navigate('NoteNavigation', { text: 'Hey' })}/>
      <View style = {styles1.container}>
        <View style = {styles1.break}/>
        <SearchBar/>
      </View>
    </>
  );
};

export default BatchSelectionScreen;
