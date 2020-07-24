import React from 'react';
import {StyleSheet, ScrollView, Animated} from 'react-native';

import {v4 as uuidv4} from 'uuid';
import Tag from './tag';
import {OVERLAYED_BOX_HEIGHT} from '../constants/home';
import {Colors} from '../utils/colors';

const tags = ['hello', 'world', 'why', 'this', 'is', 'so', 'funny'].map(
  (item) => {
    return {data: item, key: uuidv4()};
  },
);

const Section = (props) => {
  const {animationRange, ...otherProps} = props;
  const transform = {
    translateY: animationRange.interpolate({
      inputRange: [0, OVERLAYED_BOX_HEIGHT],
      outputRange: [0, -OVERLAYED_BOX_HEIGHT],
      extrapolate: 'clamp',
    }),
  };

  return (
    <Animated.View {...otherProps}>
      <ScrollView
        contentContainerStyle={Styles.horizontalScroll}
        showsHorizontalScrollIndicator={false}
        horizontal>
        {tags.map((tag) => {
          return <Tag style={Styles.tag} key={tag.key} text={tag.data} />;
        })}
      </ScrollView>
    </Animated.View>
  );
};

const Styles = StyleSheet.create({
  horizontalScroll: {
    alignItems: 'center',
    minWidth: '100%',
    minHeight: 40,
    backgroundColor: Colors.secondary,
  },
  tag: {
    marginHorizontal: 10,
  },
});

export default Section;
