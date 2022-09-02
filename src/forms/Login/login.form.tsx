import React from 'react';
import { View, Text, Button } from 'react-native';

import { Input } from '@better/components';

export const LoginForm: React.FunctionComponent = (): JSX.Element => {
  return (
    <View>
      <Input placeholder={'Input'}></Input>
      <Input></Input>
      <Button title={'Go to Test Screen'}></Button>
      <Text>Hello World!</Text>
    </View>
  );
};
