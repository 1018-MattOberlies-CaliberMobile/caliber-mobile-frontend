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

type Props = {
  batchData:Array<Batch>,
}

export const SearchBar: React.FC<Props> = ({ batchData }): JSX.Element => {
  const nav = useNavigation();
  const [searchResult, setSearchResult] = useState<Batch[]>(batchData);
  const [search, setSearch] = useState('');

  const searchBatch = (): void => {
    const arr: Batch[] = [];
    if (search === 'all') {
      setSearchResult(batchData);
      return;
    }
    for (let i = 0; i < batchData.length; i += 1) {
      if (batchData[i].batchTitle === search) {
        arr.push(batchData[i]);
      }
      if (batchData[i].trainerID === search) {
        arr.push(batchData[i]);
      }
      if (batchData[i].batchID === search) {
        arr.push(batchData[i]);
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
