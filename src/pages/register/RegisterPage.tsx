import React from "react";
import { RegisterForm } from "../../components";
import { UserLayout } from "../../layouts/userLayout";
import styles from "./RegisterPage.module.css"

export const RegisterPage: React.FC = () => {
    return (
        <UserLayout >
            <div className={styles["page-content"]}>
                <div className={styles.title}>
                    <h1>注册</h1>
                </div>
                <RegisterForm />
            </div>

        </UserLayout>
    );
}