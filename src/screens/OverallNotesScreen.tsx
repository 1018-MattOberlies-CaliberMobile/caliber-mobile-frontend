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
import Batch from '../models/batch';
import Note from '../models/note';
import { useAppSelector } from '../redux';
import { selectBatch, setBatch } from '../redux/slices/batch.slice';
import { selectWeek, setWeek } from '../redux/slices/week.slice';
import { CreateOverallNote } from '../remote/CaliberNoteAPI';
import { pageStyles } from '../styles/WeekNotes';
import createWeekArray from '../functions/CreateWeekArray';
import HorizontalSelectorStyle from '../styles/HorizontalSelector';
import AutoSelector from '../components/AutoSelector';
import { theme } from '../styles/Theme';

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
    const newBatch: Batch = {
      batchId: 'd614bac5-681b-47a7-8e8f-98124d9be68c',
      batchTitle: 'Where the streets have no name',
      trainers: [
        {
          username: '64c4e6a7-7f92-4219-a4ec-f66c83e868e8',
          role: 'Admin',
        },
        {
          username: '9c3d552c-2d7d-4c78-b521-dc19fc25e397',
          role: 'Trainer',
        },
      ],
      startDate: '2021-7-29',
      endDate: '2021-9-29',
      associates: [
        {
          associateId: 'af32a3f9-e581-4d5a-ad5c-66f5a175bb3f',
          firstName: 'Dallin',
          lastName: 'Lemon',
        },
        {
          associateId: '9a9442a1-4839-423d-af00-a23672a44019',
          firstName: 'Donovan',
          lastName: 'Dixon',
        },
        {
          associateId: '75a8b566-d98c-4cc0-a072-6035d71b6635',
          firstName: 'Prem',
          lastName: 'Patel',
        },
        {
          associateId: '0f195449-5aba-482a-8789-5e3db4fc1166',
          firstName: 'Dustin',
          lastName: 'Díaz',
        },
      ],
      notes: [
        {
          noteId: 'fbd515b8-6ff3-49f7-8ce8-ba3b6a1fb8f8',
          batchId: 'd614bac5-681b-47a7-8e8f-98124d9be68c',
          noteContent: 'Need more review on SQL',
          technicalScore: 2,
          associate: {
            associateId: '0f195449-5aba-482a-8789-5e3db4fc1166',
            firstName: 'Dustin',
            lastName: 'Díaz',
          },
          weekNumber: 1,
        },
        {
          noteId: '8891c02f-ef52-4114-9c58-c29e3c8ebe29',
          batchId: 'd614bac5-681b-47a7-8e8f-98124d9be68c',
          noteContent: 'Needs more review on AWS Services',
          technicalScore: 2,
          associate: {
            associateId: '75a8b566-d98c-4cc0-a072-6035d71b6635',
            firstName: 'Prem',
            lastName: 'Patel',
          },
          weekNumber: 1,
        },
        {
          noteId: 'f3693e12-cbab-4e8d-b5e4-b2ad621993b3',
          batchId: 'd614bac5-681b-47a7-8e8f-98124d9be68c',
          noteContent: 'Needs more review on DynamoDB',
          technicalScore: 2,
          associate: {
            associateId: '9a9442a1-4839-423d-af00-a23672a44019',
            firstName: 'Donovan',
            lastName: 'Dixon',
          },
          weekNumber: 1,
        },
        {
          noteId: 'd517f907-91b8-42e9-b60c-dc11c726b283',
          batchId: 'd614bac5-681b-47a7-8e8f-98124d9be68c',
          noteContent: 'Needs more review on NoSQL',
          technicalScore: 2,
          associate: {
            associateId: 'af32a3f9-e581-4d5a-ad5c-66f5a175bb3f',
            firstName: 'Dallin',
            lastName: 'Lemon',
          },
          weekNumber: 1,
        },
        {
          noteId: 'b8210507-3ea8-4fef-a135-7ceaafbba95a',
          batchId: 'd614bac5-681b-47a7-8e8f-98124d9be68c',
          noteContent: 'All of them are terrible',
          technicalScore: 2,
          weekNumber: 1,
        },
      ],
    };
    // console.log('>> newBatch: ', newBatch);
    dispatch(setBatch(JSON.stringify(newBatch)));
  }, []);

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
    if (batch) {
      console.log(currentWeek);
      const note = batch.notes.find((n) => !n.associate && n.weekNumber.toString() === currentWeek.replace(/week/i, '').trim());
      setOverallNote(note);
      if (note) {
        setTechnicalScore(note.technicalScore || 0);
        setNoteContent(note.noteContent);
      } else {
        setTechnicalScore(AutoSelector(batch.notes));
        setNoteContent('');
      }
    }
  }, [currentWeek]);

  useEffect(() => {
    if (batch) {
      setTechnicalScore(AutoSelector(batch.notes));
    }
  }, []);

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
      <TextInput
        style={pageStyles.textInput}
        testID='overallNotesInput'
        onChangeText={setNoteContent}
        value={noteContent}
        multiline={true}
      />

      <View style={pageStyles.buttonRight}>
        <TouchableOpacity style={pageStyles.button} testID='SaveNote' onPress={handleSave}>
          <FontAwesome name="save" size={24} color={theme.colors.primary} />
          <Text style={pageStyles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OverallNotesScreen;
