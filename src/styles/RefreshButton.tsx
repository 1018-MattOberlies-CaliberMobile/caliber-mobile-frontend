import { StyleSheet } from 'react-native';
import { theme } from './Theme';

const RefreshButton = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
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
    marginLeft: 10,
  },
});

export default RefreshButton;
