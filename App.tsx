import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';
import store from './src/redux/store';
import OverallNotesScreen from './src/screens/OverallNotesScreen';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  }
  return (
  /*  <Provider store={store}>
      <SafeAreaView>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaView>
    </Provider> */

    <SafeAreaView>
      <OverallNotesScreen/>
    </SafeAreaView>

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
