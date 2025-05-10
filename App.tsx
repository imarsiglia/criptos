import {MainNavigation} from '@navigation/MainNavigation';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from './src/context/ThemeContext';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <SafeAreaProvider style={{flex: 1}}>
          <GestureHandlerRootView style={{flex: 1}}>
            <MainNavigation />
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;