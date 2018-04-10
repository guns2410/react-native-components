import React from 'react';
import PropTypes from 'prop-types';
import { Platform, StyleSheet } from 'react-native';
import { renderChildren } from '../helpers';
import { MergeTheme } from '../theme';
import View from '../View';

export default class Footer extends React.PureComponent {

  constructor (props) {
    super(props);
    this.theme = MergeTheme(props.theme);
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.theme !== nextProps.theme) this.theme = MergeTheme(nextProps.theme)
  }

  getStyles () {
    const styles = [
      this.theme.footer.container,
      {
        justifyConent: !Array.isArray(this.props.children) ? 'center' : 'space-between',
        backgroundColor: this.props.colors ? undefined :
          this.props.backgroundColor ? this.props.backgroundColor : this.props.footer.backgroundColor,
      },
      this.props.style,
    ];
    return styles;
  }

  render () {
    return (
      <View
        style={this.getStyles()} {...this.props}>
        {renderChildren(this.props.children, this.theme)}
      </View>
    );
  }
}

Footer.defaultProps = {
  theme: {},
  colors: [],
  gradientProps: {},
  style: {},
};

Footer.propTypes = {
  theme: PropTypes.object,
  colors: PropTypes.array,
  gradientProps: PropTypes.object,
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.number,
  ]),
  backgroundColor: PropTypes.string,
};
