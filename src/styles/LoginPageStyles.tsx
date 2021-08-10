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
    borderRadius: 10,
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
    height: logoHeight,
    marginBottom: 100,
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
    // borderColor: theme.colors.secondary,
    // borderWidth: 1,
    color: theme.colors.secondary,
    fontFamily: 'futura-medium',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
    paddingHorizontal: 5,
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
