import { StyleSheet } from 'react-native';

export const BetterInputCommonStyle = () => {
  return StyleSheet.create<IBetterInputCommonStyle>({
    Input: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderStyle: 'solid',
      borderColor: '#000000',
      borderWidth: 2,
    },
  });
};

export interface IBetterInputCommonStyle {
  Input: any;
}
