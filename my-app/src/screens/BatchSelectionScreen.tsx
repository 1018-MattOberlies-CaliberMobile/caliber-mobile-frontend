import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { SearchBar } from '../components/SearchBar';
import Batch from '../models/batch';
import { styles1 } from '../styles/style1';

type Props = {

}

const DATA:Array<Batch> = [
  {
    batchID: '123123',
    batchTitle: '05132020 Cloud Native Matt',
    trainerID: 'Matt',
    startDate: '05/13/2020',
    associateList: [],
    notes: [],
  },
  {
    batchID: '12334',
    batchTitle: '05112020 Java Tyler',
    trainerID: 'Tyler',
    startDate: '05/11/2020',
    associateList: [],
    notes: [],
  },
];

const BatchSelectionScreen: React.FC<Props> = (props): JSX.Element => {
  const navigation = useNavigation();
  console.log('Batch Selection');
  return (
    <>
      <Text>this is the Batch selection screen</Text>
      <Button title='Week Notes' onPress={(): void => navigation.navigate('NoteNavigation', { text: 'Hey' })}/>
      <View style = {styles1.container}>
        <View style = {styles1.break}/>
        <SearchBar batchData={DATA} />
      </View>
    </>
  );
};

export default BatchSelectionScreen;
