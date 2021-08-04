/* eslint-disable import/prefer-default-export */
import { StyleSheet } from 'react-native';

export const styles1 = StyleSheet.create({
  break: {
    margin: 5,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#F26925',
    flex: 1,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
  cardBackground: {
    backgroundColor: '#EFEFEF',
    overflow: 'hidden',
  },
  cardContainer: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#EFEFEF',
    borderTopWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '1rem',
    paddingLeft: '1.5rem',
  },
  cardDropdownContainer: {
    bottom: 0,
    padding: '1rem',
    paddingLeft: '1.5rem',
    position: 'absolute',
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
  textBox: {
    backgroundColor: '#f2f2f2',
    flex: 0.3,
    // width: 
    shadowColor: '#000000',
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  textInput: {
    borderWidth: 1,
    flex: 3,
    flexDirection: 'row',
    fontFamily: 'futura-medium',
    marginRight: 5,
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  noteButton: {
    
  }
});
