import * as React from 'react';
import { useState } from 'react';
import {
  TextInput, View, StyleSheet, Text, Button,
} from 'react-native';
import Batch from '../models/batch';

const DATA:Array<Batch> = [
  {
    batchID: '123123',
    batchTitle: '05132020 Cloud Native Matt',
    trainerID: 'Matt',
    startDate: '05/13/2020',
    associateList: [],
    notes: [],
  },
  {
    batchID: '12334',
    batchTitle: '05112020 Java Tyler',
    trainerID: 'Tyler',
    startDate: '05/11/2020',
    associateList: [],
    notes: [],
  },
];

const searchBar = (): JSX.Element => {
  const [searchResult, setSearchResult] = useState<Batch | null>();
  const [search, setSearch] = useState('');
  const searchBatch = (): void => {
    for (let i = 0; i < DATA.length; i += 1) {
      if (DATA[i].batchTitle === search) {
        setSearchResult(DATA[i]);
      }
    }
  };
  return (
    <>
      <TextInput
        placeholder = 'Search Here'
        onChangeText = { (txt): void => setSearch(txt) }
      />

      <Button
        title = 'Search'
        onPress = { (): void => { searchBatch(); } }
      />
    </>
  );
};
