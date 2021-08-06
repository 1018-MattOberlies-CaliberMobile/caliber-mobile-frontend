import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Batch from '../models/batch';
import { styles1 } from '../styles/style1';

type Props = {
  batch: Batch,
  onPress: (batch: Batch) => void,
}

const BatchCard: React.FC<Props> = ({ batch, onPress }) => (
  <TouchableOpacity onPress={(): void => onPress(batch)}style={styles1.item}>
    <Text style={styles1.leftTxt}>{batch.batchTitle} </Text>
    <Text style={styles1.leftTxt}>Trainer:  {batch.trainers[0]?.username} </Text>
  </TouchableOpacity>
);

export default BatchCard;
