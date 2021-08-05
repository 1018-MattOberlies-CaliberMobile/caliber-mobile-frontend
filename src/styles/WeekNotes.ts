/* eslint-disable import/prefer-default-export */
import { StyleSheet } from 'react-native';
import { theme } from './Theme';

export const modalStyles = StyleSheet.create({
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
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
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
    backgroundColor: 'white',
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

export const pageStyles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: theme.colors.primary,
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 3,
    elevation: 5,
    flexDirection: 'row',
    fontWeight: 'bold',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 5,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.2,
    width: 110,
  },
  buttonRight: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: '100%',
  },
  buttonText: {
    color: theme.colors.primary,
    fontFamily: 'futura-bold',
  },
  centeredView: {
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 25,
    marginVertical: 25,
  },
  header: {
    fontFamily: 'futura-bold',
    fontSize: 15,
    marginBottom: 15,
    marginTop: 30,
  },
  textInput: {
    borderStyle: 'solid',
    borderWidth: 3,
    flex: 1,
    height: 100,
    marginBottom: 25,
    marginTop: 40,
    padding: 15,
    width: '100%',
  },
  textStyle: {
    color: 'white',
    fontFamily: 'futura-medium',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
