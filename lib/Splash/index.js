import React from 'react';
import { StatusBar } from 'react-native';
import View from '../View';
import { css } from '../styles';
import Spinner from '../Spinner';
import { Text } from 'react-native-animatable';

export default class Splash extends React.Component {

  constructor (props, context) {
    super(props);
    this.theme = Object.assign({}, context.theme, props.theme);
  }

  render () {
    let gradient = this.props.colors;
    if (gradient.length === 0) gradient = this.theme.splash.colors;
    return (
      <View style={css('center-align', this.props.style)} colors={gradient}>
        <StatusBar
          backgroundColor={this.theme.primary}
          barStyle={this.props.statusBarStyle} />
        <Text {...this.props.textAnimationProps}
          style={css('font-l m-b-20 font-white transparent-bg text-center font-exo-medium', {
          color: this.theme.splash.textColor,
        })} >
          {this.props.text}
        </Text>
      </View>
    );
  }
}