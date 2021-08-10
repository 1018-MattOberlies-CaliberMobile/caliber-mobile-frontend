import React from 'react';
import { Switch } from 'react-native';

type Props = {
  value: boolean,
  setValue: (value: boolean) => void,
}

const ToggleSwitch: React.FC<Props> = ({ value, setValue }) => (
  <Switch onValueChange={setValue} value={value}
    trackColor={{ true: '#B9B9BA', false: '#B9B9BA' }} thumbColor={value ? '#F26925' : '#B9B9BA'} />
);

export default ToggleSwitch;
