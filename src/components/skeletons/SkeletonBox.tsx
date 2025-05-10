import React from 'react';
import { ViewStyle } from 'react-native';
import { MotiView } from 'moti';

type Props = {
  style?: ViewStyle;
};

export const SkeletonBox = ({ style }: Props) => {
  return (
    <MotiView
      style={[{
        backgroundColor: '#E1E9EE',
        borderRadius: 6,
      }, style]}
      from={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      transition={{
        loop: true,
        type: 'timing',
        duration: 800,
        delay: 100,
      }}
    />
  );
};
