import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useToast } from 'react-native-styled-toast';
import AssociateCard from '../components/AssociateCard';
import HorizontalSelector from '../components/HorizontalSelector';
import ToggleSwitch from '../components/ToggleSwitch';
import CreateWeekArray from '../functions/CreateWeekArray';
import FisherYatesShuffle from '../functions/FisherYatesShuffle';
import Note from '../models/note';
import { getNoteByBatchIdAndWeek, createAssociateNote } from '../remote/CaliberNoteAPI';
import WeekNoteStyle from '../styles/WeekNotesStyle';
import RefreshButton from '../components/RefreshButton';
import { styles1 } from '../styles/style1';
import { useAppSelector } from '../redux';
import { selectBatch } from '../redux/slices/batch.slice';
import Associate from '../models/associate';
import { TechnicalScore } from '../@types';

type Props = {
  batchId: string;
}

const WeekNotesScreen: React.FC<Props> = ({ batchId }): JSX.Element => {
  const [assocNotes, setAssocNotes] = useState<Note[]>([]);
  const [weekNum, setWeekNum] = useState<number>(0);
  const [noteItems, setNoteItems] = useState<JSX.Element[]>([]);
  const [randomOrder, setRandomOrder] = useState<boolean>(false);
  const [weekArray, setWeekArray] = useState<string[]>([]);
  const batch = useAppSelector(selectBatch);
  const { toast } = useToast();

  const handleSave = async (
    associate: Associate | undefined, noteId: string | undefined,
    noteContent: string, status: TechnicalScore,
  ): Promise<void> => {
    if (batch) {
      const newNote = {
        noteId,
        batchId: batch.batchId,
        noteContent,
        technicalScore: parseInt(status, 10),
        weekNumber: weekNum + 1,
        associate,
      };
      console.log('Note to save: ', newNote);
      try {
        await createAssociateNote(newNote);
        toast({ message: 'Successfuly saved note.', intent: 'INFO' });
      } catch (err) {
        console.log('>>>>>>>> ', err);
        toast({ message: 'Error saving note.', intent: 'ERROR' });
      }
    }
  };

  useEffect(() => {
    if (batch) {
      const arr = CreateWeekArray(batch.startDate, batch.endDate);
      setWeekArray(arr);
    }
  }, []);

  useEffect(() => {
    console.log('batch', batch);
    // console.log('chaning week', weekNum);
    (async (): Promise<void> => {
      const assoc = await getNoteByBatchIdAndWeek(batch ? batch.batchId : '', weekNum + 1);
      // console.log('asdasdasds', assoc);
      setAssocNotes(assoc);
    })();
  }, [weekNum]);

  useEffect(() => {
    // console.log('hello>', batch?.associates, assocNotes);
    if (batch && assocNotes) {
      const cards = batch.associates?.map((assoc: Associate, index) => {
        const associateNote = assocNotes.find(
          (note: Note) => note.associate && (note.associate.associateId === assoc.associateId),
        );

        const emptyNote: Note = {
          noteId: undefined,
          batchId: batch.batchId,
          noteContent: 'No Note',
          technicalScore: 0,
          weekNumber: weekNum,
          associate: assoc,
        };

        console.log('associate note');
        return (
          <View key={assoc.associateId} testID={`associateCard${index}`}>
            <AssociateCard note={associateNote || emptyNote}
              handleSave={handleSave} index={index}>

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
    setWeekNum(weekArray.indexOf(week));
  }

  async function refreshWeekNotes(): Promise<void> {
    const assoc = await getNoteByBatchIdAndWeek(batchId, weekNum + 1);
    setAssocNotes(assoc);
  }

  return (
    <ScrollView>
      <View style={WeekNoteStyle.container}>
        <View>
          <HorizontalSelector
            data={weekArray}
            initialSelected={weekArray[0]}
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
        <View style={WeekNoteStyle.container}>
          { noteItems }
        </View>
      </View>
    </ScrollView>
  );
};

export default WeekNotesScreen;
