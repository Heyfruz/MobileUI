import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';

import { TabRoutes } from '../types';

import { Insight, Profile } from 'screens';
import { Text } from 'components';
import { Icon } from 'assets';
import { getTabIcon } from 'utils';

const { Screen, Navigator } = createBottomTabNavigator<TabRoutes>();

export default function Tab(): JSX.Element {
  return (
    <Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          const name = getTabIcon(route);

          return <Icon {...{ color, name, size }} />;
        },
        tabBarLabel: ({ color, focused }) => {
          return (
            <Text
              variant={focused ? 'bold' : 'light'}
              size={12}
              color={color}
              style={[Platform.OS === 'android' ? { padding: 10 } : {}]}>
              {route.name}
            </Text>
          );
        },
        tabBarStyle: [Platform.OS === 'android' && { height: 60, padding: 10 }],
      })}>
      <Screen name="Insight" component={Insight} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
}
