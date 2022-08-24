import { ColorValue } from 'react-native';

type FontSize = number;
type FontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | undefined;

export interface ThemeInterface {
  Colors: {
    Primary: ColorValue;
    Secondary: ColorValue;
    TextPrimary: ColorValue;
  };
  Font: {
    Size: {
      ExtraSmall: FontSize;
      Small: FontSize;
      Normal: FontSize;
      Medium: FontSize;
      Large: FontSize;
    };
    Weight: {
      ExtraLight: FontWeight;
      Light: FontWeight;
      Regular: FontWeight;
      Semibold: FontWeight;
      Bold: FontWeight;
    };
  };
}
