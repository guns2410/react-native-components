import React from 'react';
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
    return (
      <Component styleLess
        onPress={this.props.onPress}
        style={[ this.theme.listItem.container, this.props.style ]}
        theme={this.theme}>
        <View
          theme={this.theme}
          style={[ this.theme.listItem.wrapper, this.props.wrapperStyle ]}>

          {this.getLeftIcon()}
          {this.props.avatar}

          <View
            theme={this.theme}
            style={this.theme.listItem.titleContainer}>
            <Text
              theme={this.theme}
              style={[
                this.theme.listItem.title,
                this.props.leftIcon && { marginLeft: 10 },
                this.props.titleStyle
              ]} {...this.props.titleProps}>
              {this.props.title}
            </Text>
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
  leftIcon: React.PropTypes.object,
  rightIcon: React.PropTypes.object,
  avatar: React.PropTypes.any,
  subtitleComponent: React.PropTypes.any,
  titleProps: React.PropTypes.object,
  subTitleProps: React.PropTypes.object,
  rightIconColor: React.PropTypes.string,
  hideRightIcon: React.PropTypes.bool,
  rightElement: React.PropTypes.any,
  rightElementStyle: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object,
    React.PropTypes.number,
  ]),
};
