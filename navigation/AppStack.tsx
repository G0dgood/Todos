import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Haptics from 'expo-haptics';
import { useNavigation } from '@react-navigation/native';
import Todo from '../page/Todo';
import { TouchableOpacity } from 'react-native';
import AddTodos from '../page/AddTodos';
import { FontAwesome6 } from '@expo/vector-icons';



const Stack = createNativeStackNavigator();

function RootNavigator() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator initialRouteName="Todo" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Todo" component={Todo} />


      <Stack.Group screenOptions={{ presentation: 'modal' }} >

        < Stack.Screen name="AddTodos" component={AddTodos}
          options={({ navigation, route }: any) => ({
            headerShown: true,
            title: route.params?.title ?? 'Add Todos',
            headerRight: () => (
              <TouchableOpacity onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                navigation.goBack();
              }}>
                <FontAwesome6 name="xmark" size={24}
                  color={"#000"} />
              </TouchableOpacity>
            ),
          })} />
      </Stack.Group>
    </Stack.Navigator>
  );
}


export default RootNavigator;
