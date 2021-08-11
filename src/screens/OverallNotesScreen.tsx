/* eslint-disable max-len */
/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import {
  Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import { useToast } from 'react-native-styled-toast';
import { TechnicalScore } from '../@types';
import HorizontalSelector from '../components/HorizontalSelector';
import StatusSelector from '../components/StatusSelector';
import Note from '../models/note';
import { useAppSelector } from '../redux';
import { selectBatch } from '../redux/slices/batch.slice';
import { selectWeek, setWeek } from '../redux/slices/week.slice';
import { CreateOverallNote, getNoteByBatchIdAndWeekOverall } from '../remote/CaliberNoteAPI';
import { pageStyles } from '../styles/WeekNotes';
import createWeekArray from '../functions/CreateWeekArray';
import HorizontalSelectorStyle from '../styles/HorizontalSelector';
import BackendClient from '../remote/CaliberBackendClient';
import { selectUser } from '../redux/slices/user.slice';

type Props = {

}

const OverallNotesScreen: React.FC<Props> = (props): JSX.Element => {
  const dispatch = useDispatch();
  const [overallNote, setOverallNote] = useState<Note >();
  const [technicalScore, setTechnicalScore] = useState<TechnicalScore>(0);
  const batch = useAppSelector(selectBatch);
  const currentWeek = useAppSelector(selectWeek);
  const [weeks, setWeeks] = useState<string[]>();
  const [noteContent, setNoteContent] = useState<string>('');

  const handleWeekSelector = (week: string): void => {
    dispatch(setWeek(week));
  };

  const { toast } = useToast();
  const user = useAppSelector(selectUser);

  const handleSave = async (): Promise<void> => {
    // console.log('>> saving info');
    // console.log('>>> week: ', currentWeek);
    // console.log('>>> technical score: ', technicalScore);
    // console.log('>>> note content: ', noteContent);
    const newNote: Note = {
      noteId: overallNote?.noteId || '',
      batchId: batch?.batchId || '',
      technicalScore: parseInt(technicalScore, 10),
      noteContent,
      weekNumber: currentWeek ? parseInt(currentWeek.replace(/week/i, ''), 10) : 0,
    } as Note;

    console.log(newNote);
    try {
      await CreateOverallNote(newNote);
      toast({ message: 'Saved note', intent: 'SUCCESS' });
    } catch (err) {
      toast({ message: 'Failed to save note', intent: 'ERROR' });
    }
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
    if (batch && currentWeek) {
      const weekNumber = parseInt(currentWeek.replace(/week/i, '').trim(), 10);
      console.log(batch.batchId, weekNumber);
      BackendClient.get(`/note/batch/${batch.batchId}/${weekNumber}/overall`)
        .then((res) => {
          console.log('Successfuly retreieved note by BatchId and Week', JSON.parse(res.data.body).note);
          const n = JSON.parse(res.data.body).note;
          setOverallNote(n);
        }).catch((error) => {
          console.log('Erorr retrieving notes for BatchId and Week', error);
        });
    }
  }, [currentWeek]);

  useEffect(() => {
    console.log('prev', technicalScore);
    if (overallNote) {
      setTechnicalScore(overallNote.technicalScore);
      setNoteContent(overallNote.noteContent);
      console.log('*new', technicalScore);
    } else {
      setTechnicalScore(0);
      setNoteContent('');
      console.log('new', technicalScore);
    }
  }, [overallNote]);

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
          editable={!(user?.role === 'Trainer')}
          style={pageStyles.textInput}
          testID='overallNotesInput'
          onChangeText={setNoteContent}
          value={noteContent}
          multiline={true}
        />
      </View>

      {
        !(user?.role === 'Trainer') && (
          <View style={pageStyles.buttonRight}>
            <TouchableOpacity style={pageStyles.button} testID='SaveNote' onPress={handleSave}>
              <FontAwesome name="save" size={24} color={'white'} />
              <Text style={pageStyles.buttonText}>Save</Text>
            </TouchableOpacity>
          </View>
        )
      }
    </View>
  );
};

export default OverallNotesScreen;
