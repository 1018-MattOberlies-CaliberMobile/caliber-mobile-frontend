import React, { useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Note from '../models/note';
import { styles1 } from '../styles/style1';

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
        style={[{ flex: 1 }, styles1.textBox]}>
        <TextInput
          editable
          maxLength={400}
          multiline
          numberOfLines={8}
          // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
          onChangeText={(text) => setContent(text)}
          value={content}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{ width: 600, padding: 10 }} // possibly change to something else
        />
      </View>
      <TouchableOpacity onPress={handlePress} >
        <Text>Touch me</Text>
      </TouchableOpacity>
    </>
  );
};

export default NoteInput;