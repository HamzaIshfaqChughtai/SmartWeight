import { Colors } from './colors';
import { fonts } from './fonts';
import { Platform } from 'react-native';

export const globalStyles = {
  header2: {
    fontFamily: fonts['Rocky-Regular'],
    fontSize: 32,
    color: Colors.white,
    textAlign: 'center',
    letterSpacing: 0.67,
    lineHeight: 38,
    textTransform: "capitalize",
  },
  header6: {
    fontFamily: fonts['Gotham-Book'],
    fontSize: 14,
    color: Colors.white,
    textAlign: 'center',
    letterSpacing: 1.5,
    paddingLeft: 50,
    paddingRight: 50,
  },
  ftueScreenSubHeading: {
    fontFamily: fonts['Gotham-Book'],
    color: Colors.ColorWhite,
    fontSize: 14,
    lineHeight: 14,
    letterSpacing: 0.04,
    textAlign: 'center',
  },
  errorText: {
    fontFamily: fonts['Gotham-Book'],
    fontSize: 14,
    color: 'red',
    textAlign: 'center',
    width: 180,
    textTransform: "capitalize",
  },
  placeholderText: {
    fontFamily: fonts['Gotham-Book'],
    color: Colors.ColorWhite,
    fontSize: 12,
    fontWeight: 'normal',
  },
  newFonts: {
    fontFamily: fonts['Gotham-Book'],
    fontSize: 14,
    color: Colors.ColorWhite,
    lineHeight: 16
  },
  text1: {
    fontFamily: fonts['Gotham-Book'],
    fontSize: 14,
    color: Colors.white,
    textTransform: "capitalize",
  },

}