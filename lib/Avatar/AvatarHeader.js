import React from 'react';
import PropTypes from 'prop-types';
import View from '../View';
import Text from '../Text';
import Avatar from './';
import Heading from '../Heading';
import { MergeTheme } from '../theme';

export default class AvatarHeader extends React.PureComponent {

  constructor (props) {
    super(props);
    this.theme = MergeTheme(props.theme);
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.theme !== nextProps.theme)
      this.theme = MergeTheme(nextProps.theme);
  }

  render () {
    return (
      <View style={[
        this.theme.avatarHeader.header,
        this.props.backgroundColor && { backgroundColor: this.props.backgroundColor },
        this.props.style
      ]} theme={this.theme}>
        {this.props.avatar}
        <View style={[
          this.theme.avatarHeader.titleContainer,
          this.props.height && { height: this.props.height },
          this.props.titleContainerStyle
        ]}>
          <Heading size={this.props.headerSize} style={this.props.titleStyle}>
            {this.props.heading}
          </Heading>
          <View style={[{ marginLeft: 10 }]}>
            <Text {...this.props.subTitleProps} style={this.props.subTitleStyle}>{this.props.subTitle}</Text>
          </View>
        </View>
      </View>
    )
  }
}

AvatarHeader.defaultProps = {
  theme: {},
  style: {},
  titleStyle: {},
  titleContainerStyle: {},
  subTitleStyle: {},
  headerSize: 15,
};

AvatarHeader.propTypes = {
  theme: PropTypes.object,
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.number,
  ]),
  titleContainerStyle: PropTypes.oneOfType([
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
  backgroundColor: PropTypes.string,
  avatar: PropTypes.any,
  height: PropTypes.number,
  headerSize: PropTypes.number,
  heading: PropTypes.string,
  subTitle: PropTypes.string,
  subTitleProps: PropTypes.object,
};