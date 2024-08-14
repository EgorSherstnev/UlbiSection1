import { Route, Routes, Link } from 'react-router-dom';
import './styles/index.scss'
import { Suspense, useContext, useState } from 'react';
import { classNames } from 'helpers/classsNames/classNames';
import { MainPageAsync } from 'pages/MainPage/MainPage.async';
import { AboutPageAsync } from 'pages/AboutPage/AboutPage.async';
import { useTheme } from 'app/providers/ThemeProvider';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className= {classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<MainPageAsync />} />
          <Route path='/about' element={<AboutPageAsync />} />
          {/* <Route path='/contact' element={<Contact />} /> */}
          {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>
      </Suspense>
    </div>
  )
}

export default App;
