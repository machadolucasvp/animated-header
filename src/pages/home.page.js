import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Animated,
  Dimensions,
} from 'react-native';
import {useHeaderHeight} from '@react-navigation/stack';

import {Section} from '../components';
import {OVERLAYED_BOX_HEIGHT} from '../constants/home';
import {Colors} from '../utils/colors';

const WINDOW_HEIGHT = Dimensions.get('window').height;

const HomePage = () => {
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
          height: WINDOW_HEIGHT + OVERLAYED_BOX_HEIGHT - HEADER_HEIGHT,
        }}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}>
        <View style={Styles.overlayedBox}>
          <Image
            style={Styles.overlayedImage}
            source={require('../assets/images/kimetsu.jpg')}
          />
        </View>
        <Section {...animationRange} />
      </Animated.ScrollView>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
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
    height: WINDOW_HEIGHT + OVERLAYED_BOX_HEIGHT,
  },
});

export default HomePage;
