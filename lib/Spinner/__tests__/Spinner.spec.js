import React from 'react';
import { shallow } from 'enzyme';
import Spinner from '../';
import { ActivityIndicator } from 'react-native';

describe('<Spinner />', () => {

  it('should render', () => {
    let Wrapper = shallow(<Spinner />);
    expect(Wrapper.find(ActivityIndicator).length).to.equal(1);
  });

  it('should animate with animating prop', () => {
    let Wrapper = shallow(<Spinner animating={true} />);
    expect(Wrapper.find(ActivityIndicator).props().animating).to.equal(true);

    Wrapper.setProps({ animating: false });
    expect(Wrapper.find(ActivityIndicator).props().animating).to.equal(false);
  });

});
