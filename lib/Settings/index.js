import React from 'react';
import Header from './Header';
import Item from './Item';
import View from '../View';
import Text from '../Text';
import Button from '../Button';
import { ScrollView, TextInput, Switch, Image } from 'react-native';
import { MergeTheme } from '../theme';

const ARROW_ICON = require('../../assets/images/right.png');

class SettingsList extends React.PureComponent {

  constructor (props) {
    super(props);
    this.theme = MergeTheme(props.theme);
  }

  _getGroups () {
    var groupNumber = -1;
    let headers = [];
    let itemGroup = [];
    let result = [];
    let other = [];
    React.Children.forEach(this.props.children, (child) => {
      // Allow for null, optional fields
      if (!child) return;

      if (child.type.displayName === 'Header') {
        if (groupNumber != -1) {
          result[groupNumber] = { items: itemGroup, header: headers[groupNumber], other: other };
          itemGroup = [];
          other = [];
        }
        groupNumber++;
        headers[groupNumber] = child.props;
      } else if (child.type.displayName === 'Item') {
        if (groupNumber == -1) {
          groupNumber++;
        }
        itemGroup.push(child.props);
      } else {
        if (groupNumber == -1) {
          groupNumber++;
        }
        other.push(child);
      }
    });
    result[groupNumber] = { items: itemGroup, header: headers[groupNumber], other: other };
    return result;
  }

  render () {
    return (
      <ScrollView>
        {this._getGroups().map((group, index) => {
          return this._groupView(group, index);
        })}
      </ScrollView>
    )
  }

  _groupView (group, index) {
    if (group.header) {
      return (
        <View key={'group_' + index}>
          {group.other}
          <Text style={[{margin:5},group.header.headerStyle]}>{group.header.headerText}</Text>
          <View style={{borderTopWidth:1, borderBottomWidth:1, borderColor: this.props.borderColor}}>
            {group.items.map((item, index) => {
              return this._itemView(item, index, group.items.length);
            })}
          </View>
        </View>
      )
    } else {
      return (
        <View key={'group_' + index}>
          {group.other}
          <View style={{borderTopWidth:1, borderBottomWidth:1, borderColor: this.props.borderColor}}>
            {group.items.map((item, index) => {
              return this._itemView(item, index, group.items.length);
            })}
          </View>
        </View>
      )
    }
  }

  _itemView (item, index, max) {
    var border;
    if (item.borderHide) {
      switch (item.borderHide) {
        case 'Top' :
          border = { borderBottomWidth: 1, borderColor: this.props.borderColor };
          break;
        case 'Bottom' :
          border = { borderTopWidth: 1, borderColor: this.props.borderColor };
          break;
      }
    } else {
      border = index === max - 1 ? { borderWidth: 0 } : {
        borderBottomWidth: 1,
        borderColor: this.props.borderColor
      };
    }
    return (
      <Button styleLess transparent
        key={'item_' + index}
        underlayColor={item.underlayColor ? item.underlayColor : this.props.underlayColor}
        onPress={item.onPress}>
        <View style={[
          this.theme.settingsList.itemBox,
          { backgroundColor: item.backgroundColor ? item.backgroundColor : this.props.backgroundColor }
        ]}>
          {item.icon}
          {item.isAuth ?
            <View style={[this.theme.settingsList.titleBox, border]}>
              <View style={{paddingLeft:5,flexDirection:'column',flex:1}}>
                <View style={{borderBottomWidth:1,borderColor:this.props.borderColor}}>
                  <TextInput
                    ref="UserNameInputBlock"
                    onSubmitEditing={() => this.refs.PasswordInputBlock.focus()}
                    style={{flex:1,height:30, borderBottomWidth:1}}
                    placeholder="username"
                    {...item.authPropsUser}
                  />
                </View>
                <View>
                  <TextInput
                    ref="PasswordInputBlock"
                    style={{flex:1,height:30}}
                    placeholder="password"
                    secureTextEntry={true}
                    returnKeyType={'go'}
                    {...item.authPropsPW}
                    onSubmitEditing={() => item.onPress()}
                  />
                </View>
              </View>
            </View>
            :
            <View style={[this.theme.settingsList.titleBox, border, {height:item.itemWidth ? item.itemWidth : this.props.defaultItemSize}]}>
              <Text style={[item.titleStyle ? item.titleStyle : this.props.defaultTitleStyle, this.theme.settingsList.titleText]}>
                {item.title}
              </Text>
              {item.titleInfo ?
                <Text style={[this.theme.settingsList.rightSideStyle, {color: '#B1B1B1'}, item.titleInfoStyle]}>
                  {item.titleInfo}
                </Text>
                : null}
              {item.rightSideContent ? item.rightSideContent : null}
              {item.hasSwitch ?
                <Switch
                  {...item.switchProps}
                  style={this.theme.settingsList.rightSideStyle}
                  onValueChange={(value) => item.switchOnValueChange(value)}
                  value={item.switchState} />
                : null}
              {item.hasNavArrow ? item.arrowIcon ?
                item.arrowIcon
                :
                <Image style={[this.theme.settingsList.rightSideStyle, item.arrowStyle]}
                  source={ARROW_ICON} /> : null
              }
            </View>
          }
        </View>
      </Button>
    )
  }
}

SettingsList.defaultProps = {
  backgroundColor: 'white',
  borderColor: 'black',
  defaultItemSize: 50,
  underlayColor: 'transparent',
  defaultTitleStyle: { fontSize: 16 },
};

SettingsList.propTypes = {
  backgroundColor: React.PropTypes.string,
  borderColor: React.PropTypes.string,
  defaultItemSize: React.PropTypes.number,
  underlayColor: React.PropTypes.string,
  defaultTitleStyle: Text.propTypes.style,
  theme: React.PropTypes.object,
};

/**
 * Optional Header for groups
 */
SettingsList.Header = Header;

/**
 * Individual Items in the Settings List
 */
SettingsList.Item = Item;

export default SettingsList;
