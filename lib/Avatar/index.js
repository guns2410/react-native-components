import React from 'react';
import { Image } from 'react-native';
import View from '../View';
import Button from '../Button';
import { MergeTheme } from '../theme';

export default class Avatar extends React.PureComponent {

  constructor (props) {
    super(props);
    this.theme = MergeTheme(props.theme);
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.theme !== nextProps.theme) this.theme = MergeTheme(nextProps.theme)
  }

  render () {
    let otherContainerStyles = {};
    if (this.props.borderColors.length > 0) {
      const borderWidth = this.props.borderWidth || 1;
      otherContainerStyles = {
        marginRight: 0,
        padding: borderWidth,
        height: this.props.size + (borderWidth * 2),
        width: this.props.size + (borderWidth * 2),
        borderRadius: this.props.roundAvatar ? (this.props.size + (borderWidth * 4)) / 2 : 0,
        alignItems: 'center',
        justifyContent: 'center',
      }
    }

    const ImageComponent = this.props.ImageComponent || Image;
    const ContainerComponent = this.props.onPress ? Button : View

    return (
      <ContainerComponent
        styleLess
        onPress={this.props.onPress}
        style={[{ marginRight: this.props.borderColors.length > 0 ? 10 : 0 }, this.props.containerStyle]}>
        <View theme={this.theme} style={[this.theme.avatar.container, otherContainerStyles]}
          colors={this.props.borderColors}>
          <ImageComponent
            source={this.props.src}
            style={[{
              height: this.props.size,
              width: this.props.size,
              borderRadius: this.props.roundAvatar ? this.props.size / 2 : 0,
              backgroundColor: 'transparent',
            }, this.props.style]}
            {...this.props.imageProps} />
          {(!this.props.borderless && this.props.borderColors.length === 0) && (
            <View
              style={[this.theme.avatar.border, {
              height: this.props.size,
              width: this.props.size,
              borderRadius: this.props.roundAvatar ? this.props.size / 2 : 0,
            }, this.props.style]}
            />
          )}
        </View>
      </View>
    );
  }
}

Avatar.defaultProps = {
  theme: {},
  style: {},
  containerStyle: {},
  roundAvatar: false,
  size: 40,
  borderless: false,
  borderColors: [],
  borderWidth: 1,
};

Avatar.propTypes = {
  theme: React.PropTypes.object,
  style: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object,
    React.PropTypes.number,
  ]),
  containerStyle: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object,
    React.PropTypes.number,
  ]),
  src: React.PropTypes.any,
  roundAvatar: React.PropTypes.bool,
  size: React.PropTypes.number,
  borderless: React.PropTypes.bool,
  borderColors: React.PropTypes.array,
  borderWidth: React.PropTypes.number,
}