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

  it('should render with default theme', () => {
    const wrapper = shallow(<Text />);
    expect(wrapper.instance().theme.name).to.equal('default');
  });

  it('should merge theme from prop', () => {
    const wrapper = shallow(<Text theme={{ name: 'a' }} />);
    expect(wrapper.instance().theme.name).to.equal('a');
  });

});
