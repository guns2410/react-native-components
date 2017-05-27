import React from 'react';
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
  title: React.PropTypes.string,
  titleStyle: Text.propTypes.style,
  /**
   * Icon displayed on the left of the settings item
   */
  icon: React.PropTypes.node,
  /**
   * Individual item width.  Can be globally set in the parent.
   */
  itemWidth: React.PropTypes.number,
  /**
   * Allows for the item to become an auth item
   */
  isAuth: React.PropTypes.bool,
  authPropsUser: React.PropTypes.object,
  authPropsPW: React.PropTypes.object,
  /**
   * Individual background color. Can be globally set in the parent.
   */
  backgroundColor: React.PropTypes.string,

  /**
   * Individual underlay click color.  Can be globally set in the parent.
   */
  underlayColor: React.PropTypes.string,
  /**
   * Item on press callback.
   */
  onPress: React.PropTypes.func,
  /**
   * Enable or disable the > arrow at the end of the setting item.
   */
  hasNavArrow: React.PropTypes.bool,
  arrowIcon: React.PropTypes.node,

  arrowStyle: Image.propTypes.style,
  /**
   * Enable or disable a Switch component
   */
  hasSwitch: React.PropTypes.bool,
  /**
   * Switch state
   */
  switchState: React.PropTypes.bool,
  /**
   * Switch props
   */
  switchProps: React.PropTypes.object,
  /**
   * On value change callback
   */
  switchOnValueChange: React.PropTypes.func,
  /**
   * Right side information on the setting item
   */
  titleInfo: React.PropTypes.string,
  titleInfoStyle: Text.propTypes.style,
  /**
   * Right side content
   */
  rightSideContent: React.PropTypes.node,
  /* Gives opens to hide specific borders */
  borderHide: React.PropTypes.oneOf(['Top', 'Bottom', 'Both'])
};

Item.defaultProps = {
  hasNavArrow: true,
};
