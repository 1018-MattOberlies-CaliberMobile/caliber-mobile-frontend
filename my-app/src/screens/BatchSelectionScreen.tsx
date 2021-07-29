import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native';
import HorizontalSelector from '../components/HorizontalSelector/HorizontalSelector';
import { getBatchYears } from '../remote/CaliberBatchAPI';

type Props = {

}

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
      </View>
    </>
  );
};

export default BatchSelectionScreen;
