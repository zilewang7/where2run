import { GlobalOutlined } from "@ant-design/icons";
import { Button, Dropdown, Input, Layout, Menu, Typography } from "antd";
import React from "react";
import styles from "./Header.module.css"
import logo from '../../assets/icon/run.png';
import { useNavigate, Link } from 'react-router-dom'
import { changeLanguage } from "../../redux/reducers/languageReducer";
import { useTranslation } from 'react-i18next'
// import { RootState } from "../../redux/store";
import { /*useSelector,*/ useDispatch } from 'react-redux'
import { useSelectorWithType } from "../../redux/hooks";


export const Header: React.FC = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch()

    const { t } = useTranslation();
    const language = useSelectorWithType((state) => state.language);
    const languageChange = (e) => {
        dispatch(changeLanguage(e.key));
    }

    return (
        <div className={styles['app-header']} >
            <div className={styles['top-header']}>
                <div className={styles.inner}>
                    <Typography.Text>{t("header.slogan")}</Typography.Text>
                    <Dropdown.Button
                        style={{ marginLeft: 15 }}
                        overlay={
                            <Menu onClick={languageChange}>
                                {language.languageList.map(l => {
                                    return <Menu.Item key={l.code}>{l.name}</Menu.Item>
                                })}
                            </Menu>
                        }
                        icon={<GlobalOutlined />}
                    >
                        {language.language === 'zh' ? '中文' : (language.language === 'en' ? 'English' : '家乡话')}
                    </Dropdown.Button>
                    <Button.Group className={styles['button-group']}>
                        <Button onClick={() => { navigate('register') }}>{t("header.register")}</Button>
                        <Button onClick={() => { navigate('signIn') }}>{t("header.signin")}</Button>
                    </Button.Group>
                </div>
            </div>
            <Layout.Header className={styles['main-header']}>
                <Link to='/'>
                    <img src={logo} alt="润" className={styles['App-logo']} />
                    <Typography.Title level={3} className={styles.title}> {t("header.title")}</Typography.Title>
                </Link>
                <Input.Search placeholder={t("header.where2run")} className={styles['search-input']}>
                </Input.Search>
            </Layout.Header>
            <div
                style={{
                    display: "flex",
                    justifyContent: 'center',
                    background: "linear-gradient(90deg, #00d0d4 50%,  #9effa4 50%)"
                }}>
                <Menu mode={"horizontal"} className={styles["main-menu"]}>
                    <Menu.Item key="1">{t("header.home_page")}</Menu.Item>
                    <Menu.Item key="2">{t("header.weekend")}</Menu.Item>
                    <Menu.Item key="3">{t("header.group")}</Menu.Item>
                    <Menu.Item key="4"> {t("header.backpack")} </Menu.Item>
                    <Menu.Item key="5"> {t("header.private")} </Menu.Item>
                    <Menu.Item key="6"> {t("header.cruise")} </Menu.Item>
                    <Menu.Item key="7"> {t("header.hotel")} </Menu.Item>
                    <Menu.Item key="8"> {t("header.local")} </Menu.Item>
                    <Menu.Item key="9"> {t("header.theme")} </Menu.Item>
                    <Menu.Item key="10"> {t("header.custom")} </Menu.Item>
                    <Menu.Item key="11"> {t("header.study")} </Menu.Item>
                    <Menu.Item key="12"> {t("header.visa")} </Menu.Item>
                    <Menu.Item key="13"> {t("header.enterprise")} </Menu.Item>
                    <Menu.Item key="14"> {t("header.high_end")} </Menu.Item>
                    <Menu.Item key="15"> {t("header.outdoor")} </Menu.Item>
                    <Menu.Item key="16"> {t("header.insurance")} </Menu.Item>
                </Menu>
            </div>

        </div >
    )
}