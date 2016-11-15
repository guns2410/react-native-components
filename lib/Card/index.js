import React from 'react';
import { Image } from 'react-native';
import View from '../View';
import Text from '../Text';
import Divider from '../Divider';
import { MergeTheme } from '../theme';

export default class Card extends React.Component {
  constructor (props) {
    super(props);
    this.theme = MergeTheme(props.theme);
  }

  render () {
    return (
      <View style={[
        this.theme.card.container,
        this.props.image && { padding: 0 },
        this.props.style
      ]} theme={this.theme}>
        <View style={[ this.theme.card.wrapper, this.props.wrapperStyle ]} theme={this.theme}>
          {this.props.title && !this.props.image && (
            <View theme={this.theme}>
              <Text style={[ this.theme.card.cardTitle, this.props.titleStyle ]} theme={this.theme}>
                {this.props.title}
              </Text>
              <Divider style={[ this.theme.card.divider, this.props.dividerStyle ]}
                theme={this.theme} />
            </View>
          )}
          {this.props.image && (
            <View style={{ flex: 1 }} theme={this.theme}>
              <Image
                resizeMode='cover'
                style={[
                  { flex:1, width: null, height: this.props.imageHeight },
                  this.props.imageStyle
                ]}
                source={this.props.image}  />
              <View
                style={[
                  { padding: this.theme.gutter },
                  this.props.wrapperStyle
                 ]} theme={this.theme}>
                {this.props.title && (
                  <Text style={[
                    this.theme.card.imageTitle,
                    this.props.titleStyle
                  ]} theme={this.theme}>
                    {this.props.title}
                  </Text>
                )}
                {this.props.children}
              </View>
            </View>
          )}
        </View>
      </View>
    );
  }
}

Card.defaultProps = {
  theme: {},
  style: {},
  wrapperStyle: {},
  titleStyle: {},
  dividerStyle: {},
  imageStyle: {},
  imageHeight: 150,
};

Card.propTypes = {
  theme: React.PropTypes.object,
  style: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array,
    React.PropTypes.number,
  ]),
  wrapperStyle: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array,
    React.PropTypes.number,
  ]),
  titleStyle: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array,
    React.PropTypes.number,
  ]),
  dividerStyle: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array,
    React.PropTypes.number,
  ]),
  imageStyle: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array,
    React.PropTypes.number,
  ]),
  image: React.PropTypes.any,
  imageHeight: React.PropTypes.number,
  title: React.PropTypes.string,
};
