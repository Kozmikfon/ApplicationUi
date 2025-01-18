import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RoutesName} from '../Config';
import {Home, Login} from '../Screens';

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={RoutesName.HOME}
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name={RoutesName.LOGIN} component={Login} />
    </Stack.Navigator>
  );
};
export default StackRoutes;
