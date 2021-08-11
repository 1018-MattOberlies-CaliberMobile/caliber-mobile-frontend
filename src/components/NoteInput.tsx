import { FontAwesome } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TechnicalScore } from '../@types';
import Associate from '../models/associate';
import Note from '../models/note';
import { useAppSelector } from '../redux';
import { selectUser } from '../redux/slices/user.slice';
import { styles1 } from '../styles/style1';
import { theme } from '../styles/Theme';
import WeekNoteStyle from '../styles/WeekNotesStyle';

type Props = {
  note: Note,
  handleSave: (
    associate: Associate | undefined, noteId: string | undefined,
     noteContent: string, status: TechnicalScore) => void
  testIndex: number,
  status: TechnicalScore,
}

const NoteInput: React.FC<Props> = ({
  note, handleSave, testIndex, status,
}) => {
  const [noteContent, setNoteContent] = useState<string>('');
  const user = useAppSelector(selectUser);
  useEffect(() => {
    setNoteContent(note.noteContent);
  }, [note]);

  return (
    <>
      <View
      // eslint-disable-next-line react-native/no-inline-styles
        style={styles1.textBox} testID={`noteInput${testIndex}`}>
        <TextInput
          editable={!(user?.role === 'Trainer')}
          maxLength={400}
          multiline
          numberOfLines={8}
          // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
          onChangeText={setNoteContent}
          value={noteContent}
          // eslint-disable-next-line react-native/no-inline-styles
          style={[{ padding: 10 }, WeekNoteStyle.textFont]} // possibly change to something else
        />
      </View>

      {
        !(user?.role === 'Trainer') && (
          <View style={styles1.saveContainer}>
            <TouchableOpacity testID={`noteSave${testIndex}`} onPress={(): void => handleSave(note.associate, note.noteId, noteContent, status)} style={styles1.noteButton}>
              <FontAwesome name="save" size={24} color={theme.colors.text} />
              <Text style={styles1.textInputSave}>Save</Text>
            </TouchableOpacity>
          </View>
        )
      }
    </>
  );
};

export default NoteInput;
