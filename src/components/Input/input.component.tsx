import React from 'react';
import { TextInput } from 'react-native';

import { BetterInputCommonStyle } from './input.component.style';

export const BetterInput = () => {
  const commonStyle = BetterInputCommonStyle();

  return <TextInput style={commonStyle.Input}></TextInput>;
};
