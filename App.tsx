import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './store';
import AppStack from './navigation/AppStack';
import { StatusBar } from 'react-native';
import Navigation from './navigation';


function App() {


  return (
    <Provider store={store}>
      <Navigation />
      <StatusBar />
    </Provider>
  );

}