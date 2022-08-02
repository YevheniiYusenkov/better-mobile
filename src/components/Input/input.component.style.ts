import { StyleSheet } from 'react-native';

export const BetterInputCommonStyle = () => {
  return StyleSheet.create<IBetterInputCommonStyle>({
    Input: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};

export interface IBetterInputCommonStyle {
  Input: any;
}
