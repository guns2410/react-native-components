import React from 'react';
import { Image } from 'react-native';
import { MergeTheme } from '../theme';

export default class Avatar extends React.Component {

  constructor (props) {
    super(props);
    this.theme = MergeTheme(props.theme);
  }

  get source() {
    if (typeof this.props.source === 'string') return { uri: this.props.source };
    return this.props.source;
  }

  render () {
    return (
      <Image
        source={this.source}
        style={[ this.theme.avatar, this.props.roundAvatar && { borderRadius: 17 }, this.props.style ]}
        {...this.props}/>
    );
  }
}

Avatar.defaultProps = {
  theme: {},
  style: {},
  roundAvatar: false,
};

Avatar.propTypes = {
  theme: React.PropTypes.object,
  style: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object,
    React.PropTypes.number,
  ]),
  source: React.PropTypes.any,
  roundAvatar: React.PropTypes.bool,
}
