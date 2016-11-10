import React from 'react';
import { shallow, render } from 'enzyme';
import ZocialIcon from 'react-native-vector-icons/Zocial'
import OcticonIcon from 'react-native-vector-icons/Octicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Ionicon from 'react-native-vector-icons/Ionicons'
import FoundationIcon from 'react-native-vector-icons/Foundation'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import View from '../../View';
import Text from '../../Text';
import { renderChildren, getIconType } from '../';

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

  it('should return correct icon type', () => {
    expect(getIconType('zocial')).to.equal(ZocialIcon);
    expect(getIconType('octicon')).to.equal(OcticonIcon);
    expect(getIconType('material')).to.equal(MaterialIcon);
    expect(getIconType('ionicon')).to.equal(Ionicon);
    expect(getIconType('foundation')).to.equal(FoundationIcon);
    expect(getIconType('evilicon')).to.equal(EvilIcon);
    expect(getIconType('entypo')).to.equal(EntypoIcon);
    expect(getIconType('font-awesome')).to.equal(FontAwesomeIcon);
  });

  it('should return Material Icon on not found icon type', () => {
    expect(getIconType('a')).to.equal(MaterialIcon);
  });

});