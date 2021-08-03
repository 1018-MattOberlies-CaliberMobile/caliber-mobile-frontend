/* eslint-disable no-unused-expressions */
import { fireEvent, GetAllReturn, render } from '@testing-library/react-native';
import React from 'react';
import { expect } from '@jest/globals';
import HorizontalSelector from '../components/HorizontalSelector';
import StatusSelector from '../components/StatusSelector';

describe('Overall week note page tests', () => {
  test('Testing when a button is not pressed the onPress function is not being called', () => {
    let output = '';
    const setOutput = (item :string): void => { output = item; };

    const { getByText } = render(
      <HorizontalSelector data = {['week1', 'week2', 'week3']} onPress={ setOutput } />,
    );

    expect(getByText('week1')).toBeTruthy();
  });

  // status selector
  // test onSelect is called with the correct info

  test('On selecting the question mark calls onPress with returns 0', () => {
    const mockFn = jest.fn();
    const { getAllByA11yLabel } = render(
      <StatusSelector onSelect={mockFn}/>,
    );

    const options: GetAllReturn = getAllByA11yLabel('statusOptions');

    fireEvent.press(options[0]);

    expect(mockFn).toBeCalledWith(0);
  });

  test('On selecting the poor option calls onPress with 1', () => {
    const mockFn = jest.fn();
    const { getAllByA11yLabel } = render(
      <StatusSelector onSelect={mockFn}/>,
    );

    const options: GetAllReturn = getAllByA11yLabel('statusOptions');

    fireEvent.press(options[1]);

    expect(mockFn).toBeCalledWith(1);
  });

  test('On selecting the average option calls onPress with 2', () => {
    const mockFn = jest.fn();
    const { getAllByA11yLabel } = render(
      <StatusSelector onSelect={mockFn}/>,
    );

    const options: GetAllReturn = getAllByA11yLabel('statusOptions');

    fireEvent.press(options[2]);

    expect(mockFn).toBeCalledWith(2);
  });

  test('On selecting the good option calls onPress with 3', () => {
    const mockFn = jest.fn();
    const { getAllByA11yLabel } = render(
      <StatusSelector onSelect={mockFn}/>,
    );

    const options: GetAllReturn = getAllByA11yLabel('statusOptions');

    fireEvent.press(options[3]);

    expect(mockFn).toBeCalledWith(3);
  });

  test('On selecting the superstar option calls onPress with 4', () => {
    const mockFn = jest.fn();
    const { getAllByA11yLabel } = render(
      <StatusSelector onSelect={mockFn}/>,
    );

    const options: GetAllReturn = getAllByA11yLabel('statusOptions');

    fireEvent.press(options[4]);

    expect(mockFn).toBeCalledWith(4);
  });
});
