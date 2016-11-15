import React from 'react';
import { shallow, mount } from 'enzyme';
import { Image } from 'react-native';
import Card from '../';

describe('<Card />', () => {

  it('should render', () => {
    let wrapper = mount(<Card />);
    expect(wrapper).to.be.ok;
  });

  it('should render <Image /> with image prop', () => {
    let wrapper = shallow(<Card image={{ uri: 'http://some/uri' }} />);
    expect(wrapper.find(Image)).to.have.length(1);
  });

});