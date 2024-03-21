import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';

export const Layout = () => {
  const location = useLocation();
  let headerDisplay = './';
  if (location.pathname === '/') {
    headerDisplay = 'hidden';
  } else if (location.pathname === '/dashboard') {
    headerDisplay = 'block';
  } else {
   
    headerDisplay = 'valor-predeterminado';
  }

  return (
    <>
      <Header headerDisplay={headerDisplay} />
      <Outlet />
    </>
  );
};
