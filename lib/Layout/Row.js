import React from 'react';
import View from '../View';
import { MergeTheme } from '../theme';
import { renderChildren } from '../helpers'

export default class Row extends React.Component {

  constructor (props) {
    super(props);
    this.theme = MergeTheme(props.theme);
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
  size: React.PropTypes.number,
  theme: React.PropTypes.object,
  style: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array,
    React.PropTypes.number,
  ]),
};
