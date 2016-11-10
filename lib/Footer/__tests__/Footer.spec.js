import React from 'react';
import { Platform } from 'react-native';
import { shallow, mount } from 'enzyme';
import Footer from '../';
import Text from '../../Text';

const LinearGradient = Platform.OS === 'ios' ?
  require('react-native-linear-gradient/index.ios') :
  require('react-native-linear-gradient/index.android');

describe('<Footer />', () => {

  it('should render', () => {
    let wrapper = mount(
      <Footer>
        <Text>Hello World!</Text>
      </Footer>
    );
    expect(wrapper).to.be.ok;
  });

  it('should render gradient on colors prop', () => {
    let wrapper = shallow(
      <Footer colors={[ '#fff', '#000' ]}>
        <Text>Hello World!</Text>
      </Footer>
    );

    expect(wrapper.contains(LinearGradient)).to.equal(true);
  });

});