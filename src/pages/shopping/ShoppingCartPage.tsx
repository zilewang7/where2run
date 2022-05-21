import { Affix, Col, Row } from 'antd'
import React from 'react'
import { PaymentCard, ProductList } from '../../components'
import { MainLayout } from '../../layouts/mainLayout'
import styles from './ShoppingCartPage.module.css'


export const ShoppingCartPage = () => {
    return (
        <MainLayout>
            <Row>
                <Col span={16}>
                    <div className={styles['product-list-container']}>
                        {/* <ProductList /> */}
                    </div>
                </Col>
                <Col span={8}>
                    <Affix >
                        <div className={styles['payment-card-container']}>
                            {/* <PaymentCard /> */}
                        </div>
                    </Affix>
                </Col>
            </Row>
        </MainLayout>
    )
}
