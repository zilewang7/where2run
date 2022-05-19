import { GlobalOutlined } from '@ant-design/icons';
import styles from "./Header.module.css"
import { Typography, Dropdown, Menu, Button } from 'antd';
import React from 'react'

export function HeaderOfHeader(props) {
    return (<div className={styles['top-header']}>
        <div className={styles.inner}>
            <Typography.Text>{props.t("header.slogan")}</Typography.Text>
            <Dropdown.Button style={{
                marginLeft: 15
            }} overlay={<Menu onClick={props.languageChange}>
                {props.language.languageList.map(l => {
                    return <Menu.Item key={l.code}>{l.name}</Menu.Item>;
                })}
            </Menu>} icon={<GlobalOutlined />}>
                {props.language.language === 'zh' ? '中文' : props.language.language === 'en' ? 'English' : '家乡话'}
            </Dropdown.Button>
            <Button.Group className={styles['button-group']}>
                <Button onClick={() => {
                    props.navigate('/register');
                }}>{props.t("header.register")}</Button>
                <Button onClick={() => {
                    props.navigate('/signIn');
                }}>{props.t("header.signin")}</Button>
            </Button.Group>
        </div>
    </div>);
}
