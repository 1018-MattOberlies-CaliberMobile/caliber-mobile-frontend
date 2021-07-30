import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import HorizontalSelector from '../components/HorizontalSelector';
import { SearchBar } from '../components/SearchBar';
import { getBatchYears } from '../remote/CaliberBatchAPI';
import Batch from '../models/batch';
import { styles1 } from '../styles/style1';
import BatchList from '../components/BatchList';

type Props = {

}

const DATA:Array<Batch> = [
  {
    batchId: '123123',
    batchTitle: '05132021 Cloud Native Matt',
    trainers: [
      {
        username: 'Matt',
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
    batchTitle: '05132021 DevOps Tim',
    trainers: [
      {
        username: 'Tim',
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

for (let i = 0; i < 20; i += 1) {
  const newBatch: Batch = {
    batchId: `${i}`,
    batchTitle: '05132020 DevOps Tim',
    trainers: [
      {
        username: `${i % 2 === 0 ? 'Matt' : 'Tim'}`,
        role: 'Trainer',
      },
    ],
    startDate: new Date().toISOString(),
    endDate: new Date().toISOString(),
    associates: [

    ],
    notes: [

    ],
  };
  DATA.push(newBatch);
}

const BatchSelectionScreen: React.FC<Props> = (): JSX.Element => {
  const navigation = useNavigation();
  const [years, setYears] = useState<string[]>([]);
  const [selectedYear, setSelectedYear] = useState<string>();
  const [batchList, setBatchList] = useState<Batch[]>([]);
  const [searchResults, setSearchResults] = useState<Batch[]>();

  useEffect(() => {
    // Retrieves a list of years which contain batches and sets the component state
    const retrieveBatchYears = async (): Promise<void> => {
      setYears(await getBatchYears());
      setSelectedYear(years[0]);
    };
    retrieveBatchYears();
  }, []);

  useEffect(() => {
    // set batch list according to selected year
    setBatchList(DATA);
    setSearchResults(undefined);
  }, [selectedYear]);

  const onSelectBatch = (batch: Batch): void => {
    console.log(batch);
    // Assign redux state to be this batch

    // navigate to notes page
  };

  console.log('Batch Selection');
  return (
    <>
      <View style={ { flex: 1 } }>
        <HorizontalSelector data={years} initialSelected={years[0]} onPress={setSelectedYear} />
        <View style = {styles1.container}>
          <SearchBar batchData={batchList} setBatchList={setSearchResults} />
        </View>
      </View>

      <View style={ { flex: 8 } }>
        <ScrollView>
          <BatchList batches={searchResults || batchList} onPress={onSelectBatch} />
        </ScrollView>
      </View>
    </>
  );
};

export default BatchSelectionScreen;
