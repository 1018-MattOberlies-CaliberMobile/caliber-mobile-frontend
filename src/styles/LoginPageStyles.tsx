import { StyleSheet } from 'react-native';
import { theme } from './Theme';

const LoginPageStyles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    fontWeight: 'bold',
    justifyContent: 'center',
    marginTop: 10,
    padding: 15,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
  container: {
    // alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    width: '100%',
  },
  image: {
    height: 100,
    marginBottom: 10,
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
    backgroundColor: '#E8F0FE',
    borderColor: theme.colors.primary,
    borderRadius: 10,
    borderWidth: 3,
    // flex: 3,
    // flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10,
    paddingBottom: 8,
    paddingLeft: 8,
    paddingTop: 8,
    // marginRight: 5,
    // paddingHorizontal: 5,
    width: '100%',
  },
  label: {
    color: theme.colors.secondary,
    fontFamily: 'futura-medium',
    fontSize: 16,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
});

export default LoginPageStyles;
