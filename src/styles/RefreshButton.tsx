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
    width: 105,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 0.25,
    marginLeft: 10,
  },
});

export default RefreshButton;
