/* eslint-disable global-require */
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { create } from 'react-native-pixel-perfect';

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

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFFFFF',
    padding: perfectSize(40),
    textAlign: 'center',
  },
  logo: {
    height: logoHeight,
    width: logoWidth,
  },
});

type Props = {

}

const Banner: React.FC<Props> = () => (
  <View style={styles.header}>
    <Image style={styles.logo} source={require('../../assets/images/rev-logo.png')}/>
  </View>
);

export default Banner;
