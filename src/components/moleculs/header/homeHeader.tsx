import React from 'react';
import {StyleSheet, Text, View, StatusBar, FlatList} from 'react-native';
import {Image} from 'react-native-animatable';
import IconFeather from 'react-native-vector-icons/Feather';
import {caroselData} from '../../../utils/data';
import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolate,
  withTiming,
} from 'react-native-reanimated';

const homeHeader = ({scrollY}: {scrollY: number}) => {
  return (
    <Animated.View
      style={[styles.container, {transform: [{translateY: scrollY}]}]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
        }}>
        <IconFeather name="bell" size={25} color="#d5d6d8" />
        <View>
          <IconFeather name="shopping-bag" size={25} color="#d5d6d8" />
          <View
            style={{
              position: 'absolute',
              padding: 2,
              borderRadius: 99,
              backgroundColor: '#6532FF',
              right: -10,
              top: -5,
              width: 20,
              height: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#d5d6d8', fontSize: 9}}>3</Text>
          </View>
        </View>
      </View>
      <View style={{marginTop: 30}}>
        <FlatList
          data={caroselData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(a, idx) => idx.toString()}
          contentContainerStyle={{paddingHorizontal: 20}}
          ItemSeparatorComponent={() => <View style={{width: 20}} />}
          renderItem={({item}) => (
            <View style={{alignItems: 'center'}}>
              <Image
                source={item.image}
                style={{height: 50, width: 50, borderRadius: 99}}
              />
              <Text style={{color: '#d5d6d8', textTransform: 'capitalize'}}>
                {item.name}
              </Text>
            </View>
          )}
        />
      </View>
    </Animated.View>
  );
};

export default homeHeader;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    backgroundColor: '#2f2f2f',
    paddingTop: 15,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
  },
});
