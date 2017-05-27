import React from 'react';
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

React.propTypes = {
  theme: React.PropTypes.object,
  style: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object,
    React.PropTypes.number,
  ]),
  textStyle: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object,
    React.PropTypes.number,
  ]),
  radius: React.PropTypes.number,
  gutter: React.PropTypes.number,
  borderColor: React.PropTypes.string,
  backgroundColor: React.PropTypes.backgroundColor,
  icon: React.PropTypes.instanceOf(Icon),
}
