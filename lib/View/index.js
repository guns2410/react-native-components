import React from 'react';
import { Platform } from 'react-native';
import { View as RNView, KeyboardAvoidingView } from 'react-native';
import { renderChildren } from '../helpers';
import { MergeTheme } from '../theme';

const LinearGradient = Platform.OS === 'ios' ?
  require('react-native-linear-gradient/index.ios').default :
  require('react-native-linear-gradient/index.android').default;

export default class View extends React.Component {

  constructor (props) {
    super(props);
    this.theme = MergeTheme(props.theme);
  }

  render () {
    let Component = RNView;
    if (this.props.keyboardaware) Component = KeyboardAvoidingView;

    const viewStyle = [{ padding: this.props.padded ? this.theme.gutter : 0 }];
    const ViewToRender = (
      <Component style={[viewStyle, this.props.style ]}
        {...this.props}>
        {this.props.children && renderChildren(this.props.children, this.theme)}
      </Component>
    );

    if (this.props.colors.length > 0)
      return (
        <LinearGradient colors={this.props.colors} {...this.props.gradientProps}
          style={[ viewStyle, this.props.style ]}>
          {ViewToRender}
        </LinearGradient>
      );

    return ViewToRender;
  }
}

View.defaultProps = {
  theme: {},
  padded: false,
  style: {},
  colors: [],
  gradientProps: {},
  keyboardaware: false,
};

View.propTypes = {
  theme: React.PropTypes.object,
  padded: React.PropTypes.bool,
  style: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array,
    React.PropTypes.number,
  ]),
  colors: React.PropTypes.array,
  gradientProps: React.PropTypes.object,
  keyboardaware: React.PropTypes.bool,
};
