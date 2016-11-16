import React from 'react';
import { Image } from 'react-native';
import View from '../View';
import Button from '../Button';
import { MergeTheme } from '../theme';

export default class Avatar extends React.Component {

  constructor (props) {
    super(props);
    this.theme = MergeTheme(props.theme);
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.theme !== nextProps.theme) this.theme = MergeTheme(nextProps.theme)
  }

  get source () {
    if (typeof this.props.source === 'string') return { uri: this.props.source };
    return this.props.source;
  }

  render () {
    return (
      <View theme={this.theme} style={[ this.props.containerStyle ]}>
        <Button transparent>
          <View>
            <Image
              source={this.source}
              style={[ this.theme.avatar, { height: this.props.size,
                width: this.props.size,
                borderRadius: this.props.roundAvatar ? this.props.size / 2 : 0,
              }, this.props.style ]} {...this.props} />
            <View
              style={[ this.theme.avatar.border, {
                height: this.props.size,
                width: this.props.size,
                borderRadius: this.props.roundAvatar ? this.props.size / 2 : 0,
              }, this.props.style]}
            />
          </View>
        </Button>
      </View>
    );
  }
}

Avatar.defaultProps = {
  theme: {},
  style: {},
  containerStyle: {},
  roundAvatar: false,
  size: 40,
};

Avatar.propTypes = {
  theme: React.PropTypes.object,
  style: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object,
    React.PropTypes.number,
  ]),
  containerStyle: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object,
    React.PropTypes.number,
  ]),
  source: React.PropTypes.any,
  roundAvatar: React.PropTypes.bool,
  size: React.PropTypes.number,
}
