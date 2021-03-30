import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {Detail} from 'myScreens/index';
import HomeScreens from './bottomNav';

const Stack = createSharedElementStackNavigator();

const index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="home" component={HomeScreens} />
        <Stack.Screen
          name="detail"
          component={Detail}
          options={{
            gestureEnabled: false,
            transitionSpec: {
              open: {animation: 'timing', config: {duration: 300}},
              close: {animation: 'timing', config: {duration: 300}},
            },
            cardStyleInterpolator: ({current: {progress}}) => {
              return {
                cardStyle: {
                  opacity: progress,
                },
              };
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default index;
