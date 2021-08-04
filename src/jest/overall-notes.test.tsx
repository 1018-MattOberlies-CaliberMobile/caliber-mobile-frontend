/* eslint-disable no-unused-expressions */
import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { expect } from '@jest/globals';
import StatusSelector from '../components/StatusSelector';
import { TechnicalScore } from '../@types';

describe('Overall week note page tests', () => {
  // status selector
  // test onSelect is called with the correct info

  test('On selecting the question mark calls onPress with returns 0', () => {
    const mockFn = jest.fn();
    const selected: TechnicalScore = 0;
    const { getByTestId } = render(
      <StatusSelector selected={selected} onSelect={mockFn}/>,
    );

    const Modal = getByTestId('Status Options');
    fireEvent.press(Modal);
    const option = getByTestId(`option${selected}`);
    fireEvent.press(option);

    expect(mockFn).toBeCalledWith(0);
  });

  test('On selecting the poor option calls onPress with 1', () => {
    const mockFn = jest.fn();
    const selected: TechnicalScore = 1;
    const { getByTestId } = render(
      <StatusSelector selected={selected} onSelect={mockFn}/>,
    );

    const Modal = getByTestId('Status Options');
    fireEvent.press(Modal);
    const option = getByTestId(`option${selected}`);
    fireEvent.press(option);

    expect(mockFn).toBeCalledWith(1);
  });

  test('On selecting the average option calls onPress with 2', () => {
    const mockFn = jest.fn();
    const selected: TechnicalScore = 2;
    const { getByTestId } = render(
      <StatusSelector selected={selected} onSelect={mockFn}/>,
    );

    const Modal = getByTestId('Status Options');
    fireEvent.press(Modal);
    const option = getByTestId(`option${selected}`);
    fireEvent.press(option);

    expect(mockFn).toBeCalledWith(2);
  });

  test('On selecting the good option calls onPress with 3', () => {
    const mockFn = jest.fn();
    const selected: TechnicalScore = 3;
    const { getByTestId } = render(
      <StatusSelector selected={selected} onSelect={mockFn}/>,
    );

    const Modal = getByTestId('Status Options');
    fireEvent.press(Modal);
    const option = getByTestId(`option${selected}`);
    fireEvent.press(option);

    expect(mockFn).toBeCalledWith(3);
  });

  test('On selecting the superstar option calls onPress with 4', () => {
    const mockFn = jest.fn();
    const selected: TechnicalScore = 4;
    const { getByTestId } = render(
      <StatusSelector selected={selected} onSelect={mockFn}/>,
    );

    const Modal = getByTestId('Status Options');
    fireEvent.press(Modal);
    const option = getByTestId(`option${selected}`);
    fireEvent.press(option);

    expect(mockFn).toBeCalledWith(4);
  });
});
