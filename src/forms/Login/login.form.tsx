import React from 'react';
import { View, Text } from 'react-native';

import { Input } from '@better/components';

export const LoginForm: React.FunctionComponent = (): JSX.Element => {
  return (
    <View>
      <Input placeholder={'Input'}></Input>
      <Input></Input>
      <Text>Hello World!</Text>
    </View>
  );
};
