import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Batch from '../models/batch';
import BatchListStyles from '../styles/BatchListStyles';

type Props = {
  batch: Batch,
  onPress: (batch: Batch) => void,
}

const BatchCard: React.FC<Props> = ({ batch, onPress }) => (
  <TouchableOpacity onPress={(): void => onPress(batch)} style={BatchListStyles.card}>
    <Text style={BatchListStyles.cardText}>{batch.batchTitle} </Text>
    <Text style={BatchListStyles.cardText}>Trainer:  {batch.trainers[0]?.username} </Text>
  </TouchableOpacity>
);

export default BatchCard;
