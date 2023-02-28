import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppScreens } from './AppScreens';

export type AppStackParamList = {
  Home: undefined;
};

export type AppNavigationProps = NativeStackNavigationProp<AppStackParamList, AppScreens>;
