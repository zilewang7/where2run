import { Input, Layout, Menu, Typography } from "antd";
import type { MenuProps } from 'antd';
import React from "react";
import styles from "./Header.module.css"
import logo from '../../assets/icon/run.png';
import { useNavigate, Link } from 'react-router-dom'
import { changeLanguage } from "../../redux/slices/languageSlice";
import { useTranslation } from 'react-i18next'
// import { RootState } from "../../redux/store";
import { /*useSelector,*/ useDispatch } from 'react-redux'
import { useSelectorWithType } from "../../redux/hooks";
import { HeaderOfHeader } from "./HeaderOfHeader";





export const Header: React.FC = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch()

    const { t } = useTranslation();
    const language = useSelectorWithType((state) => state.language);
    const languageChange = (e) => {
        dispatch(changeLanguage(e.key));
    }

    const items: MenuProps['items'] = [
        {
            label: `${t("header.home_page")}`,
            key: `home_page`
        }, {
            label: `${t("header.weekend")}`,
            key: `weekend`
        }, {
            label: `${t("header.group")}`,
            key: `group`
        }, {
            label: `${t("header.backpack")}`,
            key: `backpack`
        }, {
            label: `${t("header.private")}`,
            key: `private`
        }, {
            label: `${t("header.cruise")}`,
            key: `cruise`
        }, {
            label: `${t("header.hotel")}`,
            key: `hotel`
        }, {
            label: `${t("header.local")}`,
            key: `local`
        }, {
            label: `${t("header.theme")}`,
            key: `theme`
        }, {
            label: `${t("header.custom")}`,
            key: `custom`
        }, {
            label: `${t("header.study")}`,
            key: `study`
        }, {
            label: `${t("header.visa")}`,
            key: `visa`
        }, {
            label: `${t("header.enterprise")}`,
            key: `enterprise`
        }, {
            label: `${t("header.high_end")}`,
            key: `high_end`
        }, {
            label: `${t("header.outdoor")}`,
            key: `outdoor`
        }, {
            label: `${t("header.insurance")}`,
            key: `insurance`
        },
    ]
    const [current, setCurrent] = React.useState<string>(t("header.home_page"));
    const onClick: MenuProps['onClick'] = e => {
        setCurrent(e.key);
        navigate('/');
    }

    return (
        <div className={styles['app-header']} >
            <HeaderOfHeader navigate={navigate} t={t} language={language} languageChange={languageChange} dispatch={dispatch}></HeaderOfHeader>
            <Layout.Header className={styles['main-header']}>
                <Link to='/'>
                    <img src={logo} alt="润" className={styles['App-logo']} />
                    <Typography.Title level={3} className={styles.title}> {t("header.title")}</Typography.Title>
                </Link>
                <Input.Search
                    placeholder={t("header.where2run")}
                    className={styles['search-input']}
                    onSearch={(keywords) => { navigate(`/search/${keywords}`) }}
                >
                </Input.Search>
            </Layout.Header>
            <div
                style={{
                    display: "flex",
                    justifyContent: 'center',
                    background: "linear-gradient(90deg, #00d0d4 50%,  #9effa4 50%)"
                }}>
                <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} className={styles["main-menu"]} />
            </div>

        </div >
    )
}