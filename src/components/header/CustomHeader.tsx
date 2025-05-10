import { Icons } from '@assets/icons/icons';
import logo from '@assets/images/logo.png';
import { PressableOpacity } from '@components/buttons/PressableOpacity';
import { LocalImage } from '@components/images/LocalImage';
import { Wrapper } from '@components/wrapper/Wrapper';
import { THEMES } from '@config/theme';
import { useTheme } from '@context/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React, { useCallback, useEffect, useRef } from 'react';
import { Animated, ImageStyle, StyleSheet } from 'react-native';

export const CustomHeader = (props: NativeStackHeaderProps) => {
  const { theme, setTheme } = useTheme();
  const { canGoBack, goBack } = useNavigation();

  // Determine if a previous screen exists to conditionally show back button
  const isPrevRoute = useCallback(() => canGoBack(), [canGoBack]);

  // Toggle between light and dark themes
  const toggleTheme = useCallback(() => {
    const nextName =
      theme.name === THEMES.LIGHT.name ? THEMES.DARK.name : THEMES.LIGHT.name;
    setTheme(nextName as keyof typeof THEMES);
  }, [theme, setTheme]);

  const opacity = useRef(new Animated.Value(0)).current;

  // Animate back button based on route availability
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: isPrevRoute() ? 1 : 0,
      duration: isPrevRoute() ? 250 : 150,
      useNativeDriver: true,
    }).start();
  }, [isPrevRoute, opacity]);

  return (
    <Wrapper style={[{ backgroundColor: theme.colors.primary }, styles.container]}>      
      {isPrevRoute() ? (
        <PressableOpacity onPress={goBack}>
          <Wrapper style={{ opacity }}>
            <Icons.AngleDown
              width={21}
              height={24}
              color={theme.colors.text}
              style={styles.backButton}
            />
          </Wrapper>
        </PressableOpacity>
      ) : (
        <Wrapper style={{ width: 21, height: 24 }} />
      )}

      <LocalImage source={logo} style={styles.logo as ImageStyle} />

      <PressableOpacity onPress={toggleTheme} style={styles.toggleButton}>
        <Icons.CircleHalfStroke
          width={21}
          height={24}
          color={theme.colors.text}
        />
      </PressableOpacity>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14.5,
  },
  backButton: {
    transform: [{ rotate: '90deg' }],
  },
  logo: {
    width: 50,
    height: 50,
  },
  toggleButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
});