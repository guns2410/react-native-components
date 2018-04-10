import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import Button from '../Button';
import View from '../View';
import Text from '../Text';
import { MergeTheme, ColorManager } from '../theme';

export default class ListItem extends React.PureComponent {

  constructor (props) {
    super(props);
    this.theme = MergeTheme(props.theme);
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.theme !== nextProps.theme) this.theme = MergeTheme(nextProps.theme)
  }

  getRootComponent () {
    if (this.props.onPress) return Button;
    return View;
  }

  getLeftIcon () {
    let leftIcon = this.props.leftIcon;
    if (leftIcon) return (
      <Icon
        theme={this.theme}
        iconStyle={[ this.theme.listItem.icon, leftIcon.style ]}
        {...leftIcon} />
    );

    return false;
  }

  getRightIcon () {
    let { rightIcon } = this.props;
    if (this.props.onPress && !this.props.hideRightIcon) return (
      <View
        theme={this.theme}
        style={[ this.theme.listItem.rightIconContainer, this.props.rightIconContainerStyle ]}>
        <Icon
          theme={this.theme}
          iconStyle={[ this.theme.listItem.rightIcon, rightIcon.style ]}
          color={rightIcon.color || this.props.rightIconColor}
          {...rightIcon} />
      </View>
    );

    return false;
  }

  getRightElement () {
    if (this.props.rightElement) {
      return (
        <View
          theme={this.theme}
          style={[ this.theme.listItem.rightIconContainer, this.props.rightElementStyle ]}>
          {this.props.rightElement}
        </View>
      );
    }

    return false;
  }

  render () {
    const Component = this.getRootComponent();
    const TitleComponent = this.props.titleComponent;
    return (
      <Component styleLess
        onPress={this.props.onPress}
        style={[ this.theme.listItem.container, this.props.style ]}
        theme={this.theme}>
        {this.getLeftIcon()}
        {this.props.avatar}
        <View
          theme={this.theme}
          style={[ this.theme.listItem.wrapper, this.props.wrapperStyle ]}>

          <View
            theme={this.theme}
            style={this.theme.listItem.titleContainer}>
            {!TitleComponent && (
              <Text
                theme={this.theme}
                style={[
                  this.theme.listItem.title,
                  this.props.leftIcon && { marginLeft: 10 },
                  this.props.titleStyle
                ]} {...this.props.titleProps}>
                {this.props.title}
              </Text>
            )}
            {TitleComponent && TitleComponent}
            {this.props.subtitleComponent && (
                <View
                    theme={this.theme}
                    style={[
                this.theme.listItem.subtitle,
                this.props.leftIcon && { marginLeft: 10 },
                this.props.subTitleStyle
              ]} {...this.props.subTitleProps}>
                    {this.props.subtitleComponent}
                </View>
            )}
            {!this.props.subtitleComponent && this.props.subtitle && (
              <Text
                theme={this.theme}
                style={[
                this.theme.listItem.subtitle,
                this.props.leftIcon && { marginLeft: 10 },
                this.props.subTitleStyle
              ]} {...this.props.subTitleProps}>
                {this.props.subtitle}
              </Text>
            )}
          </View>

          {this.getRightElement()}
          {this.getRightIcon()}

        </View>
      </Component>
    );
  }
}

ListItem.defaultProps = {
  style: {},
  theme: {},
  wrapperStyle: {},
  titleStyle: {},
  subTitleStyle: {},
  rightIconContainerStyle: {},
  titleProps: {},
  subTitleProps: {},
  rightIcon: { name: 'chevron-right' },
  rightIconColor: ColorManager.get('Grey', 300),
  hideRightIcon: false,
  roundAvatar: false,
};

ListItem.propTypes = {
  theme: PropTypes.object,
  onPress: PropTypes.func,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.number,
  ]),
  wrapperStyle: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.number,
  ]),
  titleStyle: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.number,
  ]),
  subTitleStyle: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.number,
  ]),
  rightIconContainerStyle: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.number,
  ]),
  leftIcon: PropTypes.object,
  rightIcon: PropTypes.object,
  avatar: PropTypes.any,
  subtitleComponent: PropTypes.any,
  titleProps: PropTypes.object,
  subTitleProps: PropTypes.object,
  rightIconColor: PropTypes.string,
  hideRightIcon: PropTypes.bool,
  rightElement: PropTypes.any,
  rightElementStyle: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.number,
  ]),
};
