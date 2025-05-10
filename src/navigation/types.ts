import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteNames, ROUTES} from './routes';

export type RootStackParamList = {
  [ROUTES.HOME]: undefined;
  [ROUTES.DETAIL]: { id: string };
};

// Type for `useNavigation()`
export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;