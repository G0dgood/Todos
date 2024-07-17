import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Haptics from 'expo-haptics';
import { useNavigation } from '@react-navigation/native';
import Todo from '../page/Todo';




const Stack = createNativeStackNavigator();

function RootNavigator() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator initialRouteName="Todo" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Todo" component={Todo} />
    </Stack.Navigator>
  );
}


export default RootNavigator;
