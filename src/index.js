import React from 'react';
import { StatusBar } from 'react-native';

import './config/ReactoTronConfig';

import Routes from './routes';

function App() {
  return (
    <>
      <StatusBar backgroundColor="#5b2d83" barStyle="light-content" />
      <Routes />
    </>
  );
}

export default App;
