import React from 'react';
import { Image } from 'react-native';
import CachedImage from 'react-native-cached-image';
import View from '../View';
import { MergeTheme } from '../theme';

export default class ProfileHeader extends React.Component {

  constructor (props) {
    super(props);
    this.theme = MergeTheme(props.theme);
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.theme !== nextProps.theme) this.theme = MergeTheme(nextProps.theme)
  }

  render () {
    const BannerImageComponent = this.props.doNotCacheBanner ? Image : CachedImage;
    const AvatarImageComponent = this.props.doNotCacheAvatar ? Image : CachedImage;
    return (
      <View style={[ this.theme.profileHeader.container, this.props.style ]} theme={this.theme}>
        <BannerImageComponent
          blurRadius={this.props.blurRadius}
          style={[ this.theme.profileHeader.backgroundImg, this.props.backgroundImageStyle ]}
          source={this.props.backgroundImage}
          {...this.props.bannerImageProps} />
        <View theme={this.theme}
          style={[this.theme.profileHeader.shadow, { borderRadius: this.props.circle ? 50 : 0 }]} />
        <AvatarImageComponent
          source={this.props.profileImage}
          style={[
            this.theme.profileHeader.profileImg,
            { borderRadius: this.props.circle ? 50 : 0 },
            this.props.profileImageStyle
          ]} {...this.props.avatarImageProps} />
      </View>
    );
  }
}

React.defaultProps = {
  theme: {},
  style: {},
  blurRadius: 0,
  backgroundImageStyle: {},
  profileImageStyle: {},
  circle: false,
  doNotCacheBanner: false,
  doNotCacheAvatar: false,
};

React.propTypes = {
  theme: React.PropTypes.object,
  bannerImageProps: React.PropTypes.object,
  avatarImageProps: React.PropTypes.object,
  style: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array,
    React.PropTypes.number,
  ]),
  backgroundImageStyle: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array,
    React.PropTypes.number,
  ]),
  profileImageStyle: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array,
    React.PropTypes.number,
  ]),
  blurRadius: React.PropTypes.number,
  backgroundImage: React.PropTypes.any.isRequired,
  profileImage: React.PropTypes.any.isRequired,
  circle: React.PropTypes.bool,
  doNotCacheBanner: React.PropTypes.bool,
  doNotCacheAvatar: React.PropTypes.bool,
}