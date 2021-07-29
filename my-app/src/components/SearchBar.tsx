/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { useState } from 'react';
import {
  SafeAreaView, FlatList, TextInput, View, Button, Text,
} from 'react-native';

import Batch from '../models/batch';
import { styles1 } from '../styles/style1';

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

type Props = {

}

export const SearchBar: React.FC<Props> = (props): JSX.Element => {
  const nav = useNavigation();
  const [searchResult, setSearchResult] = useState<Batch[]>(DATA);
  const [search, setSearch] = useState('');

  const searchBatch = (): void => {
    const arr: Batch[] = [];
    for (let i = 0; i < DATA.length; i += 1) {
      if (DATA[i].batchTitle === search) {
        arr.push(DATA[i]);
      }
      if (DATA[i].trainerID === search) {
        arr.push(DATA[i]);
      }
      if (DATA[i].batchID === search) {
        arr.push(DATA[i]);
      }
    }
    setSearchResult(arr);
  };

  const viewDetail = (batch: Batch):void => {
    // set batch to global object perhaps
    nav.navigate('NoteNavigation');
  };

  const Item = ({ batch }:{ batch: Batch }): JSX.Element => (
    <View style={styles1.item}>
      <Text style={styles1.leftTxt}>Batch Name:  {batch.batchTitle} </Text>
      <Text style={styles1.leftTxt}>Trainer:  {batch.trainerID} </Text>
      <Button onPress = {():void => viewDetail(batch)} title="Note" />
    </View>
  );

  const renderItem = ({ item }:{ item: Batch }): JSX.Element => (
    <>
      <Item batch={item} />
    </>
  );

  return (
    <>
      <View style={styles1.row}>
        <TextInput
          placeholder = 'Search Here'
          onChangeText = { (txt): void => setSearch(txt) }
        />
        <Button
          title = 'Search'
          onPress = { searchBatch }
        />
      </View>
      <SafeAreaView style={styles1.container}>
        <FlatList
          data = {searchResult}
          renderItem = {renderItem}
          keyExtractor = {(item):string => item.batchID}
        />
      </SafeAreaView>
    </>
  );
};
