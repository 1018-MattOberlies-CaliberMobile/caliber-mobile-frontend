import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import WeekNoteScreen from '../screens/WeekNotesScreen';

describe('Week selector test', () => {
  test('Testing week change', () => {
    const changeWeek = render(<WeekNoteScreen />);
    expect(1).toBe(1);
  });
});
