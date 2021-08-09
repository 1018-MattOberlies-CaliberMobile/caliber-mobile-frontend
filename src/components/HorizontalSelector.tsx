/* eslint-disable max-len */
import React, { useEffect, useState, useRef } from 'react';
import { Pressable, ScrollView, Text } from 'react-native';
import HorizontalSelectorStyle from '../styles/HorizontalSelector';

type Props = {
  data: string[],
  initialSelected?: string
  onPress: (item: string) => void,
  startAtEnd?: boolean,
}

const HorizontalSelector: React.FC<Props> = ({ data, initialSelected, onPress, startAtEnd }) => {
  const [selected, setSelected] = useState<string>(initialSelected || '');

  const scrollViewRef = useRef<ScrollView | null>(null);

  useEffect(() => {
    setSelected(initialSelected || '');
  }, [initialSelected]);

  return (
    <ScrollView
      contentContainerStyle={HorizontalSelectorStyle.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      ref={scrollViewRef}
      onContentSizeChange={(): void => { if (startAtEnd) { scrollViewRef.current?.scrollToEnd({ animated: false }); } }}>
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
