import { Route, Routes, Link } from 'react-router-dom';
import Counter from './components/Counter';
import './index.scss'
import AboutPage from './pages/AboutPage/AboutPage';
import MainPage from './pages/MainPage/MainPage';

const App = () => {
  return (
    <div className='app'>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/about' element={<AboutPage />} />
        {/* <Route path='/contact' element={<Contact />} /> */}
        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </div>
  )
}

export default App;
