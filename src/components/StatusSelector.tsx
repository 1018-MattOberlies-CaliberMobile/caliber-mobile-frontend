/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable react-native/no-unused-styles */
import React, { Dispatch, SetStateAction, useState } from 'react';
import {
  View, Text, Pressable, Platform,
} from 'react-native';
import MobileModal from 'react-native-modal';
import { TechnicalScore } from '../@types';
import StatusIcon from './StatusIcon';

const Modal = require('modal-react-native-web');

type Props = {
  selected: TechnicalScore,
  onSelect: Dispatch<SetStateAction<TechnicalScore>>,
}

const StatusSelector: React.FC<Props> = ({ selected, onSelect }): JSX.Element => {
  const [modalVisible, setModalVisible] = useState(false);
  const onPressHandler = (status: TechnicalScore): void => {
    setModalVisible(!modalVisible);
    // console.log('>> Pressed', status);
    onSelect(status);
  };
  const ModalViewer = (): JSX.Element => (
    <Pressable testID={ 'Status Options' } onPress={(): void => setModalVisible(!modalVisible)}>
      <StatusIcon size={35} status={selected} />
    </Pressable>
  );
  const StatusOptions:React.FC<{ size: number }> = ({ size }): JSX.Element => (

    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>Select Status</Text>

        <View style={styles.flex}>
          <StatusIconPressable style={styles.statusIcon} onPress={onPressHandler} size={size} status={0}/>
          <StatusIconPressable style={styles.statusIcon} onPress={onPressHandler} size={size} status={1}/>
          <StatusIconPressable style={styles.statusIcon} onPress={onPressHandler} size={size} status={2}/>
          <StatusIconPressable style={styles.statusIcon} onPress={onPressHandler} size={size} status={3}/>
          <StatusIconPressable style={styles.statusIcon} onPress={onPressHandler} size={size} status={4}/>
        </View>

      </View>
    </View>
  );
  return (
    <>
      {Platform.OS === 'web' ? (
        <View >

          <Modal
            visible={modalVisible}
            onRequestClose={(): void => {
              setModalVisible(!modalVisible);
            }}>
            <StatusOptions size={50}/>
          </Modal>

          <ModalViewer/>
        </View>
      )
        : (
          <View >
            <MobileModal
              backdropColor="transparent"
              isVisible={modalVisible}
            >
              <StatusOptions size={50}/>
            </MobileModal>

            <ModalViewer/>
          </View>
        )}

    </>
  );
};

export default StatusSelector;
