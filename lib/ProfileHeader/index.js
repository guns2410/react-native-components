import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import View from '../View';
import { MergeTheme } from '../theme';

export default class ProfileHeader extends React.PureComponent {

  constructor (props) {
    super(props);
    this.theme = MergeTheme(props.theme);
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.theme !== nextProps.theme) this.theme = MergeTheme(nextProps.theme)
  }

  render () {
    const BackgroundImageComponent = this.props.BackgroundImageComponent || Image;
    const ProfileImageComponent = this.props.ProfileImageComponent || Image;
    return (
      <View style={[ this.theme.profileHeader.container, this.props.style ]} theme={this.theme}>
        <BackgroundImageComponent
          blurRadius={this.props.blurRadius}
          style={[ this.theme.profileHeader.backgroundImg, this.props.backgroundImageStyle ]}
          source={this.props.backgroundImage}
          {...this.props.backgroundImageProps} />
        <View theme={this.theme}
          style={[this.theme.profileHeader.shadow, { borderRadius: this.props.circle ? 50 : 0 }]} />
        <ProfileImageComponent
          source={this.props.profileImage}
          style={[
            this.theme.profileHeader.profileImg,
            { borderRadius: this.props.circle ? 50 : 0 },
            this.props.profileImageStyle
          ]} {...this.props.profileImageProps} />
      </View>
    );
  }
}

ProfileHeader.defaultProps = {
  theme: {},
  style: {},
  blurRadius: 0,
  backgroundImageStyle: {},
  profileImageStyle: {},
  circle: false,
};

ProfileHeader.propTypes = {
  theme: PropTypes.object,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.number,
  ]),
  backgroundImageStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.number,
  ]),
  profileImageStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.number,
  ]),
  blurRadius: PropTypes.number,
  backgroundImage: PropTypes.any.isRequired,
  profileImage: PropTypes.any.isRequired,
  circle: PropTypes.bool,
}