import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { renderChildren } from '../helpers';
import { MergeTheme } from '../theme';
import View from '../View';

export default class Footer extends React.Component {

  constructor (props) {
    super(props);
    this.theme = MergeTheme(props.theme);
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
  theme: React.PropTypes.object,
  colors: React.PropTypes.array,
  gradientProps: React.PropTypes.object,
  style: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object,
    React.PropTypes.number,
  ]),
  backgroundColor: React.PropTypes.string,
};
