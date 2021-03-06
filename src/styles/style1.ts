/* eslint-disable import/prefer-default-export */
import { StyleSheet } from 'react-native';

export const styles1 = StyleSheet.create({
  break: {
    margin: 5,
  },
  cardBackground: {
    backgroundColor: '#EFEFEF',
    overflow: 'hidden',
    width: '100%',
  },
  cardContainer: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderColor: '#EFEFEF',
    borderTopWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    paddingLeft: 24,
  },
  cardDropdownContainer: {
    bottom: 0,
    padding: 16,
    paddingLeft: 24,
    position: 'absolute',
    width: '100%',
  },
  centeredView: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginTop: 22,
  },
  item: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 5,
    marginVertical: 5,
    padding: 5,
  },
  left: {
    textAlign: 'left',
  },
  leftTxt: {
    fontFamily: 'futura-medium',
    fontSize: 15,
    marginLeft: 5,
    textAlign: 'left',
  },
  noteButton: {
    alignItems: 'center',
    backgroundColor: '#F26925',
    borderRadius: 5,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    paddingHorizontal: 20,
    paddingVertical: 11,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      height: 2,
      width: 2,
    },
    shadowOpacity: 0.2,

    shadowRadius: 2,
    width: 110,
  },
  noteViewSecondaryBar: {
    alignItems: 'center',
    // backgroundColor: '#F26925',
    borderRadius: 5,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    // margin: 10,
    paddingHorizontal: 10,
    shadowColor: '#000000',
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
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
  saveContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  textBox: {
    backgroundColor: '#FFFFFF',
    elevation: 5,
    flex: 1,
    fontFamily: 'futura-medium',

    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    width: '100%',
  },
  textInput: {
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: 'row',
    fontFamily: 'futura-medium',
    marginRight: 5,
    paddingHorizontal: 5,
  },
  textInputSave: {
    color: '#FFFFFF',
    flex: 1,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
