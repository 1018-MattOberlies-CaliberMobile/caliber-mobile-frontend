import { StyleSheet } from 'react-native';
import { theme } from './Theme';

const LoginPageStyles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    fontWeight: 'bold',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
  container: {
    backgroundColor: 'white',
    padding: 10,
  },
  image: {
    height: 40,
    marginBottom: 8,
    resizeMode: 'contain',
    width: 100,
  },
  imageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    height: 100,
    justifyContent: 'center',
    width: '100%',
  },
  inputField: {
    borderColor: theme.colors.secondary,
    borderWidth: 1,
    flex: 3,
    flexDirection: 'row',
    fontFamily: 'futura-medium',
    marginRight: 5,
    paddingHorizontal: 5,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
});

export default LoginPageStyles;
