import { Row, Col } from 'antd'
import React from 'react'
import { CheckOutCard, PaymentForm } from '../../components'
import { MainLayout } from '../../layouts/mainLayout'

export const OrderPage = () => {
    return (
        <MainLayout>
            <Row>
                <Col span={12}>
                    <PaymentForm />
                </Col>
                <Col span={12}>
                    <CheckOutCard
                    />
                </Col>
            </Row>
        </MainLayout>
    )
}
