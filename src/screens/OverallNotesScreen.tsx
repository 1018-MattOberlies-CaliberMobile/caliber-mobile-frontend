import React from 'react';
import { Text, TextInput } from 'react-native';

type Props = {

}

const OverallNotesScreen: React.FC<Props> = (props): JSX.Element => {
  const temp = 0;
  return (
    <>
      <Text>Week 0</Text>
      <TextInput testID='overallNotesInput'></TextInput>
    </>
  );
};

export default OverallNotesScreen;
