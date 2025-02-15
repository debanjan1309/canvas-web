// components/main/Main.js
import React from 'react';
import Header from '../header/Header';
import Routers from '../router/Routers';
import Footer from '../footer/Footer';

const Main = () => {
  return (
    <>
      <Header />
      <Routers />
      <Footer />
    </>
  );
};

export default Main;
