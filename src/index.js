import React from 'react';
import { StatusBar } from 'react-native';

import './config/ReactoTronConfig';

import Routes from './routes';

function App() {
  return (
    <>
      <StatusBar backgroundColor="#17161B" barStyle="light-content" />
      <Routes />
    </>
  );
}

export default App;
