import React from 'react'
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { Suspense, useContext, useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      {Object.values(routeConfig).map(({element, path}) => (
        <Route 
          key={path}
          element={element}
          path={path}
        />
      ))}
    </Routes>
  </Suspense>  )
}

export default AppRouter;
