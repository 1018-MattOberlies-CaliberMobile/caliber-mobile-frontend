import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';
import store from './src/redux/store';
import OverallNotesScreen from './src/screens/OverallNotesScreen';
import WeekNotesScreen from './src/screens/WeekNotesScreen';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  }
  const appTheme = {
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
      <ThemeProvider theme={appTheme}>
        <ToastProvider position="BOTTOM">
          <SafeAreaProvider>
            <Navigation colorScheme={colorScheme} />
            {/* <OverallNotesScreen/> */}
            {/* <WeekNotesScreen batchId={'123'}/> */}
            <StatusBar />
          </SafeAreaProvider>
        </ToastProvider>
      </ThemeProvider>
    </Provider>
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
