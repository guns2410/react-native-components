import { Component, PropTypes } from 'react';
import defaultTheme from '../theme';

const propTypes = {
  children: PropTypes.element,
  theme: PropTypes.object,
};
const childContextTypes = {
  theme: PropTypes.object.isRequired,
};

const defaultProps = {
  theme: defaultTheme,
};

class ThemeProvider extends Component {
  getChildContext() {
    return {
      theme: this.props.theme,
    };
  }

  render() {
    return this.props.children;
  }
}

ThemeProvider.propTypes = propTypes;
ThemeProvider.childContextTypes = childContextTypes;
ThemeProvider.defaultProps = defaultProps;

export default ThemeProvider;
