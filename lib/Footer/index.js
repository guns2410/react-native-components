import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { renderChildren } from '../helpers';
import { MergeTheme } from '../theme';
import View from '../View';

const LinearGradient = Platform.OS === 'ios' ?
  require('react-native-linear-gradient/index.ios') :
  require('react-native-linear-gradient/index.android');

export default class Footer extends React.Component {

  constructor (props) {
    super(props);
    this.theme = MergeTheme(props.theme);
  }

  render () {

    const ComponentToRender = (
      <View
        style={[ styles.container, {
          justifyContent: (!Array.isArray(this.props.children)) ? 'center' : 'space-between',
          paddingHorizontal: 10,
          bottom: 0,
          height: this.theme.footer.height,
          backgroundColor: this.props.colors ? undefined :
            (this.props.backgroundColor ? this.props.backgroundColor : this.theme.footer.backgroundColor),
        }, this.props.style ]}>
        {renderChildren(this.props.children, this.theme)}
      </View>
    );

    return (
      <View>
        {this.props.colors && (
          <LinearGradient colors={this.props.colors} {...this.props.gradientProps}>
            {ComponentToRender}
          </LinearGradient>
        ) || (
          ComponentToRender
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
