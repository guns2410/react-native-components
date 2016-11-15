import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import * as Helpers from '../helpers';
import { MergeTheme } from '../theme';

export default class Text extends React.Component {

  constructor (props) {
    super(props);
    this.theme = MergeTheme(props.theme);
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.theme !== nextProps.theme) this.theme = MergeTheme(nextProps.theme)
  }

  render () {
    return (
      <RNText style={[ this.theme.text.container, this.props.style ]}>
        {Helpers.renderChildren(this.props.children, this.theme)}
      </RNText>
    );
  }

};

Text.defaultProps = {
  theme: {},
  style: {},
};

Text.propTypes = {
  theme: React.PropTypes.object,
  style: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array,
    React.PropTypes.number,
  ]),
};
