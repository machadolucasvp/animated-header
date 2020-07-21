import React from 'react';
import {View, StyleSheet, Animated} from 'react-native';

import {v4 as uuidv4} from 'uuid';
import Tag from './tag';

const tags = ['hello', 'world', 'why', 'this', 'is', 'so', 'funny'].map(
  (item) => {
    return {data: item, key: uuidv4()};
  },
);

const Section = (props) => {
  const {transform, ...otherProps} = props;
  return (
    <Animated.View style={[Styles.container, transform]} {...otherProps}>
      {tags.map((tag) => {
        <Tag key={tag.key} text={tag.data} />;
      })}
    </Animated.View>
  );
};

const Styles = StyleSheet.create({
  justifyContent: 'space-around',
});

export default Section;
