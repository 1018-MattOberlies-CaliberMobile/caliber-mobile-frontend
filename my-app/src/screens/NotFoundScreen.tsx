import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';

import { RootStackParamList } from '../@types/types';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    color: '#2e78b7',
    fontSize: 14,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const NotFoundScreen = ({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>): JSX.Element => (
  <View style={styles.container}>
    <Text style={styles.title}>This screen doesn&apos;t exist.</Text>
    <TouchableOpacity onPress={(): void => navigation.replace('AppNavigator')} style={styles.link}>
      <Text style={styles.linkText}>Go to home screen!</Text>
    </TouchableOpacity>
  </View>
);

export default NotFoundScreen;
