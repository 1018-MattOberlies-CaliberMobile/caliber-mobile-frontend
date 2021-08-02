/* eslint-disable import/prefer-default-export */
import { DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: '#FFFFFF',
    primary: '#F26925',
    secondary: '#474C55',
    error: '#f13a59',
  },
};
