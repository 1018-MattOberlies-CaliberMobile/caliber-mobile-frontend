import { StyleSheet } from 'react-native';
import { theme } from './Theme';

const BatchListStyles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 7,
    marginVertical: 3,
    paddingVertical: 5,
  },
  cardText: {
    fontFamily: 'futura-medium',
    fontSize: 20,
    marginLeft: 5,
    textAlign: 'left',
  },
  container: {
    backgroundColor: '#B9B9BA',
    paddingVertical: 7,
  },
});

export default BatchListStyles;
