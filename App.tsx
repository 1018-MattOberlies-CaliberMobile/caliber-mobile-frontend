import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Amplify from 'aws-amplify';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import awsmobile from './src/aws-exports';
import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';
import store from './src/redux/store';
import OverallNotesScreen from './src/screens/OverallNotesScreen';
import WeekNotesScreen from './src/screens/WeekNotesScreen';

Amplify.configure(awsmobile);

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  }
  return (
  /*  <Provider store={store}>
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    </Provider> */

    // <OverallNotesScreen/>
    <WeekNotesScreen batchId='1'/>
  );
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
