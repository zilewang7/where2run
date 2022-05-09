import { Layout, Typography } from "antd";
import React from "react";
import styles from "./Footer.module.css"

export const Footer: React.FC = () => {

    return (
        <>
            <Layout.Footer>
                <Typography.Title level={3} style={{ textAlign: 'center' }}>
                    嗨呀，西方这是怎么会是，还是八润了
                </Typography.Title>
            </Layout.Footer>
        </>
    )
}