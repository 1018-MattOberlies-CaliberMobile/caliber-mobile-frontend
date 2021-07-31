/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { useState } from 'react';
import { TextInput, View, Button } from 'react-native';

import Batch from '../models/batch';
import { styles1 } from '../styles/style1';

type Props = {
  batchData:Array<Batch>,
  setBatchList: (batches: Batch[]) => void,
}

export const SearchBar: React.FC<Props> = ({ batchData, setBatchList }): JSX.Element => {
  const [search, setSearch] = useState('');

  const searchBatch = (): void => {
    const arr: Batch[] = [];
    if (search === 'all') {
      setBatchList(batchData);
      return;
    }
    for (let i = 0; i < batchData.length; i += 1) {
      if (batchData[i].batchTitle.toLowerCase().includes(search.toLowerCase())) {
        arr.push(batchData[i]);
      }
      if (batchData[i].trainers[0].username === search) {
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
      <View style={styles1.row}>
        <TextInput
          testID='search-bar'
          placeholder = 'Search Here'
          onChangeText = { (txt): void => setSearch(txt) }
        />
        <Button
          title = 'Search'
          onPress = { searchBatch }
          testID = 'search-button'
        />
      </View>
    </>
  );
};
