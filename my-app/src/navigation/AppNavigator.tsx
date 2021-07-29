import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppNavStackParamList } from '../@types/types';
import LoginPage from '../screens/LoginPage';
import HomeDrawerNavigator from './HomeDrawerNav';

const Stack = createStackNavigator<AppNavStackParamList>();

/**
 * Main app navigator that hold most main pages
 * @returns Stack Navigator
 */
const AppNavigator: React.FC<unknown> = (): JSX.Element => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    {console.log('App Nav')}
    <Stack.Screen name="Login" component={LoginPage} />
    <Stack.Screen name="HomeDrawer" component={HomeDrawerNavigator} options={{ title: 'Oops!' }} />
  </Stack.Navigator>
);

export default AppNavigator;
