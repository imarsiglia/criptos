import { useTheme } from '@context/ThemeContext';
import React from 'react';
import { Animated, ViewProps } from 'react-native';

export const Wrapper = (props: ViewProps) => {
  const {theme} = useTheme();

  return (
    <Animated.View
      {...props}
      style={[props.style]}
    />
  );
};
