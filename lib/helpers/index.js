import React from 'react';

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
