import { FontAwesome } from '@expo/vector-icons';
import React, { useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Note from '../models/note';
import { styles1 } from '../styles/style1';
import { theme } from '../styles/Theme';
import WeekNoteStyle from '../styles/WeekNotesStyle';

type Props = {
  note: Note
}

const NoteInput: React.FC<Props> = ({ note }) => {
  const [content, setContent] = React.useState('No notes');

  useEffect(() => {
    setContent(note.noteContent);
  }, []);

  const handlePress = (): void => {
    // TODO
  };

  return (
    <>
      <View
      // eslint-disable-next-line react-native/no-inline-styles
        style={styles1.textBox} testID="noteInput">
        <TextInput
          editable
          maxLength={400}
          multiline
          numberOfLines={8}
          // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
          onChangeText={(text) => setContent(text)}
          value={content}
          // eslint-disable-next-line react-native/no-inline-styles
          style={[{ padding: 10 }, WeekNoteStyle.textFont]} // possibly change to something else
        />
      </View>
      <View style={styles1.saveContainer}>
        <TouchableOpacity onPress={handlePress} style={styles1.noteButton}>
          <FontAwesome name="save" size={24} color={theme.colors.text} />
          <Text style={styles1.textInputSave}>Save</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default NoteInput;
