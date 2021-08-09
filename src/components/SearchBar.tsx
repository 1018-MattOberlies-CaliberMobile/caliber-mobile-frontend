/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import Batch from '../models/batch';
import SearchBarStyles from '../styles/SearchBarStyles';

type Props = {
  batchData:Array<Batch>,
  setBatchList: (batches: Batch[]) => void,
}

export const SearchBar: React.FC<Props> = ({ batchData, setBatchList }): JSX.Element => {
  // const nav = useNavigation();
  const [search, setSearch] = useState('');

  const searchBatch = (): void => {
    const arr: Batch[] = [];
    if (search === '') {
      setBatchList(batchData);
      return;
    }
    for (let i = 0; i < batchData.length; i += 1) {
      if (batchData[i].batchTitle.toLowerCase().includes(search.toLowerCase())) {
        arr.push(batchData[i]);
      }
      if (batchData[i].trainers.find((trainer) => trainer.username === search)) {
        arr.push(batchData[i]);
      }
      if (batchData[i].batchId === search) {
        arr.push(batchData[i]);
      }
    }
    setBatchList(arr);
  };

  return (
    <>
      <View style={SearchBarStyles.row}>
        <TextInput
          testID='search-bar'
          placeholder = 'Search Here'
          onChangeText = { (txt): void => setSearch(txt) }
          style = {SearchBarStyles.textInput}
        />

        <TouchableOpacity style={SearchBarStyles.button} testID='login-button' onPress={searchBatch}>
          <Text style={SearchBarStyles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
