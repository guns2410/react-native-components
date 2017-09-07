import React from 'react';
import { Image } from 'react-native';
import View from '../View';
import Text from '../Text';
import Divider from '../Divider';
import { MergeTheme } from '../theme';

export default class Card extends React.PureComponent {
  constructor (props) {
    super(props);
    this.theme = MergeTheme(props.theme);
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.theme !== nextProps.theme) this.theme = MergeTheme(nextProps.theme)
  }

  render () {
    const ImageComponent = this.props.ImgComponent || Image;
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
          <View
            style={[{ flex: 1, alignItems: 'stretch' }, this.props.imageWrapperStyle]}
            theme={this.theme}>
            {this.props.image && (
              <ImageComponent
                resizeMode={ this.props.imageResizeMode }
                style={[
                  { flexGrow: 1, flex: undefined },
                  this.props.imageStyle
                ]}
                source={this.props.image} {...this.props.imageProps}>
                {this.props.imageComponent}
              </ImageComponent>
            )}
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
  imageWrapperStyle: {},
  imageResizeMode: 'contain',
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
  imageWrapperStyle: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array,
    React.PropTypes.number,
  ]),
  imageProps: React.PropTypes.object,
  imageResizeMode: React.PropTypes.string,
  image: React.PropTypes.any,
  imageComponent: React.PropTypes.any,
  title: React.PropTypes.string,
};