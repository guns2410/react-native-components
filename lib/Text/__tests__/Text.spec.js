import React from 'react';
import { shallow } from 'enzyme';
import Text from '../';
import { Text as RNText } from 'react-native';

describe('<Text />', () => {

  it('should render', () => {
    let wrapper = shallow(
      <Text>
        Hello World!
      </Text>
    );
    expect(wrapper.contains(RNText)).to.equals(true);
  });

});
