import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';
import View from '../View';
import { MergeTheme } from '../theme';
import { renderChildren } from '../helpers';

export default class Grid extends React.PureComponent {

  constructor (props) {
    super(props);
    this.theme = MergeTheme(props.theme);
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.theme !== nextProps.theme) this.theme = MergeTheme(nextProps.theme)
  }

  ifRow () {
    let isRow = false;
    React.Children.forEach(this.props.children, child => {
      if (child.type === Row) isRow = true;
    });
    return isRow;
  }

  render () {
    return (
      <View style={[
        this.theme.grid,
        { flexDirection: this.ifRow() ? 'column' : 'row' },
        this.props.style
      ]} theme={this.theme} {...this.props}>
        {renderChildren(this.props.children, this.theme)}
      </View>
    )
  }
}

React.defaultProps = {
  style: {},
  theme: {},
};

PropTypes = {
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.number,
  ]),
  theme: PropTypes.object,
};
