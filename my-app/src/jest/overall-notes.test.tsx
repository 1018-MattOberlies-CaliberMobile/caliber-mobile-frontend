import { render } from '@testing-library/react-native';
import React from 'react';
import HorizontalSelector from '../components/HorizontalSelector/HorizontalSelector';

describe('overall testing page', () => {
  test('Testing when a button is not pressed the onPress function is not being called', () => {
    let output = '';
    const setOutput = (item :string): void => { output = item; };

    const { getByText } = render(
      <HorizontalSelector data = {['week1', 'week2', 'week3']} onPress={ setOutput } />,
    );
  });
});
