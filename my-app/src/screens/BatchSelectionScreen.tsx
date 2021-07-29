import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import HorizontalSelector from '../components/HorizontalSelector/HorizontalSelector';
import { SearchBar } from '../components/SearchBar';
import { getBatchYears } from '../remote/CaliberBatchAPI';
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
  const [years, setYears] = useState<string[]>([]);
  const [selectedYear, setSelectedYear] = useState<string>();

  useEffect(() => {
    // Retrieves a list of years which contain batches and sets the component state
    const retrieveBatchYears = async (): Promise<void> => {
      setYears(await getBatchYears());
    };
    retrieveBatchYears();
  }, []);

  // useEffect(() => {

  // }, [selectedYear]);

  console.log('Batch Selection');
  return (
    <>
      <Text>this is the Batch selection screen</Text>
      <Button title='Week Notes' onPress={(): void => navigation.navigate('NoteNavigation', { text: 'Hey' })}/>
<<<<<<< HEAD
      <View style={ { flex: 1 } }>
        <HorizontalSelector data={years} onPress={setSelectedYear} />
      </View>

      <View style={ { flex: 8 } }>
        {/* {
          selectedYear ? (
            <BatchList year={selectedYear} />
          ) : (
            <Text>Select a year</Text>
          )
        } */}
=======
      <View style = {styles1.container}>
        <View style = {styles1.break}/>
        <SearchBar batchData={DATA} />
>>>>>>> 2ac53f4e2b3ff53b20403be373c03ea8f7dd30fd
      </View>
    </>
  );
};

export default BatchSelectionScreen;
