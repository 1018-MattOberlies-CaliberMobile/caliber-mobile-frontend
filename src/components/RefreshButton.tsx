import { Feather } from '@expo/vector-icons';
import React from 'react';
import {
  Text, TouchableOpacity, View,
} from 'react-native';
import RefreshButtonStyle from '../styles/RefreshButton';

type RefreshButtonProps = {
  functionality: () => void

};

const RefreshButton: React.FC<RefreshButtonProps> = ({ functionality }): JSX.Element => (

  <TouchableOpacity testID='login-button' onPress={functionality}>
    <View style={RefreshButtonStyle.button}>
      <Feather name="refresh-ccw" size={24} color="white" />
      <Text style={ RefreshButtonStyle.buttonText}>Refresh</Text>
    </View>
  </TouchableOpacity>
);

export default RefreshButton;
