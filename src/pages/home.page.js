import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Animated,
  StatusBar,
  Dimensions,
} from 'react-native';
import {useHeaderHeight} from '@react-navigation/stack';

import {Section, OverlayedHeader} from '../components';
import {OVERLAYED_BOX_HEIGHT} from '../constants/home';
import {Colors} from '../utils/colors';

const WINDOW_HEIGHT = Dimensions.get('window').height;

const _HomePage = () => {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  const HEADER_HEIGHT = useHeaderHeight();
  const animationRange = {
    animationRange: scrollY.interpolate({
      inputRange: [0, OVERLAYED_BOX_HEIGHT],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
  };

  return (
    <View style={Styles.container}>
      <Animated.ScrollView
        contentContainerStyle={{
          height:
            WINDOW_HEIGHT +
            OVERLAYED_BOX_HEIGHT -
            (StatusBar.currentHeight + HEADER_HEIGHT),
        }}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}>
        <OverlayedHeader {...animationRange} />
        <Section {...animationRange} />
      </Animated.ScrollView>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary,
    flex: 1,
  },
  overlayedBox: {
    height: OVERLAYED_BOX_HEIGHT,
    backgroundColor: 'transparent',
  },
  overlayedImage: {
    resizeMode: 'stretch',
    height: OVERLAYED_BOX_HEIGHT,
    width: '100%',
  },
  scrollViewContainer: {
    height: WINDOW_HEIGHT,
  },
});

export default _HomePage;
