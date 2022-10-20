import React from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import {Button, StyleSheet} from 'react-native';
type Props = {};

const Renimated = (props: Props) => {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      translateX: withSpring(offset.value * 255),
    };
  });

  return (
    <>
      <Animated.View style={[styles.box, animatedStyles]} />
      <Button onPress={() => (offset.value = Math.random())} title="Move" />
    </>
  );
};
const styles = StyleSheet.create({
  box: {
    height: 80,
    width: 80,
    margin: 20,
    backgroundColor: '#666',
    borderRadius: 16,
  },
});

export default Renimated;
