import React from 'react';
import PropTypes from 'prop-types';
import { getIconType } from '../helpers'
import Button from '../Button';
import View from '../View';
import { MergeTheme } from '../theme';

export default class Icon extends React.PureComponent {

  constructor (props) {
    super(props);
    this.theme = MergeTheme(props.theme);
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.theme !== nextProps.theme) this.theme = MergeTheme(nextProps.theme)
  }

  get RootComponent () {
    if (this.props.onPress) return Button;
    return View;
  }

  render () {
    const Component = this.RootComponent;
    const Icon = getIconType(this.props.type);

    return (
      <Component styleLess
        style={[
          this.theme.icon.default,
          this.props.raised && this.theme.icon.raised,
          this.props.style
        ]} {...this.props}>
        <Icon
          style={[ this.theme.icon.icon, { width: this.props.size, height: this.props.size }, this.props.iconStyle ]}
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
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.number,
  ]),
  iconStyle: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.number,
  ]),
  raised: PropTypes.bool,
  size: PropTypes.number,
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  type: PropTypes.oneOf([
    'zocial', 'octicon', 'material', 'ionicon', 'foundation', 'evilicon', 'entypo', 'font-awesome'
  ]),
  onPress: PropTypes.func,
}

