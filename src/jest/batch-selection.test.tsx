/* eslint-disable import/no-extraneous-dependencies */
import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { expect } from '@jest/globals';
import { SearchBar } from '../components/SearchBar';
import Batch from '../models/Batch';
import BatchSelectionScreen from '../screens/BatchSelectionScreen';
import BatchList from '../components/BatchList';

const DATA:Array<Batch> = [
  {
    batchId: '123123',
    batchTitle: '05132020 Cloud Native Matt',
    trainers: [
      {
        username: '848a91eb-1829-4cc5-8386-c7f6738f76ab',
        role: 'Trainer',
      },
    ],
    startDate: new Date().toISOString(),
    endDate: new Date().toISOString(),
    associates: [
    ],
    notes: [
    ],
  },
  {
    batchId: 'tryhtry',
    batchTitle: '05132020 DevOps Tim',
    trainers: [
      {
        username: '848a91eb-5321-4cc5-8386-c7f6738f76ab',
        role: 'Trainer',
      },
    ],
    startDate: new Date().toISOString(),
    endDate: new Date().toISOString(),
    associates: [
    ],
    notes: [
    ],
  },
];

describe('Batch Screen test', () => {
  test('it should render correct number of search bar', () => {
    // const container = shallow(<BatchSelectionScreen/>);
    // expect(container.find('SearchBar').length).equal(1);
    // const comp = renderer.create(<BatchSelectionScreen/>).toJSON();
    // expect(comp).toBeTruthy();
    // TODO: fix error on navigation
  });
});

describe('SearchBar component test', () => {
  test('The search bar component should render', () => {
    const onEventMock = jest.fn();
    const search = renderer.create(
      <SearchBar batchData={DATA} setBatchList={onEventMock}/>,
    ).toJSON();
    expect(search).toBeTruthy();
  });

  test('The search bar should render search button', () => {
    const onEventMock = jest.fn();
    const search = render(<SearchBar batchData={DATA} setBatchList={onEventMock}/>);
    expect(search.getByText('Search')).toBeTruthy();
  });

  test('Testing the filter function', () => {
    // const instanceOf1 = renderer.create(<SearchBar batchData={DATA}/>).getInstance();
    // const comp = render(<SearchBar batchData={DATA} setBatchList={func(DATA)}/>);
    // submitButton.simulate('click');
  });

  test('Search click event should trigger setBatchList prop', () => {
    const onEventMock = jest.fn();
    const search = render(
      <SearchBar batchData={DATA} setBatchList={onEventMock}/>,
    );
    fireEvent(search.getByPlaceholderText('Search Here'), 'onChangeText', 'all');
    fireEvent(search.getByTestId('search-button'), 'click');
    expect(onEventMock).toHaveBeenCalled();
  });
});

describe('BatchList & BatchCard components test', () => {
  test('it should render succesfully', () => {
    const onEventMock = jest.fn();
    const batchList = renderer.create(
      <BatchList batches={DATA} onPress={onEventMock}/>,
    ).toJSON();
    expect(batchList).toBeTruthy();
  });

  test('it should render correct data', () => {
    const onEventMock = jest.fn();
    const batchList = render(<BatchList batches={DATA} onPress={onEventMock}/>);
    expect(batchList.getByText('Batch Name:  05132020 Cloud Native Matt '))
      .toBeTruthy();
  });

  test('it should invoke correct function', () => {
    const onEventMock = jest.fn();
    const batchList = render(<BatchList batches={DATA} onPress={onEventMock}/>);
    fireEvent.press(batchList.getByText('Batch Name:  05132020 DevOps Tim '));
    expect(onEventMock).toHaveBeenCalled();
  });
});
