import React from 'react';
import {View, Image, Animated, StyleSheet} from 'react-native';

import {OVERLAYED_BOX_HEIGHT} from '../constants/home';

const OverlayedHeader = ({animationRange}) => {
  return (
    <Animated.View style={Styles.container}>
      <Image
        style={Styles.overlayedImage}
        source={require('../assets/images/kimetsu.jpg')}
      />
    </Animated.View>
  );
};

const Styles = StyleSheet.create({
  container: {
    height: OVERLAYED_BOX_HEIGHT,
    backgroundColor: 'transparent',
  },
  overlayedImage: {
    resizeMode: 'stretch',
    height: OVERLAYED_BOX_HEIGHT,
    width: '100%',
  },
});

export default OverlayedHeader;
