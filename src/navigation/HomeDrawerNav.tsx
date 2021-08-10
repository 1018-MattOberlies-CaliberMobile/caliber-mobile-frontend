import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeNavStackParamList } from '../@types/types';
import LoginPage from '../screens/LoginPage';
import NotesNavigator from './NotesNavigator';
import QualityAuditNavigator from './QualityAuditNav';

const Drawer = createDrawerNavigator<HomeNavStackParamList>();

/**
 * This is the navigator that holds most main pages
 * @returns Stack Navigator
 */
const HomeDrawerNavigator: React.FC<unknown> = (): JSX.Element => (
  <Drawer.Navigator screenOptions={{ headerShown: false }}>
    <Drawer.Screen name="QualityAudit" component={QualityAuditNavigator} />
  </Drawer.Navigator>
);

export default HomeDrawerNavigator;
