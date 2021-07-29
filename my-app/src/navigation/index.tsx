/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../@types/types';
import BottomTabNavigator from './NotesNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import AppNavigator from './AppNavigator';

const Stack = createStackNavigator<RootStackParamList>();
function RootNavigator() {
  console.log('root');
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={AppNavigator} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      >
      <RootNavigator />
    </NavigationContainer>
  );
}
