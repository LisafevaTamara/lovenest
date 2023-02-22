import {NavigatorScreenParams} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type MainStackParams = {
  Home: undefined;
  PracticCategoriesList: undefined;
  PracticCategory: undefined;
};

type RootStackParamList = {
  Main: NavigatorScreenParams<MainStackParams>;
  Account: undefined;
  Settings: undefined;
};
type Props = NativeStackScreenProps<RootStackParamList>;

export default Props;
