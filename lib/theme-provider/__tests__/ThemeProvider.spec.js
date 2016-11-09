import React from 'react';
import { shallow } from 'enzyme';
import ThemeProvider from '../';
import Text from '../../Text';

describe('<ThemeProvider />', () => {

  it('should render', () => {
    let wrapper = shallow(
      <ThemeProvider>
        <Text>Hello World</Text>
      </ThemeProvider>
    );
    expect(wrapper.contains(ThemeProvider)).to.equal(true);
  });

});