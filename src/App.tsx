import IconLight from './assets/IconLight.svg';
import IconDark from './assets/IconDark.svg';
import IconLogoCompanyLight from './assets/IconLogoCompanyLight.svg';
import IconLogoCompanyDark from './assets/IconLogoCompanyDark.svg';
import styles from './scss/Home.module.scss';
import { CardList } from './components/CardList';
import { useState } from 'react';
import { SearchPaitings } from './components/SearchPaintings';
import { useFetchPaintings } from './hooks/fetchPaintingsData';
import { useTheme } from './hooks/themeProvider';
function App() {
  const [value, setValue] = useState('')
  const [currentPage, setCurrentPage] = useState(1);
   const [paintings, isPending] = useFetchPaintings(currentPage,value);
const { theme, toggleTheme} = useTheme() 
  const isLightTheme = theme === 'light' ? ' ' + styles.light : ''

  return (
    <div className={styles.wrapper + (theme === 'dark' ? ' ' + styles.dark : '')} >
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={""}>
            <img src={isLightTheme?IconLogoCompanyLight:IconLogoCompanyDark} alt="" />
          </div>
          <div className={styles.wrapperThemeIcon + isLightTheme}>
            <img onClick={()=>toggleTheme()} className={styles.ThemeIcon} src={theme === "light"?IconDark:IconLight} alt="" />
          </div>
        </div>
        <div className={styles.paidingWrapper}>
        <SearchPaitings value={value} setValue={setValue}/>
        </div>
        <div  >
         <CardList isPending={isPending} paintings={paintings} currentPage={currentPage} setCurrentPage={setCurrentPage} value={value}/>
        </div>
      </div>
    </div>
  );
}

export default App;
