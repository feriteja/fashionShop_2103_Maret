import React from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Styles from '../utils/style';
import {fashionData} from '../utils/data';
import {HeaderHome, ItemFashion} from 'myComponents/index';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

const AnimaFlatList = Animated.createAnimatedComponent(FlatList);

const home = ({navigation}) => {
  const scrollY = useSharedValue(0);

  return (
    <View style={Styles.container}>
      <HeaderHome scrollY={scrollY.value} />

      <View>
        <AnimaFlatList
          data={fashionData}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 15, paddingTop: 10}}
          ItemSeparatorComponent={() => <View style={{height: 30}} />}
          keyExtractor={(a, idx) => idx.toString()}
          onScroll={a => (scrollY.value = a.nativeEvent.contentOffset.y)}
          renderItem={({item, index}) => (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.push('detail', {data: item, index})}>
              <ItemFashion data={item} idx={index} />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default home;

const styles = StyleSheet.create({});
