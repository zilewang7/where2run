import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Router } from './router';
import enUS from 'antd/lib/locale/en_US';
import zhCN from 'antd/lib/locale/zh_CN';
import jaJP from 'antd/lib/locale/ja_JP';
import { ConfigProvider } from 'antd';
import { useDispatchWithType, useSelectorWithType } from './redux/hooks';
import Cookies from 'js-cookie';
import { getLanguageCookie } from './redux/slices/languageSlice';
import { getUserCookie } from './redux/slices/userSlice';
import { getShopCookie } from './redux/slices/shoppingCartSlice';

function App() {
  // console.log(process.env.NODE_ENV)
  const dispatch = useDispatchWithType();
  const language = useSelectorWithType(state => state.language);
  const user = useSelectorWithType(state => state.user);
  const shoppingCart = useSelectorWithType(state => state.shoppingCart);
  const [cookies, setCookies] = useState<any>({
    user: undefined,
    shoppingCart: undefined,
    language: undefined,
  })
  const [ifSet, setIfSet] = useState<boolean>(false);

  useEffect(() => {
    if (!ifSet) {
      const userStr = Cookies.get('user');
      const shoppingCartStr = Cookies.get('shoppingCart');
      const languageStr = Cookies.get('language');
      if (!!(userStr && shoppingCartStr && languageStr)) {
        // console.log('检测到cookie,读取cookie')
        setCookies({
          user: JSON.parse(userStr),
          shoppingCart: JSON.parse(shoppingCartStr),
          language: JSON.parse(languageStr),
        })
      } else {
        // console.log('未检测到cookie,设置初始cookie')
        Cookies.set('user', JSON.stringify(user))
        Cookies.set('shoppingCart', JSON.stringify(shoppingCart))
        Cookies.set('language', JSON.stringify(language))
      }
    } else {
      // console.log('常规更新cookie:')
      // console.log('user:', user)
      // console.log('shop:', shoppingCart)
      // console.log('lang:', language)
      Cookies.set('user', JSON.stringify(user))
      Cookies.set('shoppingCart', JSON.stringify(shoppingCart))
      Cookies.set('language', JSON.stringify(language))
    }
    setIfSet(true);
  }, [cookies, dispatch, ifSet, language, shoppingCart, user])

  useEffect(() => {
    // console.log('首次获取到的cookie', cookies);
    // log twice
    if (cookies.user)
      dispatch(getUserCookie(cookies.user));
    if (cookies.shoppingCart)
      dispatch(getShopCookie(cookies.shoppingCart));
    if (cookies.language)
      dispatch(getLanguageCookie(cookies.language));
  }, [cookies, dispatch])

  const [nowLang, setNowLang] = useState<any>();
  useEffect(() => {
    switch (language.language) {
      case "zh":
        setNowLang(zhCN);
        break;
      case "en":
        setNowLang(enUS);
        break;
      case "jp":
        setNowLang(jaJP);
        break;
    }
  }, [language])




  return (
    <div className={styles.App}>
      <ConfigProvider locale={nowLang}>
        <Router />
      </ConfigProvider>

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
    </div >
  );
}

// App.whyDidYouRender = true;

export default App;

