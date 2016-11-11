import React from 'react';
import View from '../View';
import { renderChildren } from '../helpers';
import { MergeTheme } from '../theme';

export default class List extends React.Component {

  constructor (props) {
    super(props);
    this.theme = MergeTheme(props.theme);
  }

  render () {
    return (
      <View style={[ this.theme.list.container, this.props.style ]} theme={this.theme}>
        {renderChildren(this.props.children, this.theme)}
      </View>
    );
  }
}

List.defaultProps = {
  style: {},
  theme: {},
};

List.propTypes = {
  style: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object,
  ]),
  theme: React.PropTypes.object,
};
