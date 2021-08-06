import { StyleSheet } from 'react-native';
import { theme } from './Theme';

const baseStyle = {
  borderRadius: 5,
  // flex: 1,
  fontSize: 24,
  margin: 3,
  padding: 5,
  paddingHorizontal: 11,
  shadowOffset: {
    width: 3,
    height: 3,
  },
  shadowOpacity: 0.2,
  elevation: 5,
  fontFamily: 'futura-medium',
};

const HorizontalSelectorStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    flexGrow: 1.25,
    justifyContent: 'center',
    marginVertical: 0,
    paddingHorizontal: 10,
  },
  item: {
    ...baseStyle,
    backgroundColor: 'white',
    borderColor: theme.colors.primary,
    borderWidth: 3,
    color: theme.colors.primary,
  },
  selectedItem: {
    ...baseStyle,
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
    borderWidth: 3,
    color: 'white',
  },
  selector: {
    flex: 1.15,
  },
});

export default HorizontalSelectorStyle;
