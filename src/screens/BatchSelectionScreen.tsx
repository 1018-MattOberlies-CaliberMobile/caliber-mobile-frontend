import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useToast } from 'react-native-styled-toast';
import HorizontalSelector from '../components/HorizontalSelector';
import { SearchBar } from '../components/SearchBar';
import { getBatchYears, getBatchesByYear } from '../remote/CaliberBatchAPI';
import Batch from '../models/batch';
import SearchBarStyles from '../styles/SearchBarStyles';
import BatchList from '../components/BatchList';
import { setBatch } from '../redux/slices/batch.slice';

type Props = {

}

const BatchSelectionScreen: React.FC<Props> = (): JSX.Element => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { toast } = useToast();

  const [years, setYears] = useState<string[]>([]);
  const [selectedYear, setSelectedYear] = useState<string>(new Date().getFullYear().toString());
  const [batchList, setBatchList] = useState<Batch[]>([]);
  const [searchResults, setSearchResults] = useState<Batch[]>();

  useEffect(() => {
    // Retrieves a list of years which contain batches and sets the component state
    const retrieveBatchYears = async (): Promise<void> => {
      getBatchYears()
        .then((res) => {
          const sortedYears = res.sort((a, b) => Number(a) - Number(b));
          setYears(sortedYears);
          setSelectedYear(sortedYears[sortedYears.length - 1]);
        })
        .catch((err) => {
          toast({ message: 'Could not retrieve years', intent: 'ERROR' });
          console.log(err.message);
        });
    };
    retrieveBatchYears();
  }, []);

  useEffect(() => {
    // set batch list according to selected year
    const getBatchList = async (): Promise<void> => {
      if (selectedYear) {
        getBatchesByYear(selectedYear)
          .then((res) => {
            res.sort((a, b) => Date.parse(b.startDate) - Date.parse(a.startDate));

            console.log('res', res);
            setBatchList(res);
          })
          .catch((err) => {
            toast({ message: 'Could not retrieve batches', intent: 'ERROR' });
            console.log('>> get batch error', err.message);
          });
      }
    };
    getBatchList();

    setSearchResults(undefined);
  }, [selectedYear]);

  const onSelectBatch = (batch: Batch): void => {
    // Assign redux state to be this batch
    dispatch(setBatch(JSON.stringify(batch)));

    // navigate to notes page
    navigation.navigate('NoteNavigation');
  };

  console.log('Batch Selection');
  return (
    <ScrollView>
      <View style={ { flex: 1.25 } }>
        <HorizontalSelector
          data={years}
          initialSelected={years[years.length - 1]}
          onPress={setSelectedYear}
          startAtEnd />
        <View style = {SearchBarStyles.container}>
          <SearchBar batchData={batchList} setBatchList={setSearchResults} />
        </View>
      </View>

      <View style={ { flex: 0.5 }} />

      <View style={ { flex: 8 } }>
        <BatchList batches={searchResults || batchList} onPress={onSelectBatch} />
      </View>
    </ScrollView>
  );
};

export default BatchSelectionScreen;
