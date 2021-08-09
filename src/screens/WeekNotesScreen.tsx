import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AssociateCard from '../components/AssociateCard';
import HorizontalSelector from '../components/HorizontalSelector';
import NoteInput from '../components/NoteInput';
import ToggleSwitch from '../components/ToggleSwitch';
import CreateWeekArray from '../functions/CreateWeekArray';
import FisherYatesShuffle from '../functions/FisherYatesShuffle';
import Note from '../models/note';
import { getNoteByBatchIdAndWeek } from '../remote/CaliberNoteAPI';
import WeekNoteStyle from '../styles/WeekNotesStyle';
import RefreshButton from '../components/RefreshButton';
import { styles1 } from '../styles/style1';
import { useAppSelector } from '../redux';
import { selectBatch } from '../redux/slices/batch.slice';
import Associate from '../models/associate';

type Props = {
  batchId: string;
}

const WeekNotesScreen: React.FC<Props> = ({ batchId }): JSX.Element => {
  const arrayString = CreateWeekArray('2021-6-5', '2021-7-5');
  const [assocNotes, setAssocNotes] = useState<Note[]>([]);
  const [weekNum, setWeekNum] = useState<number>(0);
  const [noteItems, setNoteItems] = useState<JSX.Element[]>([]);
  const [randomOrder, setRandomOrder] = useState<boolean>(false);

  const batch = useAppSelector(selectBatch);

  useEffect(() => {
    (async (): Promise<void> => {
      const assoc = await getNoteByBatchIdAndWeek(batch ? batch.batchId : '', weekNum + 1);
      setAssocNotes(assoc);
    })();
  }, [weekNum]);

  useEffect(() => {
    if (batch && batch.associates && assocNotes) {
      const cards = batch.associates.map((assoc: Associate, index) => {
        const results = assocNotes.find(
          (note: Note) => note.associate && note.associate.associateId === assoc.associateId,
        );

        if (results) {
          return (
            <View key={assoc.associateId} testID={`associateCard${index}`} >
              <AssociateCard note={results}>
                <NoteInput testIndex={index} note={results} />
              </AssociateCard>
            </View>
          );
        }

        const emptyNote: Note = {
          noteId: '123',
          batchId: batch.batchId,
          noteContent: 'No Note',
          technicalScore: 0,
          weekNumber: weekNum,
        };
        return (
          <View key={assoc.associateId} testID={`associateCard${index}`} >
            <AssociateCard note={emptyNote}>
              <NoteInput testIndex={index} note={emptyNote} />
            </AssociateCard>
          </View>
        );
      });

      if (randomOrder) {
        FisherYatesShuffle<JSX.Element>(cards);
      }
      setNoteItems(cards);
    }
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
          <Text style={WeekNoteStyle.subHeader}>Associates</Text>
        </View>
        <ScrollView style={WeekNoteStyle.container}>
          { noteItems }
        </ScrollView>
      </View>
    </>
  );
};

export default WeekNotesScreen;
