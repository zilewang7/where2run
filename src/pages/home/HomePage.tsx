import React, { useEffect } from "react";
import { Row, Col, Typography } from 'antd';
import { SideMenu, Carousel, ProductCollection, CovidMap, } from '../../components';
import { productList1, productList2, productList3 } from '../../pages/home/mockups';
import { useTranslation } from 'react-i18next'

import sideImage from '../../assets/images/sider_2019_12-09.png';
import sideImage2 from '../../assets/images/sider_2019_02-04.png';
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png';

import { MainLayout } from "../../layouts/mainLayout";


export const HomePage: React.FC = () => {
    const { t } = useTranslation();
    useEffect(() => {
        window.scrollTo(0, 0);

    }, []);
    return (
        <MainLayout >
            <Row style={{ marginTop: 20 }}>
                <Col span={6}>
                    <SideMenu />
                </Col>
                <Col span={18}>
                    <Carousel />
                </Col>
            </Row>
            <ProductCollection
                title={<Typography.Title level={3} type="warning">{t("home_page.hot_recommended")}</Typography.Title>}
                sideImage={sideImage}
                products={productList1}
            />
            <ProductCollection
                title={<Typography.Title level={3} type="danger">{t("home_page.new_arrival")}</Typography.Title>}
                sideImage={sideImage2}
                products={productList2}
            /><ProductCollection
                title={<Typography.Title level={3} type="success">{t("home_page.domestic_travel")}</Typography.Title>}
                sideImage={sideImage3}
                products={productList3}
            />
            <CovidMap />
        </MainLayout>

    );
}