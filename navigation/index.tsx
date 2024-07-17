import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppStack from './AppStack';

export default function Navigation() {




  return (
    <NavigationContainer  >
      <AppStack />
    </NavigationContainer>
  );
}







