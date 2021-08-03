import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Platform, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
<<<<<<< HEAD
import { ThemeProvider } from 'styled-components';
import { ToastProvider } from 'react-native-styled-toast';
=======
import Amplify from 'aws-amplify';
>>>>>>> 7e3525ba6eec36b633f76b17b7b03ed72ef9dea7
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

  const theme = {
    space: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48],
    colors: {
      text: '#474C55',
      background: '#FFFFFF',
      border: '#E2E8F0',
      muted: '#F0F1F3',
      success: '#7DBE31',
      error: '#FC0021',
      info: '#00FFFF',
    },
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ToastProvider position="BOTTOM">
          <SafeAreaProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </SafeAreaProvider>
        </ToastProvider>
      </ThemeProvider>
    </Provider>

  // <OverallNotesScreen />
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
