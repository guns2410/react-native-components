import React from 'react';
import PropTypes from 'prop-types';
import View from '../View';
import { MergeTheme } from '../theme';

export default class Divider extends React.PureComponent {
  constructor (props) {
    super(props);
    this.theme = MergeTheme(props.theme);
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.theme !== nextProps.theme) this.theme = MergeTheme(nextProps.theme)
  }

  render () {
    return (
      <View theme={this.theme} style={[
        this.theme.divider,
        this.props.style,
      ]} />
    );
  }
}

Divider.defaultProps = {
  theme: {},
  style: {},
};

Divider.propTypes = {
  theme: PropTypes.object,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.number,
  ]),
}
