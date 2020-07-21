import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Tag = ({text}) => {
  return (
    <View style={Styles.container}>
      <Text>{text}</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 5,
    borderColor: '#f34213',
  },
});

export default Tag;
