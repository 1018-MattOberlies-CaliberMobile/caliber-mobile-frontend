import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import HorizontalSelector from '../components/HorizontalSelector';
import ToggleSwitch from '../components/ToggleSwitch';
import CreateWeekArray from '../functions/CreateWeekArray';
import FisherYatesShuffle from '../functions/FisherYatesShuffle';
import Note from '../models/note';
import { getNoteByBatchIdAndWeek } from '../remote/CaliberNoteAPI';
import WeekNoteStyle from '../styles/WeekNotesStyle';

type Props = {
  batchId: string;
}

const WeekNotesScreen: React.FC<Props> = ({ batchId }): JSX.Element => {
  const arrayString = CreateWeekArray('2021-7-5', '2021-7-30');
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
      FisherYatesShuffle<JSX.Element>(items);
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
