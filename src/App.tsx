import React from 'react';
import styles from './App.module.css';
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Router } from './router';
import enUS from 'antd/lib/locale/en_US';
import zhCN from 'antd/lib/locale/zh_CN';
import jaJP from 'antd/lib/locale/ja_JP';
import { ConfigProvider } from 'antd';
import { useSelectorWithType } from './redux/hooks';


function App() {
  const { language } = useSelectorWithType(state => state.language);
  let nowLang;
  switch (language) {
    case "zh":
      nowLang = zhCN;
      break;
    case "en":
      nowLang = enUS;
      break;
    case "jp":
      nowLang = jaJP;
      break;
  }
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

export default App;
