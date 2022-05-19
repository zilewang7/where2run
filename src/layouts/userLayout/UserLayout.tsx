import React from "react";
import styles from "./UserLayout.module.css";
import logo from '../../assets/icon/run.png';
import { Link, useNavigate } from "react-router-dom";
import { Layout } from "antd";
import { HeaderOfHeader } from "../../components/header/HeaderOfHeader";
import { changeLanguage } from "../../redux/reducers/languageReducer";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useSelectorWithType } from "../../redux/hooks";
const { Footer, Content } = Layout;

type PropsType = {
  children: any;
}

export const UserLayout: React.FC<PropsType> = (props) => {
  const navigate = useNavigate();

  const dispatch = useDispatch()

  const { t } = useTranslation();
  const language = useSelectorWithType((state) => state.language);
  const languageChange = (e) => {
    dispatch(changeLanguage(e.key));
  }

  return (
    <Layout className={styles["user-layout-container"]}>
      <HeaderOfHeader navigate={navigate} t={t} language={language} languageChange={languageChange}></HeaderOfHeader>
      <Content className={styles["content"]}>
        <div className={styles["top"]}>
          <div className={styles["content-header"]}>
            <Link to="/">
              <img alt="logo" className={styles["logo"]} src={logo} />
              <span className={styles["title"]}>{t("header.title")}</span>
            </Link>
          </div>
          <div className={styles["desc"]}>
            RUN!!!!!!!!!!!!!!!!!!!!!!!!!!!!!?
          </div>
          {props.children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>FOOTERFOOTERFOOTERFOOTER</Footer>
    </Layout>
  );
};
