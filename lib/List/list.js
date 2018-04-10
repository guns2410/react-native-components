import React from 'react';
import PropTypes from 'prop-types';
import View from '../View';
import { renderChildren } from '../helpers';
import { MergeTheme } from '../theme';

export default class List extends React.PureComponent {

  constructor (props) {
    super(props);
    this.theme = MergeTheme(props.theme);
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.theme !== nextProps.theme) this.theme = MergeTheme(nextProps.theme)
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
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.number,
  ]),
  theme: PropTypes.object,
};
