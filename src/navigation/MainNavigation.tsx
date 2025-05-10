import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import StackNavigation from './StackNavigation';

export const MainNavigation = () => {
  const RootStack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <RootStack.Navigator screenOptions={{headerShown: false}}>
          <RootStack.Screen name="Main" component={StackNavigation} />
        </RootStack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};
