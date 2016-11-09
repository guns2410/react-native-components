import React from 'react';
import { View as RNView, KeyboardAvoidingView, Platform, Text } from 'react-native';
import { shallow, mount, render } from 'enzyme';
import View from '../';

const LinearGradient = Platform.OS === 'ios' ?
  require('react-native-linear-gradient/index.ios') :
  require('react-native-linear-gradient/index.android');

describe('<View />', () => {

  it('should not render without children', () => {
    const view = shallow(<View></View>);
    expect(view.contains(RNView)).to.equal(false);
  });

  it('should render with children', () => {
    const view = shallow(<View><Text>Hello</Text></View>);
    expect(view.contains(RNView)).to.equal(true);
    expect(view.contains(Text)).to.equal(true);
  });

  it('should render with array of children', () => {
    const view = shallow(
      <View>
        <Text>Hello</Text>
        <Text>World</Text>
      </View>
    );
    expect(view.contains(RNView)).to.equal(true);
    expect(view.contains(Text)).to.equal(true);
  });

  it('should render gradient with colors prop', () => {
    const view = shallow(
      <View colors={['#000', '#fff']} gradientProps={{ "a": 1 }}>
        <Text>Hello</Text>
      </View>
    );

    expect(view.contains(LinearGradient)).to.equal(true);
    expect(view.contains(RNView)).to.equal(true);
    expect(view.contains(Text)).to.equal(true);

    let gradient = view.findWhere(component => component.props().a === 1);
    expect(gradient.length).to.equal(1);
  });

  it('should render keyboard aware scroll view with keyboardaware prop', () => {
    const view = shallow(
      <View keyboardaware>
        <Text>Hello</Text>
      </View>
    );

    expect(view.contains(LinearGradient)).to.equal(true);
    expect(view.contains(RNView)).to.equal(true);
    expect(view.contains(Text)).to.equal(true);
  });

  it('should disabled padding controlled by padded prop', () => {
    const view = shallow(
      <View padded={false}>
        <Text>Hello</Text>
      </View>
    );
    expect(view.find(RNView).props().padded).to.equal(false);
    view.setProps({ padded: true });
    expect(view.find(RNView).props().padded).to.equal(true);
  });

});
