import React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { LoginScreenNavigationProps } from './login.screen.interfaces';

export const LoginScreen: React.FunctionComponent = (): JSX.Element => {
  const navigation = useNavigation<LoginScreenNavigationProps>();

  const goToTestScreen = () => {
    navigation.navigate('Test');
  };

  return <Button title={'Go to Test Screen'} onPress={goToTestScreen}></Button>;
};
