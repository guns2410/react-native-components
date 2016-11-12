import React from 'react';
import { StatusBar } from 'react-native';
import View from '../View';
import { css } from '../styles';
import { Text } from 'react-native-animatable';
import NormalText from '../Text';
import { MergeTheme } from '../theme';

export default class Splash extends React.Component {

  constructor (props) {
    super(props);
    this.theme = MergeTheme(props.theme);
  }

  render () {
    let gradient = this.props.colors;
    if (gradient.length === 0) gradient = this.theme.splash ? this.theme.splash.colors : [];
    return (
      <View style={css('center-align', this.props.style)} colors={gradient}>
        <StatusBar
          backgroundColor={this.theme.primary}
          barStyle={this.props.statusBarStyle} />
        {this.props.text && this.props.animateText === true && (
          <Text {...this.props.textAnimationProps}
            style={css('font-l m-b-20 font-white transparent-bg text-center', {
              color: this.theme.splash ? this.theme.splash.textColor : undefined,
              ...this.props.textStyle
            })}>
            {this.props.text}
          </Text>
        )}
        {this.props.text && !this.props.animateText === true && (
          <NormalText style={css('font-l m-b-20 font-white transparent-bg text-center', {
            color: this.theme.splash ? this.theme.splash.textColor : undefined,
            ...this.props.textStyle
          })}>
            {this.props.text}
          </NormalText>
        )}
        {this.props.children}
      </View>
    );
  }
}

Splash.defaultProps = {
  theme: {},
  statusBarStyle: 'light-content',
  textAnimationProps: {
    animation: 'pulse',
    easing: 'ease-out',
    iterationCount: 'infinite',
  },
  textStyle: {},
  animateText: true,
  colors: [],
  style: {},
};

Splash.propTypes = {
  theme: React.PropTypes.object,
  statusBarStyle: React.PropTypes.oneOf([ 'light-content', 'default' ]),
  textAnimationProps: React.PropTypes.shape({
    animation: React.PropTypes.string,
    easing: React.PropTypes.string,
    iterationCount: React.PropTypes.string,
  }),
  textStyle: React.PropTypes.object,
  animateText: React.PropTypes.bool,
  colors: React.PropTypes.array,
  style: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array,
    React.PropTypes.number,
  ]),
};
