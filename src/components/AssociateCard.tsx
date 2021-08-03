import React, { useState, useRef } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Animated,
  Easing,
  Pressable,
} from 'react-native';
import Batch from '../models/batch';
import Note from '../models/note';
import Associate from '../models/associate';
import { styles1 } from '../styles/style1';
import PressableStatusIcon from './StatusIcon';

type Props = {
  note: Note;
}

const AccordionListItem: React.FC<Props> = ({ note, children }) => {
  const { technicalScore } = note;
  const { firstName, lastName } = note.associate;
  const [open, setOpen] = useState(false);
  const animatedController = useRef(new Animated.Value(0)).current;
  const [bodySectionHeight, setBodySectionHeight] = useState();

  const bodyHeight = animatedController.interpolate({
    inputRange: [0, 1],
    outputRange: [0, bodySectionHeight],
  });

  const toggleListItem = () => {
    if (open) {
      Animated.timing(animatedController, {
        duration: 300,
        toValue: 0,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animatedController, {
        duration: 300,
        toValue: 1,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
        useNativeDriver: true,
      }).start();
    }
    setOpen(!open);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={(): unknown => toggleListItem()}>
        <View style={styles1.cardContainer}>
          <Text>{lastName}, {firstName}</Text>
          <PressableStatusIcon status={technicalScore}/>
        </View>
      </TouchableWithoutFeedback>
      <Animated.View style={[styles1.cardBackground, { height: bodyHeight }]}>
        <View
          style={styles1.cardDropdownContainer}
          onLayout={(event) => setBodySectionHeight(event.nativeEvent.layout.height)
          }>
          {children}
        </View>
      </Animated.View>
    </>
  );
};
export default AccordionListItem;
