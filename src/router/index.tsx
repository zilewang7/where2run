import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DetailPage, HomePage, RegisterPage, SignInPage } from "../pages";

//引入路由组件
// BrowserRouter相当于路由模式中的history模式，可以让ur1不带#
// HashRouter相当于路由模式中的hash模式，url携带#
//所有的Route组件都必须包含在Routes组件中

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<App />} >
                    <Route index element={<HomePage />} />
                    <Route path="test" element={<h1>test</h1>} />
                    <Route path="signIn" element={<SignInPage />} />
                    <Route path="register" element={<RegisterPage />} />
                </Route> */}
                <Route path="/" element={<HomePage />} />
                <Route path="test" element={<h1>test</h1>} />
                <Route path="signIn" element={<SignInPage />} />
                <Route path="register" element={<RegisterPage />} />
                <Route path="detail/:id" element={<DetailPage />} />
                <Route path="*" element={<h2>迷路了？<a href="/">回到首页</a></h2>} ></Route>
            </Routes>
        </BrowserRouter>
    )
}