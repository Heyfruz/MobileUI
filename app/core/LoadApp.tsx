import { useEffect } from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';

import { AppNavigator, AuthNavigator } from 'navigation';
import { useSelector } from 'store';
import { pallets } from 'constant';

/**
 * All app loading logics, including splashScreenHide, required API calls, rehydration, navigation states, asset loading, theming etc. are meant to be here
 */

export default function LoadApp(): JSX.Element {
  const { isAuthenticated } = useSelector(state => state.auth);

  useEffect(() => {
    console.log('LoadApp', { isAuthenticated });
  }, [isAuthenticated]);

  const theme: Theme = {
    colors: {
      background: pallets.white,
      border: pallets.border,
      card: pallets.card,
      notification: pallets.notification,
      primary: pallets.primary,
      text: pallets.text,
    },
    dark: false,
  };

  return (
    <>
      <NavigationContainer {...{ theme }}>
        <SafeAreaProvider>
          {isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
          <StatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent
          />
        </SafeAreaProvider>
      </NavigationContainer>
    </>
  );
}
