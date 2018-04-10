import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import { Image } from 'react-native';

export default class Item extends React.PureComponent {
  render () {
    return null;
  }
}

Item.propTypes = {
  /**
   * Title being displayed
   */
  title: PropTypes.string,
  titleStyle: Text.propTypes.style,
  /**
   * Icon displayed on the left of the settings item
   */
  icon: PropTypes.node,
  /**
   * Individual item width.  Can be globally set in the parent.
   */
  itemWidth: PropTypes.number,
  /**
   * Allows for the item to become an auth item
   */
  isAuth: PropTypes.bool,
  authPropsUser: PropTypes.object,
  authPropsPW: PropTypes.object,
  /**
   * Individual background color. Can be globally set in the parent.
   */
  backgroundColor: PropTypes.string,

  /**
   * Individual underlay click color.  Can be globally set in the parent.
   */
  underlayColor: PropTypes.string,
  /**
   * Item on press callback.
   */
  onPress: PropTypes.func,
  /**
   * Enable or disable the > arrow at the end of the setting item.
   */
  hasNavArrow: PropTypes.bool,
  arrowIcon: PropTypes.node,

  arrowStyle: Image.propTypes.style,
  /**
   * Enable or disable a Switch component
   */
  hasSwitch: PropTypes.bool,
  /**
   * Switch state
   */
  switchState: PropTypes.bool,
  /**
   * Switch props
   */
  switchProps: PropTypes.object,
  /**
   * On value change callback
   */
  switchOnValueChange: PropTypes.func,
  /**
   * Right side information on the setting item
   */
  titleInfo: PropTypes.string,
  titleInfoStyle: Text.propTypes.style,
  /**
   * Right side content
   */
  rightSideContent: PropTypes.node,
  /* Gives opens to hide specific borders */
  borderHide: PropTypes.oneOf(['Top', 'Bottom', 'Both'])
};

Item.defaultProps = {
  hasNavArrow: true,
};
