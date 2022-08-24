import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

import { BetterInputCommonStyle } from './input.component.style';

export const Input: React.FC<TextInputProps> = (props): JSX.Element => {
  const commonStyle = BetterInputCommonStyle();

  return (
    <TextInput style={commonStyle.Input} {...props}>
      {props.children}
    </TextInput>
  );
};
