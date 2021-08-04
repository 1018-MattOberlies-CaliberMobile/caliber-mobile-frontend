/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { TechnicalScore } from '../@types';
import HorizontalSelector from '../components/HorizontalSelector';
import StatusSelector from '../components/StatusSelector';
import Batch from '../models/batch';
import { useAppSelector } from '../redux';
import { selectBatch, setBatch } from '../redux/slices/batch.slice';
import { createWeekArray } from './WeekNotesScreen';

type Props = {

}

const OverallNotesScreen: React.FC<Props> = (props): JSX.Element => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState<TechnicalScore>(0);
  const batch = useAppSelector(selectBatch);
  const [weeks, setWeeks] = useState<string[]>();
  const handleWeekSelector = (): void => {
    //
  };
  useEffect(() => {
    const newBatch: Batch = new Batch('123', 'mockBatch',
      [{ username: 'mockUser', role: 'Trainer' }],
      '2021-7-5', '2021-7-20',
      [{ associateId: '13', firstName: 'associate', lastName: 'lastname' }],
      [{
        noteId: '151',
        noteContent: 'noteContent',
        technicalScore: 1,
        weekNumber: 1,
        associate: { associateId: '13', firstName: 'associate', lastName: 'lastname' },
      }]);
    console.log('>> newBatch: ', newBatch);
    dispatch(setBatch(JSON.stringify(newBatch)));
  }, []);
  useEffect(() => {
    if (batch) {
      console.log('>> batch was updated');
      console.log('>> StartDate: ', batch.startDate, ' >> EndDate: ', batch.endDate);
      const temp = createWeekArray(batch.startDate, batch.endDate);
      console.log('>> weeks array: ');
      setWeeks(temp);
    }
  }, [batch]);
  useEffect(() => {
    (():void => {
      // eslint-disable-next-line no-unused-expressions
      weeks && console.log('>> weeks was updated: ', weeks);
    })();
  }, [weeks]);

  return (
    <View>
      {weeks && <HorizontalSelector data={weeks} onPress={handleWeekSelector}/>}
      {/* <HorizontalSelector data={['test', 'test1']} onPress={handleWeekSelector}/> */}
      <Text style={{ fontFamily: 'futura-medium' }}>Week 0</Text>
      <StatusSelector selected={selected} onSelect={setSelected}/>
      {!!selected && <Text>{selected}</Text>}
      <TextInput testID='overallNotesInput'></TextInput>
    </View>
  );
};

export default OverallNotesScreen;
