import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import View from '../View';
import Text from '../Text';
import { MergeTheme } from '../theme';
import { renderChildren } from '../helpers';

export default class Button extends React.PureComponent {
  constructor (props) {
    super(props);
    this.theme = MergeTheme(props.theme);
    this.state = {
      badgeWidth: 0,
      computedBadgeStyle: {
        width: 0,
        height: 0,
        borderRadius: 0,
      }
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.theme !== nextProps.theme) this.theme = MergeTheme(nextProps.theme)
  }

  getTouchComponent () {
    if (Platform.OS === 'android') return TouchableNativeFeedback;
    return TouchableOpacity
  }

  getTouchComponentProps () {
    let props = {};

    if (Platform.OS === 'android') {
      let rippleColor = this.props.rippleColor || this.getTextStyles().color || this.theme.button.rippleColor || this.theme.primary;
      props.useForeground = this.props.useForeground;
      if (Platform.Version >= 21)
        props.background = TouchableNativeFeedback.Ripple(rippleColor, this.props.borderlessRipple);
      else
        props.background = TouchableNativeFeedback.SelectableBackground();
    }

    return props;
  }

  getTextStyles () {
    if(this.props.styleLess) return {};

    if (!this.props.transparent && !this.props.bordered)
      return {
        color: this.props.textColor ? this.props.textColor : this.theme.button.color,
        marginBottom: 0,
      }
    else
      return {
        color: this.props.backgroundColor ? this.props.backgroundColor : this.theme.button.backgroundColor,
        marginBottom: 0,
      };
  }

  getRootButtonStyles () {
    if(this.props.styleLess) return {};
    let styles = this.theme.button.default;

    if (this.props.raised) styles = Object.assign({}, styles, this.theme.button.raised);
    if (this.props.radius && !this.props.transparent) styles.borderRadius = this.props.radius;

    if (!this.props.backgroundColor && !this.props.transparent && !this.props.bordered)
      styles.backgroundColor = this.theme.primary;

    if (this.props.backgroundColor && !this.props.transparent && !this.props.bordered)
      styles.backgroundColor = this.props.backgroundColor;

    if (!this.props.backgroundColor && this.props.bordered)
      styles.borderColor = this.props.primary;

    if (this.props.colors.length > 0) styles = Object.assign({}, styles, {
      paddingVertical: 5,
      backgroundColor: 'transparent',
    });

    return styles;
  }

  get badgeStyles () {
    if (this.props.badgeBackgroundColor) return { backgroundColor: this.props.badgeBackgroundColor };
    return { backgroundColor: this.theme.button.badgeBackgroundColor };
  }

  badgeComponent () {
    return (
      <View
        style={[ this.theme.button.badge, this.props.badgeStyles, this.state.computedBadgeStyle ]}
        theme={this.theme}>
        <Text
          onLayout={this.onBadgeLayout.bind(this)}
          style={[ this.theme.button.badgeText, { color: this.props.badgeColor }, this.props.badgeTextStyle ]}
          theme={this.theme}>
          {this.props.badge.toString()}
        </Text>
      </View>
    )
  }

  onBadgeLayout (e) {
    let width;
    if (e.nativeEvent.layout.width <= e.nativeEvent.layout.height) {
        width = e.nativeEvent.layout.height
    } else {
        width = e.nativeEvent.layout.width;
    }
    if (this.state.badgeWidth === width) return;
    const height = e.nativeEvent.layout.height;
    const borderRadius = height / 2;
    this.setState({
      badgeWidth: width,
      computedBadgeStyle: {
        width,
        height,
        borderRadius,
      },
    });
  }

  render () {
    const TouchComponent = this.getTouchComponent();
    let TouchComponentProps = this.getTouchComponentProps();

    return (
      <TouchComponent
        {...TouchComponentProps} {...this.props} style={{ marginBottom: 0 }}>
        <View
          style={[ this.getRootButtonStyles(), this.props.style ]}
          theme={this.theme} colors={this.props.colors}>
          {typeof this.props.children === 'string' && (
            <Text
              style={this.props.styleLess ? this.props.textStyle : [ this.theme.button.text, this.getTextStyles(), this.props.textStyle ]}
              theme={this.theme}>
              {renderChildren(this.props.children, this.theme)}
            </Text>
          ) || renderChildren(this.props.children, this.theme)}
          {(typeof this.props.badge === 'string' || this.props.badge) > 0 && this.badgeComponent()}
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
  styleLess: false,
  useForeground: true,
  borderlessRipple: false,
  colors: [],
};

Button.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.number,
  ]),
  textStyle: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.number,
  ]),
  viewStyle: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.number,
  ]),
  badgeStyle: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.number,
  ]),
  badgeTextStyle: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.number,
  ]),
  radius: PropTypes.number,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  transparent: PropTypes.bool,
  bordered: PropTypes.bool,
  raised: PropTypes.bool,
  badge: PropTypes.number,
  badgeColor: PropTypes.string,
  badgeBackgroundColor: PropTypes.string,
  theme: PropTypes.object,
  styleLess: PropTypes.bool,
  useForeground: PropTypes.bool,
  rippleColor: PropTypes.string,
  borderlessRipple: PropTypes.bool,
  colors: PropTypes.array,
};
