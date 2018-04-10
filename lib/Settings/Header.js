import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';

export default class Header extends React.PureComponent {
  render () {
    return null;
  }
}

Header.propTypes = {
  headerText: PropTypes.string,
  headerStyle: Text.propTypes.style,
};
