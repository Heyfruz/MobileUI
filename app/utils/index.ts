import { RouteProp } from '@react-navigation/native';

import { TabRoutes } from 'navigation/types';

type TabIcon = Extract<IconName, 'user' | 'chart-square'>;

export const getTabIcon = (
  route: RouteProp<TabRoutes, keyof TabRoutes>,
): TabIcon => {
  switch (route.name) {
    case 'Insight':
      return 'chart-square';
    case 'Profile':
      return 'user';
    default:
      return 'chart-square';
  }
};

export * from './validation';
