import React from 'react';
import PropTypes from 'prop-types';
import View from '../View';
import { MergeTheme } from '../theme';
import { renderChildren } from '../helpers'

export default class Row extends React.PureComponent {

  constructor (props) {
    super(props);
    this.theme = MergeTheme(props.theme);
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.theme !== nextProps.theme) this.theme = MergeTheme(nextProps.theme)
  }

  render () {
    return (
      <View style={[ this.theme.row, { flex: this.props.size }, this.props.style ]} {...this.props}>
        {renderChildren(this.props.children, this.theme)}
      </View>
    );
  }
}

Row.defaultProps = {
  size: 1,
  theme: {},
};

Row.propTypes = {
  size: PropTypes.number,
  theme: PropTypes.object,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.number,
  ]),
};
