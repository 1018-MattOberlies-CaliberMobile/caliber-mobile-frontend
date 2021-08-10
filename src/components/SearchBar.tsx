/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { useState } from 'react';
import {
  Text, TextInput, View, TouchableOpacity,
} from 'react-native';
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
      // eslint-disable-next-line max-len
      } else if (batchData[i].trainers.find((trainer) => trainer.username.toLocaleLowerCase().includes(search.toLocaleLowerCase()))) {
        arr.push(batchData[i]);
      } else if (batchData[i].batchId === search) {
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
          onChangeText = { (txt): void => {
            setSearch(txt);
            searchBatch();
          } }
          style = {SearchBarStyles.textInput}
        />

      </View>
    </>
  );
};
