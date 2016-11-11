import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import Icon from '../';
import Button from '../../Button';
import View from '../../View';

describe('<Icon />', () => {

  it('should render', () => {
    let wrapper = mount(<Icon name="contacts" />);
    expect(wrapper).to.be.ok;
  });

  it('should render View for default Icon', () => {
    let wrapper = shallow(<Icon name="contacts"/>);
    expect(wrapper.find(View)).to.have.length(1);
    expect(wrapper.find(Button)).to.have.length(0);
  });

  it('should render Button if onPress specified', () => {
    const onPress = sinon.spy();
    let wrapper = shallow(<Icon name="contacts" onPress={onPress}/>);
    expect(wrapper.find(View)).to.have.length(0);
    expect(wrapper.find(Button)).to.have.length(1);
  });

  it('should call onPress on Icon Press', () => {
    const onPress = sinon.spy();
    let wrapper = shallow(<Icon name="contacts" onPress={onPress}/>);
    wrapper.simulate('press');
    expect(onPress.calledOnce).to.equal(true);
  });

});
