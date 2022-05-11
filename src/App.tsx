import React from 'react';
import styles from './App.module.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages";

function App() {
  return (
    <div className={styles.App}>
      {/* <BrowserRouter>
        <Route path='/' element={<HomePage />} />
      </BrowserRouter> */}
      {/* <HomePage /> */}
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </div >
  );
}

export default App;
