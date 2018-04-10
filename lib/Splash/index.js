import React from 'react';
import PropTypes from 'prop-types';
import { StatusBar } from 'react-native';
import View from '../View';
import { css } from '../styles';
import { Text } from 'react-native-animatable';
import NormalText from '../Text';
import { MergeTheme } from '../theme';

export default class Splash extends React.PureComponent {

  constructor (props) {
    super(props);
    this.theme = MergeTheme(props.theme);
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.theme !== nextProps.theme) this.theme = MergeTheme(nextProps.theme)
  }

  render () {
    let gradient = this.props.colors;
    if (gradient.length === 0) gradient = this.theme.splash ? this.theme.splash.colors : [];
    return (
      <View style={css('center-align', this.props.style)} colors={gradient} theme={this.theme}>
        {this.props.text && this.props.animateText === true && (
          <Text {...this.props.textAnimationProps} theme={this.theme}
            style={[ this.theme.splash.text, {
              color: this.theme.splash ? this.theme.splash.textColor : undefined,
            }, this.props.textStyle ]}>
            {this.props.text}
          </Text>
        )}
        {this.props.text && !this.props.animateText === true && (
          <NormalText style={css('font-l m-b-20 font-white transparent-bg text-center', {
            color: this.theme.splash ? this.theme.splash.textColor : undefined,
            ...this.props.textStyle
          })} theme={this.theme}>
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
  theme: PropTypes.object,
  statusBarStyle: PropTypes.oneOf([ 'light-content', 'default' ]),
  textAnimationProps: PropTypes.shape({
    animation: PropTypes.string,
    easing: PropTypes.string,
    iterationCount: PropTypes.string,
  }),
  textStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.number,
  ]),
  animateText: PropTypes.bool,
  colors: PropTypes.array,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.number,
  ]),
  text: PropTypes.string,
};
