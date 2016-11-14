import React from 'react';
import { shallow, mount } from 'enzyme';
import Input from '../';
import Icon from '../../Icon';

describe('<Input />', () => {

  it('should render', () => {
    let wrapper = mount(<Input />);
    expect(wrapper).to.be.ok;
  });

});
