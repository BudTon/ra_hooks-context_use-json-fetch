// import { useState, useEffect } from 'react';
import Data from './components/Data';
import Error from './components/Error';
import Loading from './components/Loading';
import './App.css'

export default function App() {
  const baseUrl = import.meta.env.VITE_APP_URL;

  return (
    <div className={'container'}>
      <h1>8. Hooks & Context API</h1>
      <h2>8.2 useJsonFetch</h2>
      <div >
        <Data baseUrl={baseUrl} opts={'/data'}/>
        <Error baseUrl={baseUrl} opts={'/error'} />
        <Loading baseUrl={baseUrl} opts={'/loading'} />
      </div>
    </div>
  );
};

