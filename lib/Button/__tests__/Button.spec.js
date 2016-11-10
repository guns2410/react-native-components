import React from 'react';
import { shallow } from 'enzyme';
import { TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import Button from '../';

const Component = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

describe('<Button />', () => {

  it('should render', () => {
    let wrapper = shallow(
      <Button>Press Me!</Button>
    );
    expect(wrapper.contains(Button)).to.equal(true);
  });

  it('should render correct Platform specific components', () => {
    let wrapper = shallow(<Button>Press Me!</Button>);
    expect(wrapper.contains(Component)).to.equal(true);
  });

});