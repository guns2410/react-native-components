import { StyleSheet, Dimensions, PixelRatio, Platform } from 'react-native';
import _ from 'lodash';
import Theme from '../theme';

export const styles = StyleSheet.create({
  'm-0': { margin: 0 },
  'm-5': { margin: 5 },
  'm-10': { margin: 10 },
  'm-15': { margin: 15 },
  'm-20': { margin: 20 },
  'm-25': { margin: 25 },
  'm-30': { margin: 30 },
  'm-h-0': { marginHorizontal: 0 },
  'm-h-5': { marginHorizontal: 5 },
  'm-h-10': { marginHorizontal: 10 },
  'm-h-15': { marginHorizontal: 15 },
  'm-h-20': { marginHorizontal: 20 },
  'm-h-25': { marginHorizontal: 25 },
  'm-h-30': { marginHorizontal: 30 },
  'm-v-0': { marginVertical: 0 },
  'm-v-5': { marginVertical: 5 },
  'm-v-10': { marginVertical: 10 },
  'm-v-15': { marginVertical: 15 },
  'm-v-20': { marginVertical: 20 },
  'm-v-25': { marginVertical: 25 },
  'm-v-30': { marginVertical: 30 },
  'm-t-0': { marginTop: 0 },
  'm-t-5': { marginTop: 5 },
  'm-t-10': { marginTop: 10 },
  'm-t-15': { marginTop: 15 },
  'm-t-20': { marginTop: 20 },
  'm-t-25': { marginTop: 25 },
  'm-t-30': { marginTop: 30 },
  'm-l-0': { marginLeft: 0 },
  'm-l-5': { marginLeft: 5 },
  'm-l-10': { marginLeft: 10 },
  'm-l-15': { marginLeft: 15 },
  'm-l-20': { marginLeft: 20 },
  'm-l-25': { marginLeft: 25 },
  'm-l-30': { marginLeft: 30 },
  'm-r-0': { marginRight: 0 },
  'm-r-5': { marginRight: 5 },
  'm-r-10': { marginRight: 10 },
  'm-r-15': { marginRight: 15 },
  'm-r-20': { marginRight: 20 },
  'm-r-25': { marginRight: 25 },
  'm-r-30': { marginRight: 30 },
  'm-b-0': { marginBottom: 0 },
  'm-b-5': { marginBottom: 5 },
  'm-b-10': { marginBottom: 10 },
  'm-b-15': { marginBottom: 15 },
  'm-b-20': { marginBottom: 20 },
  'm-b-25': { marginBottom: 25 },
  'm-b-30': { marginBottom: 30 },
  'p-0': { padding: 0 },
  'p-5': { padding: 5 },
  'p-10': { padding: 10 },
  'p-15': { padding: 15 },
  'p-20': { padding: 20 },
  'p-25': { padding: 25 },
  'p-30': { padding: 30 },
  'p-h-0': { paddingHorizontal: 0 },
  'p-h-5': { paddingHorizontal: 5 },
  'p-h-10': { paddingHorizontal: 10 },
  'p-h-15': { paddingHorizontal: 15 },
  'p-h-20': { paddingHorizontal: 20 },
  'p-h-25': { paddingHorizontal: 25 },
  'p-h-30': { paddingHorizontal: 30 },
  'p-v-0': { paddingVertical: 0 },
  'p-v-5': { paddingVertical: 5 },
  'p-v-10': { paddingVertical: 10 },
  'p-v-15': { paddingVertical: 15 },
  'p-v-20': { paddingVertical: 20 },
  'p-v-25': { paddingVertical: 25 },
  'p-v-30': { paddingVertical: 30 },
  'p-t-0': { paddingTop: 0 },
  'p-t-5': { paddingTop: 5 },
  'p-t-10': { paddingTop: 10 },
  'p-t-15': { paddingTop: 15 },
  'p-t-20': { paddingTop: 20 },
  'p-t-25': { paddingTop: 25 },
  'p-t-30': { paddingTop: 30 },
  'p-l-0': { paddingLeft: 0 },
  'p-l-5': { paddingLeft: 5 },
  'p-l-10': { paddingLeft: 10 },
  'p-l-15': { paddingLeft: 15 },
  'p-l-20': { paddingLeft: 20 },
  'p-l-25': { paddingLeft: 25 },
  'p-l-30': { paddingLeft: 30 },
  'p-r-0': { paddingRight: 0 },
  'p-r-5': { paddingRight: 5 },
  'p-r-10': { paddingRight: 10 },
  'p-r-15': { paddingRight: 15 },
  'p-r-20': { paddingRight: 20 },
  'p-r-25': { paddingRight: 25 },
  'p-r-30': { paddingRight: 30 },
  'p-b-0': { paddingBottom: 0 },
  'p-b-5': { paddingBottom: 5 },
  'p-b-10': { paddingBottom: 10 },
  'p-b-15': { paddingBottom: 15 },
  'p-b-20': { paddingBottom: 20 },
  'p-b-25': { paddingBottom: 25 },
  'p-b-30': { paddingBottom: 30 },
  'font-exo': {
    fontFamily: 'Exo 2',
  },
  'font-exo-bold': {
    fontFamily: 'Exo2-Bold',
  },
  'font-exo-light': {
    fontFamily: 'Exo2-Light',
  },
  'font-exo-medium': {
    fontFamily: 'Exo2-Medium',
  },
  'font-exo-semi-bold': {
    fontFamily: 'Exo2-SemiBold',
  },
  'font-exo-thin': {
    fontFamily: 'Exo2-Thin',
  },
  'font-bariol': {
    fontFamily: 'Bariol',
  },
  'font-bebas': {
    fontFamily: 'BebasNeue',
  },
  font: {
    fontFamily: 'OpenSans',
  },
  'font-bold': {
    fontFamily: 'OpenSans-Bold',
  },
  'font-extra-bold': {
    fontFamily: 'OpenSans-Extrabold',
  },
  'font-semi-bold': {
    fontFamily: 'OpenSans-Semibold',
  },
  'font-light': {
    fontFamily: 'OpenSans-Light',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#FFFFFF',
  },
  'center-align': {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinner: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  'font-xxl': {
    fontSize: 56,
  },
  'font-xl': {
    fontSize: 48,
  },
  'font-l': {
    fontSize: 32,
  },
  'font-10': { fontSize: 10 },
  'font-12': { fontSize: 12 },
  'font-14': { fontSize: 14 },
  'font-16': { fontSize: 16 },
  'font-18': { fontSize: 18 },
  'font-20': { fontSize: 20 },
  'transparent-bg': {
    backgroundColor: 'transparent',
  },
  'font-white': {
    color: Theme.white,
  },
  'font-white-lightest': {
    color: Theme.baseLightest
  },
  'font-white-light': {
    color: Theme.baseLight
  },
  'font-white-lighter': {
    color: Theme.baseLighter
  },
  'font-base': {
    color: Theme.base,
  },
  'text-center': {
    justifyContent: 'center',
    alignItems: 'center',
  },
  'full-width': {
    alignSelf: 'stretch',
  },
  'width-100': {
    width: Dimensions.get('window').width,
  },
  'bg-white': {
    backgroundColor: Theme.white,
  },
  'bg-primary': {
    backgroundColor: Theme.primary,
  },
  'login-container': {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 56,
    borderTopWidth: 1,
    borderTopColor: Theme.baseLighter,
  },
  'navigator-content': {
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
  },
  'card-actions': {
    flex: 1,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: Theme.baseLighter,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
  },
  markdownText: { color: '#000', fontFamily: 'OpenSans' },
  markdownHeader: {
    fontFamily: 'Exo 2',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 20,
  },
  featuredImage: {
    width: Dimensions.get('window').width - 20,
    height: (Dimensions.get('window').width - 20) / (16 / 9),
  },
  toolbar: {
    ...Theme.toolbar,
  },
  selectedTab: {
    color: Theme.primary,
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  'border-rounded': {
    borderRadius: 999,
    borderWidth: 1,
    borderColor: Theme.baseLight,
  },
  'border-light': {
    borderWidth: 1,
    borderColor: Theme.baseLighter,
  },
  rounded: {
    borderRadius: 7,
  },
  raised: {
    elevation: 2,
    shadowColor: Theme.inverse,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
  },
  navbar: {
    height: 56,
    borderBottomWidth: 1,
    borderBottomColor: Theme.baseLighter,
  },
  'navbar-chat': {
    height: Platform.OS === 'ios' ? 76 : 56,
    paddingTop: Platform.OS === 'ios' ? 20 : null,
  },
  'drawer-selected': {
    backgroundColor: Theme.baseLightest,
  }
});

export const css = (classes, additionalStyles = null) => {
  let arr = classes.split(' ');
  let returnArray = [];
  _.forEach(arr, (val) => styles[val] ? returnArray.push(styles[val]) : {});
  if (additionalStyles) returnArray.push(additionalStyles);
  return returnArray;
};
