import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';
import { MergeTheme } from '../theme';
import View from '../View';
import Icon from '../Icon';

export default class Input extends React.PureComponent {

  constructor (props) {
    super(props);
    this.theme = MergeTheme(props.theme);
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.theme !== nextProps.theme) this.theme = MergeTheme(nextProps.theme)
  }

  getContainerStyles () {
    let styles = {};
    if (this.props.radius) styles.borderRadius = this.props.radius;
    if (this.props.gutter) styles.marginBottom = this.props.gutter;
    if (this.props.borderColor) styles.borderColor = this.props.borderColor;
    if (this.props.backgroundColor) styles.backgroundColor = this.props.backgroundColor;
    return styles;
  }

  getInputStyles () {
    let styles = {};
    if (this.props.backgroundColor) styles.backgroundColor = this.props.backgroundColor;
    if (this.props.radius) styles.borderRadius = this.props.radius;
    return styles;
  }

  render () {
    return (
      <View style={[
        this.theme.input.container,
        this.getContainerStyles(),
        this.props.style
      ]} theme={this.theme}>
        {this.props.icon && this.props.icon}
        <TextInput
          style={[ this.theme.input.input, this.getInputStyles(), this.props.textStyle ]}
          {...this.props} />
      </View>
    );
  }
}

React.defaultProps = {
  theme: {},
  style: {},
  textStyle: {},
  autoCapitalize: 'none',
  autoCorrect: false,
};

PropTypes = {
  theme: PropTypes.object,
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.number,
  ]),
  textStyle: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.number,
  ]),
  radius: PropTypes.number,
  gutter: PropTypes.number,
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.backgroundColor,
  icon: PropTypes.instanceOf(Icon),
}
