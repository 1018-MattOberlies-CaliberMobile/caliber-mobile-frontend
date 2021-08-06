import { StyleSheet } from 'react-native';
import { create } from 'react-native-pixel-perfect';
import { theme } from './Theme';

// my computer screen resolution
const designResolution = {
  width: 1920,
  height: 1080,
};

const perfectSize = create(designResolution);
// height / width
const logoAspectRatio = 94 / 300;
const logoWidth = perfectSize(300);
const logoHeight = logoWidth * logoAspectRatio;

const LoginPageStyles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    fontWeight: 'bold',
    justifyContent: 'center',
    margin: 20,
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
    height: logoHeight,
    marginTop: 20,
    resizeMode: 'contain',
    width: logoWidth,
  },
  imageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    height: 80,
    justifyContent: 'center',
    width: '100%',
  },
  inputField: {
    borderColor: theme.colors.secondary,
    borderWidth: 1,
    fontFamily: 'futura-medium',
    marginRight: 5,
    paddingHorizontal: 8,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  text: {
    fontFamily: 'futura-medium',
    padding: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
});

export default LoginPageStyles;
