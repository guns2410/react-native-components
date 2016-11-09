var fs = require('fs');
var path = require('path');
var register = require('babel-core/register');
var chai = require('chai');
var chaiEnzyme = require('chai-enzyme');
// Ignore all node_modules except these
const modulesToCompile = [
  'react-native',
  'react-native-linear-gradient',
  'react-native-animatable',
].map((moduleName) => new RegExp(`/node_modules/${moduleName}`));
const rcPath = path.join(__dirname, '..', '.babelrc');
const source = fs.readFileSync(rcPath).toString();
const config = JSON.parse(source);
config.ignore = function(filename) {
  if (!(/\/node_modules\//).test(filename)) {
    return false;
  } else {
    const matches = modulesToCompile.filter((regex) => regex.test(filename));
    const shouldIgnore = matches.length === 0;
    return shouldIgnore;
  }
}
register(config);
// Setup globals / chai
global.__DEV__ = true;
global.expect = chai.expect;
chai.use(chaiEnzyme());
// Setup mocks
require('react-native-mock/mock');
const React = require('react-native')
React.Platform.OS = process.env.PLATFORM || 'ios';
React.NavigationExperimental = {
  AnimatedView: React.View
};