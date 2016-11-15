import React from 'react';
import Row from './Row';
import View from '../View';
import { MergeTheme } from '../theme';
import { renderChildren } from '../helpers';

export default class Grid extends React.Component {

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

React.propTypes = {
  style: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object,
    React.PropTypes.number,
  ]),
  theme: React.PropTypes.object,
};
