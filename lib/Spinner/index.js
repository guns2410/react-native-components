import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';
import { MergeTheme } from '../theme';

export default class Spinner extends React.PureComponent {
  constructor (props) {
    super(props);
    this.theme = MergeTheme(props.theme);
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.theme !== nextProps.theme) this.theme = MergeTheme(nextProps.theme)
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
  size: PropTypes.oneOfType([
    PropTypes.oneOf([ 'small', 'large' ]),
    PropTypes.number,
  ]),
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.number,
  ]),
  animating: PropTypes.bool,
  color: PropTypes.string,
};
