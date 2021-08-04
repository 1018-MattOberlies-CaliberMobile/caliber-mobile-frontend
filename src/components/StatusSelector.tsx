import React, { Dispatch, SetStateAction, useState } from 'react';
import {
  View, Alert, Text, Pressable, StyleSheet, Platform,
} from 'react-native';
import MobileModal from 'react-native-modal' ;
import { TechnicalScore } from '../@types';
import StatusIcon from './StatusIcon';

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
    flex: 1,
   
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalView: {
    flex: 0.25,
    alignItems: 'center',
    borderRadius: 20,
    borderStyle: 'solid',
    borderWidth: 5,
    margin: 5,
    padding: 10,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  flex: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%'
  }
});

const StatusSelector: React.FC<Props> = (props): JSX.Element => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState<TechnicalScore>(0);
  return (
    <>
      {Platform.OS === 'web' ? (
        <View >
          <Modal
            visible={modalVisible}
            onRequestClose={(): void => {
              setModalVisible(!modalVisible);
            }}>

            <View style={styles.centeredView}>
              <View style={styles.modalView}>
               
                
                <View style={styles.flex}>
                  <Text  style={styles.modalText}>Select Status</Text>
                  <StatusIcon onPress={setSelected} size={50} status={0}/>
                  <StatusIcon onPress={setSelected} size={50} status={1}/>
                  <StatusIcon onPress={setSelected} size={50} status={2}/>
                  <StatusIcon onPress={setSelected} size={50} status={3}/>
                  <StatusIcon onPress={setSelected} size={50} status={4}/>
                </View>

                <Text onPress={(): void => setModalVisible(!modalVisible)} >Hide Modal</Text>
              </View>
            </View>
          </Modal>
          
          <Text onPress={(): void => setModalVisible(!modalVisible)} >Show Modal</Text>
        </View>
    )
  : (
<View style={{backgroundColor: 'yellow'}}>
        <MobileModal
          backdropColor="transparent"
          isVisible={modalVisible}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Text style={styles.modalText}>Select Status</Text>
              <View style={styles.flex}>
                
                <StatusIcon onPress={setSelected} size={35} status={0}/>
                <StatusIcon onPress={setSelected} size={35} status={1}/>
                <StatusIcon onPress={setSelected} size={35} status={2}/>
                <StatusIcon onPress={setSelected} size={35} status={3}/>
                <StatusIcon onPress={setSelected} size={35} status={4}/>
              </View>
              {/* <Text onPress={(): void => setModalVisible(!modalVisible)}>Hide Modal</Text> */}
            </View>
          </View>
        </MobileModal>
        
          <Text onPress={(): void => setModalVisible(!modalVisible)} >Show Modal</Text>
      </View>
  )}
     
    </>
  );
};

export default StatusSelector;
