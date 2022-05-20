import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { DetailPage, HomePage, RegisterPage, SearchPage, ShoppingCartPage, SignInPage } from "../pages";
import { useSelectorWithType } from "../redux/hooks";



export const Router = () => {
    const { username } = useSelectorWithType(state => state.user);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="test" element={<h1>test</h1>} />
                <Route path="signIn" element={<SignInPage />} />
                <Route path="register" element={<RegisterPage />} />
                <Route path="detail/:id" element={<DetailPage />} />
                <Route path="search" element={<SearchPage />} />
                <Route path="search/:keywords" element={<SearchPage />} />
                {
                    username ? <Route path="shoppingCart" element={<ShoppingCartPage />} /> :
                        <Route path="shoppingCart" element={<Navigate to={'/signIn'} />} />
                }
                { // 数据持久化之后修改该代码，与 signPage 有重复判断
                    <Route path="*" element={<h2>迷路了？<a href="/">回到首页</a></h2>} />
                }
            </Routes>
        </BrowserRouter>
    )
}