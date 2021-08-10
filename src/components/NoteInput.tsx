import { FontAwesome } from '@expo/vector-icons';
import React, { useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Associate from '../models/associate';
import Note from '../models/note';
import { styles1 } from '../styles/style1';
import { theme } from '../styles/Theme';
import WeekNoteStyle from '../styles/WeekNotesStyle';

type Props = {
  note: Note,
  setNoteContent: React.Dispatch<React.SetStateAction<string>>,
  handleSave: (associate: Associate | undefined, noteId: string) => void,
  content: string,
  testIndex: number,
}

const NoteInput: React.FC<Props> = ({
  note, setNoteContent, handleSave, content, testIndex,
}) => {
  useEffect(() => {
    setNoteContent(note.noteContent);
  }, []);

  return (
    <>
      <View
      // eslint-disable-next-line react-native/no-inline-styles
        style={styles1.textBox} testID={`noteInput${testIndex}`}>
        <TextInput
          editable
          maxLength={400}
          multiline
          numberOfLines={8}
          // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
          onChangeText={setNoteContent}
          value={content}
          // eslint-disable-next-line react-native/no-inline-styles
          style={[{ padding: 10 }, WeekNoteStyle.textFont]} // possibly change to something else
        />
      </View>
      <View style={styles1.saveContainer}>
        <TouchableOpacity testID={`noteSave${testIndex}`} onPress={(): void => handleSave(note.associate, note.noteId)} style={styles1.noteButton}>
          <FontAwesome name="save" size={24} color={theme.colors.text} />
          <Text style={styles1.textInputSave}>Save</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default NoteInput;
