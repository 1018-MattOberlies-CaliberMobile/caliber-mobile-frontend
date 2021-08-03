import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useDispatch } from 'react-redux';
import HorizontalSelector from '../components/HorizontalSelector';
import { SearchBar } from '../components/SearchBar';
import { getBatchYears, getBatchesByYear } from '../remote/CaliberBatchAPI';
import Batch from '../models/batch';
import { styles1 } from '../styles/style1';
import BatchList from '../components/BatchList';
import { setBatch } from '../redux/slices/batch.slice';
import { useToast } from 'react-native-styled-toast';

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
          setYears(res);
          setSelectedYear(res[0]);
        })
        .catch((err) => {
          console.log('catch');
          toast({ message: 'Could not retrieve years', intent: 'ERROR' });
        });
    };
    retrieveBatchYears();
  }, []);

  useEffect(() => {
    // set batch list according to selected year
    const getBatchList = async (): Promise<void> => {
      if (selectedYear) {
        getBatchesByYear(selectedYear)
          .then(setBatchList)
          .catch((err) => {
            toast({ message: 'Could not retrieve batches', intent: 'ERROR' });
          });
      }
    };
    getBatchList();

    setSearchResults(undefined);
  }, [selectedYear]);

  const onSelectBatch = (batch: Batch): void => {
    console.log(batch);
    // Assign redux state to be this batch
    dispatch(setBatch(batch));

    // navigate to notes page
    navigation.navigate('NoteNavigation');
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
