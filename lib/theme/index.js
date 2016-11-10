/* @flow */
import ColorManager from './colors';
import { Platform } from 'react-native';

export const primary = ColorManager.get('Indigo');
export const primaryDark = ColorManager.get('Indigo', 700);
export const primaryDarker = ColorManager.get('Indigo', 900);
export const primaryLight = ColorManager.get('Indigo', 300);
export const primaryLighter = ColorManager.get('Indigo', 100);
export const info = ColorManager.get('Blue');
export const infoDark = ColorManager.get('Blue', 700);
export const infoDarker = ColorManager.get('Blue', 900);
export const infoLight = ColorManager.get('Blue', 300);
export const infoLighter = ColorManager.get('Blue', 100);
export const success = ColorManager.get('Green');
export const successDark = ColorManager.get('Green', 700);
export const successDarker = ColorManager.get('Green', 900);
export const successLight = ColorManager.get('Green', 300);
export const successLighter = ColorManager.get('Green', 100);
export const warning = ColorManager.get('Amber');
export const warningDark = ColorManager.get('Amber', 700);
export const warningDarker = ColorManager.get('Amber', 900);
export const warningLight = ColorManager.get('Amber', 300);
export const warningLighter = ColorManager.get('Amber', 100);
export const danger = ColorManager.get('Red');
export const dangerDark = ColorManager.get('Red', 700);
export const dangerDarker = ColorManager.get('Red', 900);
export const dangerLight = ColorManager.get('Red', 300);
export const dangerLighter = ColorManager.get('Red', 100);
export const inverse = '#3B4752';
export const inverseDark = '#313B44';
export const inverseDarker = '#232B31';
export const inverseLight = '#626C75';
export const inverseLighter = '#D8DADC';
export const base = '#202328';
export const baseDark = '#191B1F';
export const baseLight = '#646972';
export const baseLighter = '#e2e2e2';
export const baseLightest = '#FAFAFA';
export const white = '#FFFFFF';
export const black = '#000000';

const defaultTheme = {
  name: 'default',
  primary,
  primaryDark,
  primaryDarker,
  primaryLight,
  primaryLighter,
  info,
  infoDark,
  infoDarker,
  infoLight,
  infoLighter,
  success,
  successDark,
  successDarker,
  successLight,
  successLighter,
  warning,
  warningDark,
  warningDarker,
  warningLight,
  warningLighter,
  danger,
  dangerDark,
  dangerDarker,
  dangerLight,
  dangerLighter,
  inverse,
  inverseDark,
  inverseDarker,
  inverseLight,
  inverseLighter,
  base,
  baseDark,
  baseLight,
  baseLighter,
  baseLightest,
  white,
  black,
  materialColors: (color, variant = '500') => ColorManager.get(color, variant),
  gutter: 10,
  font: Platform.OS === 'ios' ? 'Helvetica' : 'Roboto',
  fontSize: 14,
  splash: {
    colors: [ '#67B26F', '#4ca2cd' ],
    textColor: baseLighter,
    spinnerColor: baseLightest,
  },
  footer: {
    container: {
      flex: 1,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 1.5,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      bottom: 0,
      height: 55,
    },
    backgroundColor: primary,
  },
  button: {
    default: {
      backgroundColor: 'rgba(0,0,0,0)',
      padding: 10,
      marginBottom: 10,
    },
    rounded: {
      borderRadius: 4,
    },
    raised: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 1.5,
      elevation: 4,
    },
    bordered: {
      borderWidth: 1,
    },
    text: {
      fontSize: 16,
      fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'Roboto',
      textAlign: 'center',
      marginBottom: 0,
    },
    badge: {
      position: 'absolute',
      top: -7,
      right: -7,
      width: 20,
      height: 20,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FF0000'
    },
    badgeText: {
      color: white,
      fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'Roboto',
      backgroundColor: danger,
    },
    color: white,
    backgroundColor: primary,
    badgeBackgroundColor: danger,
  }
};

const MergeTheme = (theme = {}) => Object.assign({}, defaultTheme, theme);

export {
  MergeTheme,
  ColorManager,
};

export default defaultTheme;
