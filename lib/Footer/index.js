import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { renderChildren } from '../helpers';
import { MergeTheme } from '../theme';
import View from '../View';

const LinearGradient = Platform.OS === 'ios' ?
  require('react-native-linear-gradient/index.ios') :
  require('react-native-linear-gradient/index.android');

export default class Footer extends React.Component {

  constructor (props) {
    super(props);
    this.theme = MergeTheme(props.theme);
  }

  render () {

    const ComponentToRender = (
      <View
        style={[ this.theme.footer.container, {
          justifyContent: (!Array.isArray(this.props.children)) ? 'center' : 'space-between',
          backgroundColor: this.props.colors ? undefined :
            (this.props.backgroundColor ? this.props.backgroundColor : this.theme.footer.backgroundColor),
        }, this.props.style ]}>
        {renderChildren(this.props.children, this.theme)}
      </View>
    );

    return (
      <View>
        {this.props.colors && (
          <LinearGradient colors={this.props.colors} {...this.props.gradientProps}>
            {ComponentToRender}
          </LinearGradient>
        ) || (
          ComponentToRender
        )}
      </View>
    );
  }
}

Footer.defaultProps = {
  theme: {},
  colors: null,
  gradientProps: {},
  style: {},
};

Footer.propTypes = {
  theme: React.PropTypes.object,
  colors: React.PropTypes.array,
  gradientProps: React.PropTypes.object,
  style: React.PropTypes.oneOf([
    React.PropTypes.array,
    React.PropTypes.object,
  ]),
  backgroundColor: React.PropTypes.string,
};
