/* eslint-disable import/prefer-default-export */
import { StyleSheet } from 'react-native';

export const styles1 = StyleSheet.create({
  break: {
    margin: 5,
  },
  button: {
    backgroundColor: '#F26925',
  },
  centeredView: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginTop: 22,
  },
  container: {
    alignItems: 'center',
    flex: 1,
  },
  item: {
    backgroundColor: '#D3D3D3',
    marginHorizontal: 5,
    marginVertical: 5,
    padding: 5,
  },
  left: {
    textAlign: 'left',
  },
  leftTxt: {
    fontSize: 15,
    marginLeft: 5,
    textAlign: 'left',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    paddingHorizontal: 40,
  },
  row2: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 10,
    justifyContent: 'flex-end',
  },
  textInput: {
    borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
    marginRight: 5,
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
