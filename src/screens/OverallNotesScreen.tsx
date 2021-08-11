/* eslint-disable max-len */
/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import {
  Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import { TechnicalScore } from '../@types';
import HorizontalSelector from '../components/HorizontalSelector';
import StatusSelector from '../components/StatusSelector';
import Note from '../models/note';
import { useAppSelector } from '../redux';
import { selectBatch } from '../redux/slices/batch.slice';
import { selectWeek, setWeek } from '../redux/slices/week.slice';
import { CreateOverallNote } from '../remote/CaliberNoteAPI';
import { pageStyles } from '../styles/WeekNotes';
import createWeekArray from '../functions/CreateWeekArray';
import HorizontalSelectorStyle from '../styles/HorizontalSelector';

type Props = {

}

const OverallNotesScreen: React.FC<Props> = (props): JSX.Element => {
  const dispatch = useDispatch();
  const [overallNote, setOverallNote] = useState<Note>();
  const [technicalScore, setTechnicalScore] = useState<TechnicalScore>(0);
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
      noteId: overallNote?.noteId || '',
      batchId: batch?.batchId || '',
      technicalScore,
      noteContent,
      weekNumber: currentWeek ? parseInt(currentWeek.replace(/week/i, ''), 10) : 0,
    };
    console.log(newNote);
    CreateOverallNote(newNote);
  };
  useEffect(() => {
    if (batch) {
      // console.log('>> batch was updated');
      // console.log('>> StartDate: ', batch.startDate, ' >> EndDate: ', batch.endDate);
      const temp = createWeekArray(batch.startDate, batch.endDate).map((w) => ` Week ${w.replace(/week/i, '').trim()}`);
      // console.log('>> weeks array: ', temp);
      setWeeks(temp);
    }
  }, [batch]);

  useEffect(() => {
    if (batch && batch.notes && currentWeek) {
      console.log(currentWeek);
      const note = batch.notes.find((n) => !n.associate && n.weekNumber.toString() === currentWeek.replace(/week/i, '').trim());
      setOverallNote(note);
      if (note) {
        setTechnicalScore(note.technicalScore || 0);
        setNoteContent(note.noteContent);
      } else {
        setTechnicalScore(0);
        setNoteContent('');
      }
    }
  }, [currentWeek]);

  return (
    <View style={pageStyles.centeredView}>
      <View style={HorizontalSelectorStyle.selector}>
        {
          weeks
            ? <HorizontalSelector initialSelected={currentWeek || ''} data={weeks} onPress={handleWeekSelector}/>
            : <Text>No weeks were found</Text>
        }
      </View>

      <Text style={pageStyles.header} >Overall Technical Status</Text>
      <StatusSelector buttonSize={75} selected={technicalScore} onSelect={setTechnicalScore}/>
      <View style={pageStyles.textInputView}>
        <TextInput
          style={pageStyles.textInput}
          testID='overallNotesInput'
          onChangeText={setNoteContent}
          value={noteContent}
          multiline={true}
        />
      </View>

      <View style={pageStyles.buttonRight}>
        <TouchableOpacity style={pageStyles.button} testID='SaveNote' onPress={handleSave}>
          <FontAwesome name="save" size={24} color={'white'} />
          <Text style={pageStyles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OverallNotesScreen;
