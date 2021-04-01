import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import {SharedElement} from 'react-navigation-shared-element';
import Styles from '../utils/style';
import * as Animatable from 'react-native-animatable';

const {width} = Dimensions.get('screen');

const fadeTransIn = {
  from: {opacity: 0, transform: [{translateY: 40}]},
  to: {opacity: 1, transform: [{translateY: 0}]},
};

const detail = ({route, navigation}: any) => {
  const {data, index} = route.params;
  const [numItem, setNumItem] = useState<number>(1);

  return (
    <View style={Styles.container}>
      <Animatable.View animation="fadeIn" delay={300} style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IconFeather
            name="arrow-left"
            size={30}
            color="#d5d6d8"
            style={{
              textShadowColor: 'black',
              textShadowOffset: {height: 0, width: 0},
              textShadowRadius: 2,
            }}
          />
        </TouchableOpacity>
        <View>
          <IconFeather
            name="shopping-bag"
            size={30}
            color="#d5d6d8"
            style={{
              textShadowColor: 'black',
              textShadowOffset: {height: 0, width: 0},
              textShadowRadius: 2,
            }}
          />
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
      </Animatable.View>
      <View style={styles.content}>
        <View style={{flex: 1}}>
          <SharedElement id={`item.${index}.img`} style={{flex: 1}}>
            <Image
              source={data.image}
              style={[{flex: 1, width, resizeMode: 'cover'}]}
              resizeMode="cover"
            />
          </SharedElement>

          <View style={styles.contentInfo}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={data.image}
                style={{height: 30, width: 30, borderRadius: 30}}
              />
              <View style={{marginLeft: 10}}>
                <Text
                  style={{fontSize: 16, fontWeight: 'bold', color: '#d5d6d8'}}>
                  {data.seller}
                </Text>
                <Text style={{fontSize: 10, color: '#d5d6d8'}}>
                  {data.place}
                </Text>
              </View>
            </View>
            <Text
              style={{
                color: '#d5d6d8',
                fontSize: 70,
                textShadowColor: '#2f2f2f',
                textShadowOffset: {height: 1, width: 2},
                textShadowRadius: 20,
              }}
              numberOfLines={2}
              adjustsFontSizeToFit>
              Demo Fashion App {index}
            </Text>
          </View>
        </View>
        <View style={{height: 150}} />
      </View>
      <Animatable.View
        delay={300}
        animation={fadeTransIn}
        style={styles.action}>
        <View>
          <View style={[styles.actionBox, {width: width / 4 - 30, height: 60}]}>
            <Text style={{fontSize: 10, color: '#a0a0a0'}}>size</Text>
            <Text style={{color: '#d5d6d8'}}>Small</Text>
          </View>
          <View style={{height: 10}} />
          <View style={[styles.actionBox, {width: width / 4 - 30, height: 60}]}>
            <Text style={{fontSize: 10, color: '#a0a0a0'}}>color</Text>
            <View style={{height: 7}} />
            <View
              style={{
                height: 5,
                backgroundColor: '#a0d6d8',
                borderRadius: 99,
              }}
            />
          </View>
        </View>
        <View>
          <View
            style={[
              styles.actionBox,
              {
                width: width / 3 - 30,
                height: 60,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              },
            ]}>
            <TouchableOpacity
              disabled={numItem === 1}
              onPress={() => setNumItem(a => a - 1)}>
              <IconFeather name="minus" size={25} color="#d5d6d8" />
            </TouchableOpacity>
            <View
              style={{
                height: 25,
                width: 25,
                borderRadius: 999,
                borderColor: '#d5d6d8',
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 0.4,
              }}>
              <Text
                style={{
                  color: '#d5d6d8',
                }}>
                {numItem}
              </Text>
            </View>
            <TouchableOpacity onPress={() => setNumItem(a => a + 1)}>
              <IconFeather name="plus" size={25} color="#d5d6d8" />
            </TouchableOpacity>
          </View>
          <View style={{height: 10}} />
          <View style={[styles.actionBox, {width: width / 3 - 30, height: 60}]}>
            <Text style={{fontSize: 10, color: '#a0a0a0'}}>Price</Text>
            <Text style={{color: '#d5d6d8'}}>$ {numItem * 400}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: '#6236FF',
            justifyContent: 'center',
            alignItems: 'center',
            height: 130,
            width: 70,
            borderRadius: 7,
          }}>
          <IconFeather name="shopping-bag" size={30} color="#d5d6d8" />
          <Text style={{color: '#d5d6d8'}}>Add</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

detail.sharedElements = (route, otherRoute, showing) => {
  const {index} = route.params;
  return [`item.${index}.img`];
};

export default detail;

const styles = StyleSheet.create({
  action: {
    flexDirection: 'row',
    position: 'absolute',
    alignSelf: 'stretch',
    height: 180,
    width,
    bottom: 0,
    backgroundColor: '#2F2F2F',
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    paddingTop: 30,
    paddingHorizontal: 25,
    justifyContent: 'space-evenly',
  },
  actionBox: {
    paddingVertical: 7,
    paddingHorizontal: 7,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'rgba(191,137,121,.5)',

    justifyContent: 'center',
  },
  content: {
    flex: 4,
  },
  contentInfo: {
    position: 'absolute',
    bottom: 100,
    left: 30,
    right: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 20,
    elevation: 32,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    // width: width - 20,
    zIndex: 10,
    marginTop: 15,
    left: 10,
    right: 20,
  },
});
