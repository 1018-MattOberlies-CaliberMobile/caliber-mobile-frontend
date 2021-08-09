/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useState, useRef } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Animated,
  Easing,
} from 'react-native';
import { TechnicalScore } from '../@types';
import Note from '../models/note';
import { styles1 } from '../styles/style1';
import WeekNoteStyle from '../styles/WeekNotesStyle';
import StatusSelector from './StatusSelector';

type Props = {
  note: Note;
}

const AssociateCard: React.FC<Props> = ({ note, children }) => {
  const [last, setLast] = useState<string>();
  const [first, setFirst] = useState<string>();
  const [open, setOpen] = useState(false);
  const animatedController = useRef(new Animated.Value(0)).current;
  const [bodySectionHeight, setBodySectionHeight] = useState<number>(0);
  const [score, setScore] = useState<TechnicalScore>(note.technicalScore);

  useEffect(() => {
    if (note.associate) {
      console.log('note associate', note);
      const { firstName, lastName } = note.associate;
      setLast(lastName);
      setFirst(firstName);
      setScore(note.technicalScore);
    }
  }, [note]);

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
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animatedController, {
        duration: 300,
        toValue: 1,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
        useNativeDriver: false,
      }).start();
    }
    setOpen(!open);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={(): unknown => toggleListItem()}>
        <View style={styles1.cardContainer}>
          <Text style={WeekNoteStyle.textFont}>{last}, {first}</Text>
          <StatusSelector selected={Number(score) as TechnicalScore} onSelect={setScore}/>
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
export default AssociateCard;
