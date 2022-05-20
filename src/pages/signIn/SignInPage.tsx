import React from "react";
import { SignInForm } from "../../components";
import { UserLayout } from "../../layouts/userLayout";
import styles from "./SignInPage.module.css"

export const SignInPage: React.FC = () => {
    return (
        <UserLayout >
            <div className={styles["page-content"]}>
                <div className={styles.title}>
                    <h1>登录</h1>
                </div>
                <SignInForm />
            </div>
        </UserLayout>
    );
}