import React from 'react';
import { shallow, render } from 'enzyme';
import View from '../../View';
import Text from '../../Text';
import { renderChildren } from '../';

describe('Render Helpers', () => {

  it('should render components with updated Theme', () => {
    let component = shallow(<Text>Hello</Text>);
    let wrapper = shallow(
      <View>
        {renderChildren(component, { name: 'a' })}
      </View>
    );
    expect(wrapper.children().props().theme.name).to.equal('a');
  });

});