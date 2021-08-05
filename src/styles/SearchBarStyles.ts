import { StyleSheet } from 'react-native';

const SearchBarStyles = StyleSheet.create({
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
    borderWidth: 1,
    flex: 3,
    flexDirection: 'row',
    fontFamily: 'futura-medium',
    marginRight: 5,
    paddingHorizontal: 5,
  },
});

export default SearchBarStyles;
