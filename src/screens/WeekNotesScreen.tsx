import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import AssociateCard from '../components/AssociateCard';
import HorizontalSelector from '../components/HorizontalSelector';
import NoteInput from '../components/NoteInput';
import ToggleSwitch from '../components/ToggleSwitch';
import CreateWeekArray from '../Functions/CreateWeekArray';
import FisherYatesShuffle from '../Functions/FisherYatesShuffle';
import Note from '../models/note';
import { getNoteByBatchIdAndWeek } from '../remote/CaliberNoteAPI';
import WeekNoteStyle from '../styles/WeekNotesStyle';
import RefreshButton from '../components/RefreshButton';

type Props = {
  batchId: string;
}

const WeekNotesScreen: React.FC<Props> = ({ batchId }): JSX.Element => {
  const arrayString = CreateWeekArray('2021-6-5', '2021-7-5');
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
        <AssociateCard note={note}>
          <NoteInput note={note} />
        </AssociateCard>
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

  async function refreshWeekNotes(): Promise<void> {
    const assoc = await getNoteByBatchIdAndWeek(batchId, weekNum + 1);
    setAssocNotes(assoc);
  }
  return (
    <>
      <View style={WeekNoteStyle.container}>
        <View>
          <HorizontalSelector
            data={arrayString}
            initialSelected={arrayString[0]}
            onPress={handleGetNotesForWeek}
          />
        </View>
        <View style={styles1.noteViewSecondaryBar}>
          <RefreshButton functionality={ refreshWeekNotes }/>
          <View style={WeekNoteStyle.randomizeView}>
            <Text style={WeekNoteStyle.textFont}>Randomize: </Text>
            <ToggleSwitch value={randomOrder} setValue={setRandomOrder}/>
          </View>
        </View>
      </View>
      <View>
        <View>
          <Text style={WeekNoteStyle.subHeader}>Accociates</Text>
        </View>
        { noteItems }
      </View>
    </>
  );
};

export default WeekNotesScreen;
