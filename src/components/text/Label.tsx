import {FONTS} from '@config/theme';
import {useTheme} from '@context/ThemeContext';
import React, {forwardRef} from 'react';
import {Text, TextProps} from 'react-native';

export const Label = forwardRef<React.ReactNode, TextProps>((props, ref) => {
  const {theme} = useTheme();
  return (
    <Text
      {...props}
      style={[
        {fontFamily: FONTS.sansRegular, color: theme.colors.text},
        props.style,
      ]}
    />
  );
});
