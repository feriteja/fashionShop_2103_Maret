import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Router from './src/config/router';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Router />
    </View>
  );
}

const styles = StyleSheet.create({});
