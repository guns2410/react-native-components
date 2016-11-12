import React from 'react';
import Icon from '../Icon';
import Button from '../Button';
import View from '../View';
import Text from '../Text';
import Avatar from '../Avatar';
import { MergeTheme, ColorManager } from '../theme';

export default class ListItem extends React.Component {

  constructor (props) {
    super(props);
    this.theme = MergeTheme(props.theme);
  }

  get RootComponent () {
    if (this.props.onPress) return Button;
    return View;
  }

  get leftIcon() {
    let leftIcon = this.props.leftIcon;
    if (leftIcon) return (
      <Icon
        theme={this.theme}
        iconStyle={[ this.theme.listItem.icon, leftIcon.style ]}
        {...leftIcon} />
    );

    return false;
  }

  get avatar() {
    if (this.props.avatar) return (
      <Avatar
        theme={this.theme}
        source={this.props.avatar}
        style={this.props.avatarStyle}
        roundAvatar={this.props.roundAvatar} />
    );

    return false;
  }

  get rightIcon () {
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

  render() {
    const Component = this.RootComponent;
    return (
      <Component
        onPress={this.props.onPress}
        style={[ this.theme.listItem.container, this.props.style ]}
        theme={this.theme}>
        <View
          theme={this.theme}
          style={[ this.theme.listItem.wrapper, this.props.wrapperStyle ]}>

          {this.leftIcon}
          {this.avatar}

          <View
            theme={this.theme}
            style={this.theme.listItem.titleContainer}>
            <Text
              theme={this.theme}
              style={[
                this.theme.listItem.title,
                this.props.leftIcon && { marginLeft: 10 },
                this.props.titleStyle
              ]}>
              {this.props.title}
            </Text>
            {this.props.subtitle && (
              <Text
                theme={this.theme}
                style={[
                this.theme.listItem.subtitle,
                this.props.leftIcon && { marginLeft: 10 },
                this.props.subTitleStyle
              ]}>
                {this.props.subtitle}
              </Text>
            )}
          </View>

          {this.rightIcon}

        </View>
      </Component>
    );
  }
}

ListItem.defaultProps = {
  style: {},
  theme: {},
  wrapperStyle: {},
  avatarStyle: {},
  titleStyle: {},
  subTitleStyle: {},
  rightIconContainerStyle: {},
  titleProps: {},
  subTitleProps: {},
  rightIcon: { name: 'chevron-right' },
  rightIconColor: ColorManager.get('Grey', 300),
  hideRightIcon: false,
  roundAvatar: false,
}

ListItem.propTypes = {
  theme: React.PropTypes.object,
  onPress: React.PropTypes.func,
  title: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string,
  style: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object,
    React.PropTypes.number,
  ]),
  wrapperStyle: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object,
    React.PropTypes.number,
  ]),
  avatarStyle: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object,
    React.PropTypes.number,
  ]),
  titleStyle: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object,
    React.PropTypes.number,
  ]),
  subTitleStyle: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object,
    React.PropTypes.number,
  ]),
  rightIconContainerStyle: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object,
    React.PropTypes.number,
  ]),
  leftIcon: React.PropTypes.instanceOf(Icon),
  rightIcon: React.PropTypes.instanceOf(Icon),
  avatar: React.PropTypes.any,
  titleProps: React.PropTypes.object,
  subTitleProps: React.PropTypes.object,
  rightIconColor: React.PropTypes.string,
  hideRightIcon: React.PropTypes.bool,
  roundAvatar: React.PropTypes.bool,
}
