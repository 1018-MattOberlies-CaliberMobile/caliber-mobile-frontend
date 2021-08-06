import { StyleSheet } from 'react-native';
import { theme } from './Theme';

const SearchBarStyles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#F26925',
    borderRadius: 5,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    fontWeight: 'bold',
    justifyContent: 'center',
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
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
  container: {
    alignItems: 'center',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    paddingHorizontal: 40,
  },
  textInput: {
    backgroundColor: '#FFFFFF',
    flex: 3,
    flexDirection: 'row',
    fontFamily: 'futura-medium',
    marginRight: 5,
    paddingHorizontal: 5,
    shadowColor: '#000000',
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
});

export default SearchBarStyles;
