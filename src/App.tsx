import React from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { Global } from './styles/global';

function App() {
  return (
    <>
      <Global />
      <Header />
      <Dashboard />
    </>
  );
}

export default App;
