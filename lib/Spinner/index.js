import React from 'react';
import { ActivityIndicator } from 'react-native';
import { MergeTheme } from '../theme';

export default class Spinner extends React.Component {
  constructor (props) {
    super(props);
    this.theme = MergeTheme(props.theme);
  }

  render () {
    return (
      <ActivityIndicator
        size={this.props.size}
        style={[ {flexDirection: 'row', justifyContent: 'center' }, this.props.style ]}
        animating={this.props.animating}
        hidesWhenStopped={true}
        color={this.props.color || this.theme.primary}
        {...this.props}
      />
    );
  }
}

Spinner.defaultProps = {
  size: 'small',
  style: {},
  animating: true,
};

Spinner.propTypes = {
  size: React.PropTypes.oneOfType([
    React.PropTypes.oneOf([ 'small', 'large' ]),
    React.PropTypes.number,
  ]),
  style: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array,
    React.PropTypes.number,
  ]),
  animating: React.PropTypes.bool,
  color: React.PropTypes.string,
};
