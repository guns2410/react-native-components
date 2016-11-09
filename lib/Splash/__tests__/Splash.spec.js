import React from 'react';
import { shallow } from 'enzyme';
import Splash from '../';
import Spinner from '../../Spinner';
import { Text as RNText, StatusBar } from 'react-native';
import { Text as AnimatedText } from 'react-native-animatable';

describe('<Splash />', () => {

  it('should render', () => {
    let Wrapper = shallow(
      <Splash>
        <RNText>Hello World</RNText>
      </Splash>
    );

    expect(Wrapper.contains(RNText)).to.equal(true);
  });

  it('should render animated text on animateText prop', () => {
    let Wrapper = shallow(
      <Splash text="Hello" animateText={true}>
        <RNText>World</RNText>
      </Splash>
    );

    expect(Wrapper.contains(AnimatedText)).to.equal(true);

    Wrapper.setProps({ animateText: false });
    expect(Wrapper.find(AnimatedText).length).to.equal(0);
    expect(Wrapper.find(RNText).length).to.be.above(0);
  });

  it('should change the app statusbar', () => {
    let Wrapper = shallow(
      <Splash>
        <RNText>Hello</RNText>
      </Splash>
    );

    expect(Wrapper.contains(StatusBar)).to.equal(true);
  });

});
