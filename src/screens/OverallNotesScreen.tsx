/* eslint-disable max-len */
/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import {
  Pressable, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import { TechnicalScore } from '../@types';
import HorizontalSelector from '../components/HorizontalSelector';
import StatusSelector from '../components/StatusSelector';
import Batch from '../models/batch';
import Note from '../models/note';
import { useAppSelector } from '../redux';
import { selectBatch, setBatch } from '../redux/slices/batch.slice';
import { selectWeek, setWeek } from '../redux/slices/week.slice';
import { CreateOverallNote } from '../remote/CaliberNoteAPI';
import LoginPageStyles from '../styles/LoginPageStyles';
import { pageStyles } from '../styles/WeekNotes';
import createWeekArray from '../functions/CreateWeekArray';
import HorizontalSelectorStyle from '../styles/HorizontalSelector';
import { theme } from '../styles/Theme';

type Props = {

}

const OverallNotesScreen: React.FC<Props> = (props): JSX.Element => {
  const dispatch = useDispatch();
  const [technicalScore, setSelected] = useState<TechnicalScore>(0);
  const batch = useAppSelector(selectBatch);
  const currentWeek = useAppSelector(selectWeek);
  const [weeks, setWeeks] = useState<string[]>();
  const [noteContent, setNoteContent] = useState<string>('');
  const handleWeekSelector = (week: string): void => {
    dispatch(setWeek(week));
  };
  const handleSave = (): void => {
    console.log('>> saving info');
    console.log('>>> week: ', currentWeek);
    console.log('>>> technical score: ', technicalScore);
    console.log('>>> note content: ', noteContent);
    const newNote: Note = {
      noteId: '0000',
      technicalScore,
      noteContent,
      weekNumber: currentWeek ? parseInt(currentWeek.replace('week', ''), 10) : 0,
    };
    CreateOverallNote(newNote);
  };
  useEffect(() => {
    const newBatch: Batch = new Batch('123', 'mockBatch',
      [{ username: 'mockUser', role: 'Trainer' }],
      '2021-7-5', '2021-9-20',
      [{ associateId: '13', firstName: 'associate', lastName: 'lastname' }],
      [{
        noteId: '151',
        noteContent: 'noteContent',
        technicalScore: 1,
        weekNumber: 1,
        associate: { associateId: '13', firstName: 'associate', lastName: 'lastname' },
      }]);
    // console.log('>> newBatch: ', newBatch);
    dispatch(setBatch(JSON.stringify(newBatch)));
  }, []);
  useEffect(() => {
    if (batch) {
      // console.log('>> batch was updated');
      // console.log('>> StartDate: ', batch.startDate, ' >> EndDate: ', batch.endDate);
      const temp = createWeekArray(batch.startDate, batch.endDate);
      // console.log('>> weeks array: ');
      setWeeks(temp);
    }
  }, [batch]);
  /* useEffect(() => {
    (():void => {
      // eslint-disable-next-line no-unused-expressions
      weeks && console.log('>> weeks was updated: ', weeks);
    })();
  }, [weeks]); */

  return (
    <View style={pageStyles.centeredView}>
      <View style={HorizontalSelectorStyle.selector}>
        {weeks ? <HorizontalSelector initialSelected={currentWeek || ''} data={weeks} onPress={handleWeekSelector}/> : <></>}
      </View>

      {/* <Text style={{ fontFamily: 'futura-medium' }}>currentWeek: {currentWeek}</Text> */}
      <Text style={pageStyles.header} >Overall Technical Status</Text>
      <StatusSelector buttonSize={75} selected={technicalScore} onSelect={setSelected}/>
      {!!technicalScore && <Text>{technicalScore}</Text>}
      <TextInput style={pageStyles.textInput} testID='overallNotesInput' onChangeText={setNoteContent} multiline={true}></TextInput>

      <View style={pageStyles.buttonRight}>
        <TouchableOpacity style={pageStyles.button} testID='SaveNote' onPress={handleSave}>
          <FontAwesome name="save" size={24} color={theme.colors.primary} />

          <Text style={ pageStyles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OverallNotesScreen;
