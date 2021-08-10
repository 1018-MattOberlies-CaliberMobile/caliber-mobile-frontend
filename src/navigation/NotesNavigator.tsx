/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { NotesTabParamList } from '../@types/types';
import WeekNotesScreen from '../screens/WeekNotesScreen';
import OverallNotesScreen from '../screens/OverallNotesScreen';

function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }): JSX.Element {
  // eslint-disable-next-line react-native/no-inline-styles
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const BottomTab = createBottomTabNavigator<NotesTabParamList>();

const NotesNavigator: React.FC<unknown> = (): JSX.Element => {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName='WeekNotes'
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name='WeekNotes'
        component={WeekNotesScreen}
        options={{
          tabBarIcon: ({ color }): JSX.Element => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name='OverallNotes'
        component={OverallNotesScreen}
        options={{
          tabBarIcon: ({ color }): JSX.Element => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default NotesNavigator;
