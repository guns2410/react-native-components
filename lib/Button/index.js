import React from 'react';
import { TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import View from '../View';
import Text from '../Text';
import { MergeTheme } from '../theme';
import { renderChildren } from '../helpers';

export default class Button extends React.Component {
  constructor (props) {
    super(props);
    this.theme = MergeTheme(props.theme);
  }

  get touchComponent() {
    if (Platform.OS === 'android') return TouchableNativeFeedback;
    return TouchableOpacity
  }

  get touchComponentProps () {
    let props = {
      style: [this.rootButtonStyles, this.props.style],
      ...this.props
    };

    if (Platform.OS === 'android') {
      props.useForeground = true;
      props.background = TouchableNativeFeedback.Ripple(this.textStyles.color, true);
    }

    return props;
  }

  get textStyles () {
    if (!this.props.transparent && !this.props.bordered)
      return {
        color: this.props.textColor ? this.props.textColor : this.theme.button.color
      }
    else
      return {
        color: this.props.backgroundColor ? this.props.backgroundColor : this.theme.button.backgroundColor
    };
  }

  get rootButtonStyles () {
    let styles = { ...this.theme.button.default };

    if (this.props.raised) styles = Object.assign({}, styles, this.theme.button.raised);

    if (!this.props.radius) styles.borderRadius = this.theme.button.rounded.borderRadius;
    else styles.borderRadius = this.props.radius;

    if (!this.props.backgroundColor && !this.props.transparent && !this.props.bordered)
      styles.backgroundColor = this.theme.primary;

    if (this.props.backgroundColor && !this.props.transparent && !this.props.bordered)
      styles.backgroundColor = this.props.backgroundColor;

    if (!this.props.backgroundColor && this.props.bordered)
      styles.borderColor = this.props.primary;

    return styles;
  }

  get badgeStyles () {
    if (this.props.badgeBackgroundColor) return { backgroundColor: this.props.badgeBackgroundColor };
    return { backgroundColor: this.theme.button.badgeBackgroundColor };
  }

  badgeComponent () {
    return (
      <View
        style={[ this.theme.button.badge, this.badgeStyles, this.props.badgeStyles ]}
        theme={this.theme}>
        <Text
          style={[ this.theme.button.badgeText, {
            color: this.props.badgeColor,
            marginBottom: 0,
          }, this.props.badgeTextStyle ]}
          theme={this.theme}>
          {this.props.badge >= 10 && '+' || this.props.badge.toString()}
        </Text>
      </View>
    )
  }

  render () {
    const TouchComponent = this.touchComponent;
    let TouchComponentProps = this.touchComponentProps;

    return (
      <TouchComponent
        {...TouchComponentProps}>
        <View
          style={this.props.viewStyle}
          theme={this.theme}>
          <Text
            style={[ this.theme.button.text, this.textStyles, this.props.textStyle ]}
            theme={this.theme}>
            {renderChildren(this.props.children, this.theme)}
          </Text>
          {this.props.badge > 0 && this.badgeComponent()}
        </View>
      </TouchComponent>
    );
  }
}

Button.defaultProps = {
  style: {},
  textStyle: {},
  viewStyle: {},
  badgeStyle: {},
  badgeTextStyle: {},
  transparent: false,
  bordered: false,
  raised: false,
  badge: 0,
  badgeColor: '#FFFFFF',
  theme: {},
};

Button.propTypes = {
  style: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object,
  ]),
  textStyle: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object,
  ]),
  viewStyle: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object,
  ]),
  badgeStyle: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object,
  ]),
  badgeTextStyle: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object,
  ]),
  radius: React.PropTypes.number,
  backgroundColor: React.PropTypes.string,
  textColor: React.PropTypes.string,
  transparent: React.PropTypes.bool,
  bordered: React.PropTypes.bool,
  raised: React.PropTypes.bool,
  badge: React.PropTypes.number,
  badgeColor: React.PropTypes.string,
  badgeBackgroundColor: React.PropTypes.string,
  theme: React.PropTypes.object,
};
