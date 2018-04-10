import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import { MergeTheme } from '../theme';
import { renderChildren } from '../helpers';

export default class Heading extends React.PureComponent {

  constructor (props) {
    super(props);
    this.theme = MergeTheme(props.theme);
  }

  componentWillReceiveProps (nextProps) {
    if(this.props.theme !== nextProps.theme)
      this.theme = MergeTheme(nextProps).theme;
  }

  render () {
    return (
      <Text theme={this.theme} style={[
        this.theme.heading,
        { fontSize: this.props.size, fontWeight: this.props.weight },
        this.props.style
      ]}>
        {renderChildren(this.props.children, this.theme)}
      </Text>
    );
  }
}

Heading.defaultProps = {
  theme: {},
  style: {},
  size: 18,
  weight: '600',
};

Heading.propTypes = {
  theme: PropTypes.object,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.number,
  ]),
  size: PropTypes.number,
  weight: PropTypes.string,
};