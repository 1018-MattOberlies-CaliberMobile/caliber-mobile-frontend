// eslint-disable-next-line import/no-extraneous-dependencies
import { render, fireEvent } from '@testing-library/react-native';
import 'react-native';
import React from 'react';
import HorizontalSelector from '../components/HorizontalSelector';

describe('Horizontal selector test', () => {
  test('Testing pressing a button in the horizontal selector properly calls the onPress function', () => {
    let output = '';
    const setOutput = (item :string): void => { output = item; };

    const { getByText } = render(
      <HorizontalSelector data = {['week1', 'week2', 'week3']} onPress={ setOutput } />,
    );

    const week2Button = getByText('week2');
    fireEvent.press(week2Button);
    expect(output).toBe('week2');
  });

  test('Testing when a button is not pressed the onPress function is not being called', () => {
    let output = '';
    const setOutput = (item :string): void => { output = item; };

    const { getByText } = render(
      <HorizontalSelector data = {['week1', 'week2', 'week3']} onPress={ setOutput } />,
    );

    const week2Button = getByText('week2');

    expect(output).not.toBe('week2');
  });
});
