import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import * as Helpers from '../helpers';

export default class Text extends React.Component {

  constructor (props, context) {
    super(props);
    this.theme = Object.assign({}, context.theme, props.theme || {});
  }

  prepareStyles () {
    return StyleSheet.create({
      container: {
        fontFamily: this.theme.font,
        fontSize: this.theme.fontSize,
        marginBottom: this.theme.gutter,
        color: this.theme.base,
      }
    });
  }

  render () {
    return (
      <RNText style={[ this.prepareStyles().container, this.props.style ]}>
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
  theme: React.PropTypes.Object,
  style: React.PropTypes.object,
};
