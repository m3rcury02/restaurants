import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator<RootStackParamList>();
export type RootStackParamList = {
  Home: undefined;
  Details: { foodId: number };
};

export default Stack;
