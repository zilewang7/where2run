import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Router } from './router';
import enUS from 'antd/lib/locale/en_US';
import zhCN from 'antd/lib/locale/zh_CN';
import jaJP from 'antd/lib/locale/ja_JP';
import { ConfigProvider } from 'antd';
import { useDispatchWithType, useSelectorWithType } from './redux/hooks';
import { getLanguageLocalStorage } from './redux/slices/languageSlice';
import { getUserLocalStorage } from './redux/slices/userSlice';
import { getShopLocalStorage } from './redux/slices/shoppingCartSlice';

function App() {
  // console.log(process.env.NODE_ENV)
  const dispatch = useDispatchWithType();
  const language = useSelectorWithType(state => state.language);
  const user = useSelectorWithType(state => state.user);
  const shoppingCart = useSelectorWithType(state => state.shoppingCart);

  const [ifSet, setIfSet] = useState<boolean>(false);

  const [localStorages, setLocalStorages] = useState<any>({
    user: undefined,
    shoppingCart: undefined,
    language: undefined,
  })

  useEffect(() => {
    if (!ifSet) {//首次进入
      //获取localStorage
      const userStr = localStorage.getItem('user');
      const shoppingCartStr = localStorage.getItem('shoppingCart');
      const languageStr = localStorage.getItem('language');
      //如果已有,转换为对象
      if (!!(userStr && shoppingCartStr && languageStr)) {
        setLocalStorages({
          user: JSON.parse(userStr),
          shoppingCart: JSON.parse(shoppingCartStr),
          language: JSON.parse(languageStr),
        })
      } else {
        //没有则初始化
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
        localStorage.setItem('language', JSON.stringify(language))
      }
      setIfSet(true);//标记初始化完成
    } else {//状态更新
      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
      localStorage.setItem('language', JSON.stringify(language))
    }
  }, [ifSet, language, shoppingCart, user])


  useEffect(() => {//根据获取到的LocalStorage改变状态
    if (localStorages.user)
      dispatch(getUserLocalStorage(localStorages.user));
    if (localStorages.shoppingCart)
      dispatch(getShopLocalStorage(localStorages.shoppingCart));
    if (localStorages.language)
      dispatch(getLanguageLocalStorage(localStorages.language));
  }, [localStorages, dispatch])



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

