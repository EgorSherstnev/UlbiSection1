import React from 'react'
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from './ThemeContext';

const ThemeProvider = () => {
    const [theme, setTheme] = useState<Theme>(localStorage.getItem(LOCAL_STORAGE_THEME_KEY));

    const toggleTheme = () => {
      setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
    } 
  return (
    <ThemeContext.Provider value={{
        theme: ,
        setTheme: ;
        }
  
    }}>

    </ThemeContext.Provider>
  )
}

export default ThemeProvider;