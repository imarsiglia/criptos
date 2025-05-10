import React, {createContext, useContext, useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {MMKV} from 'react-native-mmkv';
import {THEMES} from '@config/theme';
import {LOCALSTORAGE_KEYS} from '@utils/constants';

// MMKV instance for persisting user theme preference
const storage = new MMKV({id: 'app-criptos'});

type ThemeContextType = {
  theme: typeof THEMES.LIGHT;
  setTheme: (themeName: keyof typeof THEMES) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  // Load initial theme from storage or default to LIGHT
  const [theme, setThemeState] = useState(() => {
    const saved = storage.getString(LOCALSTORAGE_KEYS.app_theme);
    return (saved && THEMES[saved as keyof typeof THEMES]) || THEMES.LIGHT;
  });
  const [ready, setReady] = useState(false);

  // Mark provider as ready once mounted
  useEffect(() => {
    setReady(true);
  }, []);

  // Switch theme and save choice
  const setTheme = (themeName: keyof typeof THEMES) => {
    const next = THEMES[themeName] || THEMES.LIGHT;
    setThemeState(next);
    storage.set(LOCALSTORAGE_KEYS.app_theme, themeName);
  };

  if (!ready) return null;

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <StatusBar
        backgroundColor={theme.colors.primary}
        barStyle={theme.name === THEMES.DARK.name ? 'light-content' : 'dark-content'}
      />
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be inside ThemeProvider');
  return ctx;
};