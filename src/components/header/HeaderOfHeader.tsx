import { GlobalOutlined } from '@ant-design/icons';
import styles from "./Header.module.css"
import { Typography, Dropdown, Menu, Button } from 'antd';
import React from 'react'
import { useSelectorWithType } from '../../redux/hooks';
import { logOut } from '../../redux/reducers/userReducer';



export function HeaderOfHeader(props) {
    const { username } = useSelectorWithType(state => state.user)
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
                {username ? <>
                    <span style={{ marginRight: "10px" }}>{props.t("header.welcome")}<Typography.Text strong>{username}</Typography.Text></span>
                    <Button onClick={() => {
                        props.navigate('shoppingCart')
                    }}>{props.t("header.shoppingCart")}</Button>
                    <Button onClick={() => {
                        props.dispatch(logOut())
                        props.navigate('/')
                        window.location.reload();
                    }}>{props.t("header.signOut")}</Button>

                </>
                    : <>
                        <Button onClick={() => {
                            props.navigate('/register');
                        }}>{props.t("header.register")}</Button>
                        <Button onClick={() => {
                            props.navigate('/signIn');
                        }}>{props.t("header.signin")}</Button>
                    </>
                }

            </Button.Group>
        </div>
    </div>);
}
