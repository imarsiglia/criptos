import React from 'react';
import { ScrollViewProps, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {ScrollView} from 'react-native-gesture-handler';

export const WrapperScrollView = (props: ScrollViewProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : 'white',
  };

  return <ScrollView {...props} style={[backgroundStyle, props.style]} />;
};
