import { StyleSheet } from 'react-native';

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

export default styles;
