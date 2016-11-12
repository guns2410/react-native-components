import React from 'react';
import { getIconType } from '../helpers'
import Button from '../Button';
import View from '../View';
import { MergeTheme } from '../theme';

export default class Icon extends React.Component {

  constructor (props) {
    super(props);
    this.theme = MergeTheme(props.theme);
  }

  get RootComponent () {
    if (this.props.onPress) return Button;
    return View;
  }

  render () {
    const Component = this.RootComponent;
    const Icon = getIconType(this.props.type);
    return (
      <Component
        style={[
          this.theme.icon.default,
          this.props.raised && this.theme.icon.raised,
          this.props.style
        ]} {...this.props}>
        <Icon
          style={[ this.theme.icon.icon, this.props.iconStyle ]}
          size={this.props.size}
          name={this.props.name}
          color={this.props.color || this.theme.icon.icon.color}
        />
      </Component>
    );
  }
}

Icon.defaultProps = {
  raised: false,
  size: 24,
  style: {},
  iconStyle: {},
  type: 'material'
};

Icon.propTypes = {
  style: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object,
    React.PropTypes.number,
  ]),
  iconStyle: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object,
    React.PropTypes.number,
  ]),
  raised: React.PropTypes.bool,
  size: React.PropTypes.number,
  name: React.PropTypes.string.isRequired,
  color: React.PropTypes.string,
  type: React.PropTypes.oneOf([
    'zocial', 'octicon', 'material', 'ionicon', 'foundation', 'evilicon', 'entypo', 'font-awesome'
  ]),
  onPress: React.PropTypes.func,
}

