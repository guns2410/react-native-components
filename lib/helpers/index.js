import React from 'react';
import ZocialIcon from 'react-native-vector-icons/Zocial'
import OcticonIcon from 'react-native-vector-icons/Octicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Ionicon from 'react-native-vector-icons/Ionicons'
import FoundationIcon from 'react-native-vector-icons/Foundation'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import FAIcon from 'react-native-vector-icons/FontAwesome'

export const renderChildren = (children, theme) => {
  try {
    if (Array.isArray(children))
      return React.Children.map(children, child => {
        if (typeof child === 'string') return child;
        if (child) {
          let updatedProps = Object.assign({}, { theme }, child.props || {});
          return React.cloneElement(child, updatedProps);
        }
        return child;
      });

    if (typeof children === 'string') return children;
    let updatedProps = Object.assign({}, { theme }, children.props || {});
    return React.cloneElement(children, updatedProps);
  } catch (err) {
    // handle error here
  }
};

export const getIconType = (type) => {
  switch (type) {
    case 'zocial':
      return ZocialIcon
    case 'octicon':
      return OcticonIcon
    case 'material':
      return MaterialIcon
    case 'ionicon':
      return Ionicon
    case 'foundation':
      return FoundationIcon
    case 'evilicon':
      return EvilIcon
    case 'entypo':
      return EntypoIcon
    case 'font-awesome':
      return FAIcon
    default:
      return MaterialIcon
  }
}
