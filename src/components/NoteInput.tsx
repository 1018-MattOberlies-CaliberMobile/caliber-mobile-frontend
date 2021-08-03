import React, { useEffect } from 'react';
import { View, TextInput } from 'react-native';
import Note from '../models/note';
import { styles1 } from '../styles/style1';

type Props = {
  note: Note
}

const NoteInput: React.FC<Props> = ({ note }) => {
  const [content, setContent] = React.useState('No notes');

  useEffect(() => {
    setContent(note.noteContent);
  }, [content]);

  // If you type something in the text box that is a color, the background will change to that
  // color.
  return (
    <View
      style={
        styles1.textBox}>
      <TextInput
        editable
        maxLength={400}
        multiline
        numberOfLines={8}
        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        onChangeText={(text) => setContent(text)}
        value={content}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{ padding: 10 }}
      />
    </View>
  );
};

export default NoteInput;
