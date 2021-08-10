import { StyleSheet } from 'react-native';
import { theme } from './Theme';

const BatchListStyles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    elevation: 5,
    marginHorizontal: 7,
    marginVertical: 3,
    paddingVertical: 5,

  },
  cardTextTitle: {
    fontFamily: 'futura-bold',
    fontSize: 20,
    marginLeft: 5,
    textAlign: 'left',
  },
  cardTextTrainer: {
    fontFamily: 'futura-medium',
    fontSize: 20,
    marginLeft: 5,
    textAlign: 'left',
  },
  container: {
    backgroundColor: '#FFFFFF',
    marginTop: 10,
    paddingVertical: 7,
  },
});

export default BatchListStyles;
