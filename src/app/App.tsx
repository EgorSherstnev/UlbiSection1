import { Route, Routes, Link } from 'react-router-dom';
import './styles/index.scss'
import { Suspense, useContext, useState } from 'react';
import { classNames } from 'shared/lib/classsNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useTranslation } from 'react-i18next';

const Component = () => {

}

const App = () => {
  const { theme } = useTheme();

  return (
    <div className= {classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App;
