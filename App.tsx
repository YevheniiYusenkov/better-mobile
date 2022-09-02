import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParams } from '@better/types';
import { LoginScreen, TestScreen } from '@better/screens';

const Stack = createNativeStackNavigator<RootStackParams>();

export const App: React.FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Login'} component={LoginScreen} />
        <Stack.Screen name={'Test'} component={TestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
