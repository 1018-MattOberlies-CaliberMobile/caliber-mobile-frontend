/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable react-native/no-unused-styles */
import React, { Dispatch, SetStateAction, useState } from 'react';
import {
  View, Alert, Text, Pressable, StyleSheet, Platform,
} from 'react-native';
import MobileModal from 'react-native-modal';
import { TechnicalScore } from '../@types';
import StatusIconPressable, { StatusIcon } from './StatusIcon';

const Modal = require('modal-react-native-web');

type Props = {
  onSelect: Dispatch<SetStateAction<number | undefined>>,
}
const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    elevation: 2,
    padding: 10,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  centeredView: {
    alignItems: 'center',

    backgroundColor: 'rgba(0,0,0,0)',
    flex: 1,
    justifyContent: 'center',
  },
  flex: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  modalText: {
    fontFamily: 'futura-bold',
    fontSize: 20,
    marginBottom: 15,
    textAlign: 'center',
  },
  modalView: {
    alignItems: 'center',
    borderRadius: 20,
    borderStyle: 'solid',
    borderWidth: 5,
    flex: 0.25,
    margin: 5,
    padding: 10,
  },
  statusIcon: {
    marginHorizontal: 10,
  },
  textStyle: {
    color: 'white',
    fontFamily: 'futura-medium',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const StatusSelector: React.FC<Props> = (props): JSX.Element => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState<TechnicalScore>(0);
  const onPressHandler = (status: TechnicalScore): void => {
    setModalVisible(!modalVisible);
    setSelected(status);
  };
  const ModalViewer = (): JSX.Element => (
    <Pressable accessibilityLabel={ 'Status Options' } onPress={(): void => setModalVisible(!modalVisible)}>
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
