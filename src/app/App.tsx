import { Route, Routes, Link } from 'react-router-dom';
import './styles/index.scss'
import { Suspense, useContext, useState } from 'react';
import { classNames } from 'shared/lib/classsNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { AppRouter } from './providers/router';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className= {classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <AppRouter />
    </div>
  )
}

export default App;
