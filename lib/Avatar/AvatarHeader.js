import React from 'react';
import View from '../View';
import Text from '../Text';
import Avatar from './';
import Heading from '../Heading';
import { MergeTheme } from '../theme';

export default class AvatarHeader extends React.Component {

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
  theme: React.PropTypes.object,
  style: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object,
    React.PropTypes.number,
  ]),
  titleContainerStyle: React.PropTypes.oneOfType([
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
  backgroundColor: React.PropTypes.string,
  avatar: React.PropTypes.any,
  height: React.PropTypes.number,
  headerSize: React.PropTypes.number,
  heading: React.PropTypes.string,
  subTitle: React.PropTypes.string,
  subTitleProps: React.PropTypes.object,
};