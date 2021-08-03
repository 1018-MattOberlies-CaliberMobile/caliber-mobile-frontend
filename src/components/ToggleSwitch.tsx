import React from 'react';
import { Switch } from 'react-native';

type Props = {
  value: boolean,
  setValue: (value: boolean) => void,
}

const ToggleSwitch: React.FC<Props> = ({ value, setValue }) => (
  <Switch onValueChange={setValue} value={value}
    trackColor={{ true: '#474C55', false: '#B9B9BA' }} thumbColor={value ? '#F26925' : '#FCB414'} />
);

export default ToggleSwitch;
