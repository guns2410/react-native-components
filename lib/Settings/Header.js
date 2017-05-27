import React from 'react';
import Text from '../Text';

export default class Header extends React.PureComponent {
  render () {
    return null;
  }
}

Header.propTypes = {
  headerText: React.PropTypes.string,
  headerStyle: Text.propTypes.style,
};
