import React from 'react';
import { ScrollView } from 'react-native';
import Batch from '../models/batch';
import BatchCard from './BatchCard';

type Props = {
  batches: Batch[],
  onPress: (batch: Batch) => void,
}

const BatchList: React.FC<Props> = ({ batches, onPress }) => (
  <ScrollView testID='batch-list'>
    {
      batches.map((batch) => (
        <BatchCard key={batch.batchId} batch={batch} onPress={onPress} />
      ))
    }
  </ScrollView>
);

export default BatchList;
