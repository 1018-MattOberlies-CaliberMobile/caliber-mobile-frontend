/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import {
  Pressable, ScrollView, Text, View,
} from 'react-native';
import HorizontalSelectorStyle from '../styles/HorizontalSelector';

type Props = {
  data: string[],
  initialSelected?: string
  onPress: (item: string) => void,
}

const HorizontalSelector: React.FC<Props> = ({ data, initialSelected, onPress }) => {
  const [selected, setSelected] = useState<string>(initialSelected || '');

  useEffect(() => {
    setSelected(initialSelected || '');
  }, [initialSelected]);

  return (
    <ScrollView contentContainerStyle={HorizontalSelectorStyle.container} horizontal showsHorizontalScrollIndicator={false}>
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
