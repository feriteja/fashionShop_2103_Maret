import React from 'react';
import {View, TouchableOpacity, Text, Dimensions} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Profile, Saved, Search} from 'myScreens/index';
import IconIcon from 'react-native-vector-icons/Ionicons';
import {Image} from 'react-native-animatable';

const {width} = Dimensions.get('screen');

const ButtomNav = createBottomTabNavigator();

const Scan = () => {
  return (
    <View>
      <IconIcon name="md-scan-circle-outline" size={25} />
    </View>
  );
};

const bottomNav = () => {
  return (
    <ButtomNav.Navigator
      sceneContainerStyle={{flex: 1}}
      tabBarOptions={{
        showLabel: false,

        activeTintColor: '#6532FF',
        labelStyle: {
          fontSize: 14,
        },
        labelPosition: 'below-icon',
        tabStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        },
        style: {
          position: 'absolute',
          alignItems: 'center',
          alignSelf: 'center',
          justifyContent: 'center',
          left: width / 15,
          right: width / 15,
          bottom: 30,
          borderRadius: 20,
          backgroundColor: '#2f2f2f',
          borderTopColor: '#2f2f2f',
          // elevation: 3,
        },
      }}>
      <ButtomNav.Screen
        options={{
          tabBarIcon: ({color}) => (
            <IconIcon name="md-home-outline" color={color} size={25} />
          ),
        }}
        name="home"
        component={Home}
      />
      <ButtomNav.Screen
        options={{
          tabBarIcon: ({color}) => (
            <IconIcon name="md-search" color={color} size={25} />
          ),
        }}
        name="profile"
        component={Profile}
      />
      <ButtomNav.Screen
        options={{
          tabBarButton: props => {
            return (
              <TouchableOpacity
                {...props}
                style={{
                  borderWidth: 2,
                  borderColor: props.accessibilityState?.selected
                    ? '#6532FF'
                    : 'black',
                  alignSelf: 'center',
                  padding: 5,
                  borderRadius: 99,
                }}>
                <IconIcon name="md-scan-circle-outline" size={25} />
              </TouchableOpacity>
            );
          },
        }}
        name="scan"
        component={Scan}
      />
      <ButtomNav.Screen
        options={{
          tabBarIcon: ({color}) => (
            <IconIcon name="md-save-outline" color={color} size={25} />
          ),
        }}
        name="saved"
        component={Saved}
      />
      <ButtomNav.Screen
        options={{
          tabBarIcon: ({color, focused}) => (
            <Image
              source={require('../../assets/avatar/whiteHair.jpg')}
              style={{
                height: 25,
                width: 25,
                borderRadius: 99,
                borderWidth: focused ? 2 : 0,
                borderColor: color,
              }}
            />
          ),
        }}
        name="search"
        component={Search}
      />
    </ButtomNav.Navigator>
  );
};

export default bottomNav;
