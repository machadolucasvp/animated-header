import React, {useState} from 'react';
import {View, StyleSheet, Animated} from 'react-native';

import {Section} from '../components';

const HomePage = () => {
  const [scrollY, setScrollY] = useState(new Animated.value(0));

  return (
    <View style={Styles.container}>
      <View style={Styles.overlayedBox} />
      <Section />
      <Animated.ScrollView
        style={Styles.scrollView}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#3e2f5b',
  },
  overlayedBox: {
    height: 200,
    borderWidth: 5,
    borderColor: 'black',
  },
  scrollView: {
    height: 1000,
  },
});

export default HomePage;
