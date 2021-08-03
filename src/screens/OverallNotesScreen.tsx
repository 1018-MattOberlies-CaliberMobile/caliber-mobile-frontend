/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Text, TextInput } from 'react-native';
import { TechnicalScore } from '../@types';
import StatusSelector from '../components/StatusSelector';
import { View } from '../components/Themed';

type Props = {

}

const OverallNotesScreen: React.FC<Props> = (props): JSX.Element => {
  const temp = 0;
  const [selected, setSelected] = useState<TechnicalScore>(0);
  return (
    <View>
      <Text style={{ fontFamily: 'futura-medium' }}>Week 0</Text>
      <StatusSelector selected={selected} onSelect={setSelected}/>
      {!!selected && <Text>{selected}</Text>}
      <TextInput testID='overallNotesInput'></TextInput>
    </View>
  );
};

export default OverallNotesScreen;
