import { DefaultTheme } from '@react-navigation/native';
import { ThemeInterface } from '../interafaces/theme.interface';

export const LightTheme: ThemeInterface = {
  Colors: {
    Primary: '#ffffff',
    Secondary: '#2255c7',
    TextPrimary: '#000000',
    ...DefaultTheme.colors,
  },
  Font: {
    Weight: {
      ExtraLight: '100',
      Light: '300',
      Regular: '600',
      Semibold: '700',
      Bold: '900',
    },
    Size: {
      ExtraSmall: 9,
      Small: 12,
      Normal: 14,
      Medium: 18,
      Large: 24,
    },
  },
};
