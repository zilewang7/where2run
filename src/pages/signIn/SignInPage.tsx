import React from "react";
import { UserLayout } from "../../layouts/userLayout";
import styles from "./SignInPage.module.css"

export const SignInPage: React.FC = (props) => {
    console.log(props)
    return (
        <UserLayout >
            <h1>登录页面</h1>
        </UserLayout>

    );
}