import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { StatusBar } from 'react-native';
import Navigation from './navigation';
import useCachedResources from './hooks/useCachedResources';


export default function App() {
  const isLoadingComplete = useCachedResources();



  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <Navigation />
        <StatusBar />
      </Provider>
    );
  }
}