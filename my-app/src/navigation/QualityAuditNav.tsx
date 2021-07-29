import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { QANavStackParamList } from '../@types/types';
import NotesNavigator from './NotesNavigator';
import BatchSelectionScreen from '../screens/BatchSelectionScreen';

const Stack = createStackNavigator<QANavStackParamList>();

/**
 * This is the navigator that holds most main pages
 * @returns Stack Navigator
 */
const QualityAuditNavigator: React.FC<unknown> = (): JSX.Element => (
  <Stack.Navigator
    initialRouteName='BatchSelection'
    screenOptions={{ headerShown: false }}>
    {console.log('Quality Nav')}
    <Stack.Screen name="BatchSelection" component={BatchSelectionScreen} />
    <Stack.Screen name="NoteNavigation" component={NotesNavigator} />
  </Stack.Navigator>
);

export default QualityAuditNavigator;
