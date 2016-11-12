import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import Button from '../';

const Component = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

describe('<Button />', () => {

  it('should render', () => {
    let wrapper = mount(
      <Button>Press Me!</Button>
    );
    expect(wrapper).to.be.ok;
  });

  it('should render correct Platform specific components', () => {
    let wrapper = shallow(<Button>Press Me!</Button>);
    expect(wrapper.contains(Component)).to.equal(true);
  });

  it('should call onPress on button click', () => {
    const onPress = sinon.spy();
    let wrapper = shallow(<Button onPress={onPress}/>);
    wrapper.simulate('press');
    expect(onPress.calledOnce).to.equal(true);
  });

});