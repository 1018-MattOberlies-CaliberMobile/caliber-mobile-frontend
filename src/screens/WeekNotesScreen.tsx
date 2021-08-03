/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import HorizontalSelector from '../components/HorizontalSelector';
import ToggleSwitch from '../components/ToggleSwitch';
import Note from '../models/note';
import { getNoteByBatchIdAndWeek } from '../remote/CaliberNoteAPI';
import WeekNoteStyle from '../styles/WeekNotesStyle';

type Props = {
  batchId: string;
}

const FisherYatesShuffle = (inputArray: JSX.Element[]): JSX.Element[] => {
  const n = inputArray.length;

  // eslint-disable-next-line no-plusplus
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = inputArray[i];
    inputArray[i] = inputArray[j];
    inputArray[j] = tmp;
  }
  return inputArray;
};

export const createWeekArray = (start: string, end: string): string[] => {
  const weekArray: string[] = [];
  const MILLISECONDS_IN_WEEK = 7 * 24 * 60 * 60 * 1000;
  const startDate = new Date(start);
  const endDate = new Date(end);
  let weekNum = 1;

  if (startDate.getDate() === endDate.getDate()) {
    return [];
  }

  // Edge case for when start and end date are the same day of the week
  if (startDate.getDay() >= endDate.getDay()) {
    // Monday is represented by 1
    if (endDate.getDay() === 1) {
      endDate.setDate(endDate.getDate() + 1);
    } else {
      weekArray.push(`week${weekNum}`);
      weekNum += 1;
      startDate.setDate(startDate.getDate() + ((1 + 7 - startDate.getDay()) % 7));
    }
  }

  const timeLength = endDate.valueOf() - startDate.valueOf();
  let timeRemaining = timeLength;

  while (timeRemaining > 0) {
    weekArray.push(`week${weekNum}`);
    weekNum += 1;
    timeRemaining -= MILLISECONDS_IN_WEEK;
  }

  return weekArray;
};

const WeekNotesScreen: React.FC<Props> = ({ batchId }): JSX.Element => {
  const arrayString = createWeekArray('2021-7-5', '2021-7-30');
  const [assocNotes, setAssocNotes] = useState<Note[]>([]);
  const [weekNum, setWeekNum] = useState<number>(0);
  const [noteItems, setNoteItems] = useState<JSX.Element[]>([]);
  const [randomOrder, setRandomOrder] = useState<boolean>(false);

  useEffect(() => {
    (async (): Promise<void> => {
      const assoc = await getNoteByBatchIdAndWeek(batchId, weekNum + 1);
      setAssocNotes(assoc);
    })();
  }, [weekNum]);

  useEffect(() => {

    const items = assocNotes.map((note) => (

      <View key={note.noteId}>
        <Text>
          {note.noteContent}
        </Text>
        <Text>
          {note.technicalScore}
        </Text>
      </View>
    ));
    if (randomOrder) {
      FisherYatesShuffle(items);
    }

    setNoteItems(items);
  }, [assocNotes, randomOrder]);

  function handleGetNotesForWeek(week: string): void {
    setWeekNum(arrayString.indexOf(week));
  }

  return (
    <>
      <View style={WeekNoteStyle.container}>
        <HorizontalSelector data={arrayString}
          initialSelected={arrayString[0]}
          onPress={handleGetNotesForWeek}/>
        <ToggleSwitch value={randomOrder} setValue={setRandomOrder}/>
      </View>
      <View>
        { noteItems }
      </View>
    </>
  );
};

export default WeekNotesScreen;
