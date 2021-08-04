import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import HorizontalSelector from '../components/HorizontalSelector';
import { View } from '../components/Themed';
import Note from '../models/note';
import { getNoteByBatchIdAndWeek } from '../remote/CaliberNoteAPI';

type Props = {
  batchId: string;
}

export const createWeekArray = (start: string, end: string): string[] => {
  const weekArray: string[] = [];
  const MILLISECONDS_IN_WEEK = 7 * 24 * 60 * 60 * 1000;
  const startDate = new Date(start);
  const endDate = new Date(end);
  let weekNum = 1;

  if (startDate.getDate() === endDate.getDate()) {
    console.log('>> start and end dates match');
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
  console.log('>> Time Remaining: ', timeRemaining);
  while (timeRemaining > 0) {
    console.log('>> Time Remaining: ', timeRemaining);
    weekArray.push(`week${weekNum}`);
    weekNum += 1;
    timeRemaining -= MILLISECONDS_IN_WEEK;
  }
  console.log('>> returning:', weekArray);
  return weekArray;
};

const WeekNotesScreen: React.FC<Props> = ({ batchId }): JSX.Element => {
  const arrayString = createWeekArray('2021-7-5', '2021-7-30');
  const [assocNotes, setAssocNotes] = useState<Note[]>([]);
  const [weekNum, setWeekNum] = useState<number>(0);

  const [noteItems, setNoteItems] = useState<JSX.Element[]>();

  useEffect(() => {
    (async (): Promise<void> => {
      const assoc = await getNoteByBatchIdAndWeek(batchId, weekNum + 1);
      setAssocNotes(assoc);
    })();
  }, [weekNum]);

  useEffect(() => {
<<<<<<< HEAD
    setNoteItems(assocNotes.map((note) => (
=======
    const items = assocNotes.map((note) => (

>>>>>>> 910d0554bfba8e3e99e7bfc34760d1259c774975
      <View key={note.noteId}>
        <Text>
          {note.noteContent}
        </Text>
        <Text>
          {note.technicalScore}
        </Text>
      </View>
    )));
  }, [assocNotes]);

  function handleGetNotesForWeek(week: string): void {
    setWeekNum(arrayString.indexOf(week));
  }

  return (
    <>
      <div>
        <HorizontalSelector data={arrayString}
          initialSelected={arrayString[0]}
          onPress={handleGetNotesForWeek}></HorizontalSelector>
      </div>
      <div>
        { noteItems }
      </div>
    </>
  );
};

export default WeekNotesScreen;
