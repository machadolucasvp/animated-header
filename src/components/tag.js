import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {Colors} from '../utils/colors';

const Tag = ({text, style}) => {
  return (
    <View style={[Styles.container, style]}>
      <TouchableOpacity>
        <Text style={Styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.tertiary,
    backgroundColor: Colors.secondary,
  },
  text: {
    color: Colors.cream,
    fontSize: 14,
  },
});

export default Tag;
