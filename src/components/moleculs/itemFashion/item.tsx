import React, {useState} from 'react';
import {
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Image} from 'react-native-animatable';
import {SharedElement} from 'react-navigation-shared-element';

import IconIcon from 'react-native-vector-icons/Ionicons';

interface props {
  data: {image: ImageSourcePropType; seller: string; place: string};
  idx: number;
}

const item: React.FC<props> = ({data, idx}) => {
  const [heart, setHeart] = useState(false);
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <Image source={data.image} style={styles.imageAvatar} />
        <View style={{marginLeft: 10}}>
          <Text style={[styles.text, {fontWeight: 'bold', fontSize: 16}]}>
            {data.seller}
          </Text>
          <Text style={[styles.text, {fontSize: 10}]}>{data.place}</Text>
        </View>
      </View>
      <View style={styles.content}>
        <SharedElement id={`item.${idx}.img`}>
          <Image
            source={data.image}
            style={styles.imageContent}
            resizeMode="cover"
          />
        </SharedElement>
        <Text style={[styles.text, {marginVertical: 5, fontSize: 15}]}>
          Demo Fashion App {idx}
        </Text>
      </View>
      <View style={styles.actionCard}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => setHeart(a => !a)}>
            <IconIcon
              name={heart ? 'md-heart' : 'md-heart-outline'}
              size={30}
              color={heart ? 'red' : '#d5d6d8'}
            />
          </TouchableOpacity>
          <View style={{width: 20}} />
          <IconIcon name="md-share-outline" size={30} color="#d5d6d8" />
        </View>
        <IconIcon name="md-save-outline" size={30} color="#d5d6d8" />
      </View>
    </View>
  );
};

export default item;

const styles = StyleSheet.create({
  content: {marginTop: 10},
  imageAvatar: {height: 40, width: 40, borderRadius: 20},
  imageContent: {height: 300, width: undefined, borderRadius: 15},
  text: {
    color: '#d5d6d8',
  },
  actionCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
