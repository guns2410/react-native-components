import React from 'react';
import PropTypes from 'prop-types';
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
      </ContainerComponent>
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
  theme: PropTypes.object,
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.number,
  ]),
  containerStyle: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.number,
  ]),
  src: PropTypes.any,
  roundAvatar: PropTypes.bool,
  size: PropTypes.number,
  borderless: PropTypes.bool,
  borderColors: PropTypes.array,
  borderWidth: PropTypes.number,
}