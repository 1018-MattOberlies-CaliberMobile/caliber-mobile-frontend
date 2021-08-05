/* eslint-disable no-unused-vars */
import { Entypo, FontAwesome } from '@expo/vector-icons';
import React from 'react';
import {
  Pressable, StyleProp, ViewStyle,
} from 'react-native';
import { TechnicalScore } from '../@types';

type StatusIconProps = {
  status: TechnicalScore,
  size?: number,
  style?: ViewStyle,
};

type PressableStatusIconProps = {
  onPress: (status: TechnicalScore) => void,
  style?: ViewStyle,
};

export const StatusIcon: React.FC<StatusIconProps> = ({ status, size, style }): JSX.Element => {
  switch (status) {
  case 1:
    return <Entypo name="emoji-sad" size={size || 25} color="red" />;
  case 2:
    return <Entypo name="emoji-neutral" size={size || 25} color="#FCB414" />;
  case 3:
    return <Entypo name="emoji-happy" size={size || 25} color="green" />;
  case 4:
    return <FontAwesome name="star" size={size || 25} color="blue" />;
  default:
    return <FontAwesome name="question-circle" size={size || 25} color="#F26925" />;
  }
};

const PressableStatusIcon: React.FC<StatusIconProps & PressableStatusIconProps> = ({
  status, size, onPress, style,
}): JSX.Element => (
  <Pressable
    testID={`option${status}`}
    onPress={(): void => { onPress(status); }}
    style={({ pressed }): StyleProp<ViewStyle> => [
      { opacity: pressed ? 0 : 1 },
      style,
    ]}
  >
    <StatusIcon status={status} size={size} />
  </Pressable>
);

export default PressableStatusIcon;
