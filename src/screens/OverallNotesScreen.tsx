/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Text, TextInput } from 'react-native';
import StatusSelector from '../components/StatusSelector';
import { View } from '../components/Themed';

type Props = {

}

const OverallNotesScreen: React.FC<Props> = (props): JSX.Element => {
  const temp = 0;
  const [selected, setSelected] = useState<number>();
  return (
    <View>
      <Text style={{ fontFamily: 'futura-medium' }}>Week 0</Text>
      <StatusSelector onSelect={setSelected}/>
      {!!selected && <Text>{selected}</Text>}
      <TextInput testID='overallNotesInput'></TextInput>
    </View>
  );
};

export default OverallNotesScreen;
