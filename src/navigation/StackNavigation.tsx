import { CustomHeader } from '@components/header/CustomHeader';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailScreen } from '@screens/detail/DetailScreen';
import { HomeScreen } from '@screens/home/HomeScreen';
import React from 'react';
import { ROUTES } from './routes';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: props => <CustomHeader {...props} />,
      }}>
      <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
      <Stack.Screen name={ROUTES.DETAIL} component={DetailScreen} />
    </Stack.Navigator>
  );
}
