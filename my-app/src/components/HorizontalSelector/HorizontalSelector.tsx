/* eslint-disable max-len */
import React, { useState } from 'react';
import { Pressable, ScrollView, Text } from 'react-native';
import HorizontalSelectorStyle from '../../styles/HorizontalSelector';

type Props = {
  data: string[],
  onPress: (item: string) => void,
}
const HorizontalSelector: React.FC<Props> = ({ data, onPress }) => {
  const [selected, setSelected] = useState<string>('');

  return (
    <ScrollView contentContainerStyle={HorizontalSelectorStyle.container} horizontal>
      {
        data.map((item) => (
          <Pressable key={item} onPress={(): void => { onPress(item); setSelected(item); }}>
            <Text style={item === selected ? HorizontalSelectorStyle.selectedItem : HorizontalSelectorStyle.item}>{item}</Text>
          </Pressable>
        ))
      }
    </ScrollView>
  );
};

export default HorizontalSelector;
