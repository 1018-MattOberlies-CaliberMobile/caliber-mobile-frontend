import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Platform, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import Amplify from 'aws-amplify';
import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';
import store from './src/redux/store';
import OverallNotesScreen from './src/screens/OverallNotesScreen';
import WeekNotesScreen from './src/screens/WeekNotesScreen';
import awsmobile from './src/aws-exports';

Amplify.configure(awsmobile);

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  }
  switch (Platform.OS) {
  case 'android':
    return (
      <Provider store={store}>
        <SafeAreaView>
          <OverallNotesScreen/>
        </SafeAreaView>
      </Provider>
    );
  default:
    return (
      <Provider store={store}>
        <SafeAreaView>
          <OverallNotesScreen/>
        </SafeAreaView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  // eslint-disable-next-line react-native/no-unused-styles
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
});
