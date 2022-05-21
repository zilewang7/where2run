import { Affix, Col, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { PaymentCard, Product, ProductList } from '../../components'
import { MainLayout } from '../../layouts/mainLayout'
import { useDispatchWithType, useSelectorWithType } from '../../redux/hooks'
import { delProductFShoppingCart } from '../../redux/slices/shoppingCartSlice'
import styles from './ShoppingCartPage.module.css'


export const ShoppingCartPage = () => {
    const { username } = useSelectorWithType(state => state.user);
    const shoppingCartList = useSelectorWithType(state => state.shoppingCart);
    const dispatch = useDispatchWithType()
    const navigate = useNavigate()
    const [shoppingCart, setShoppingCart] = useState<string[]>([]);

    useEffect(() => {
        shoppingCartList.forEach((i) => {
            if (i.username === username) {
                setShoppingCart(i.ShoppingCart)
            }
        })
    }, [shoppingCartList, username])

    useEffect(() => {

    })

    const setFakeData = (shoppingCartList: string[]): Product[] => {
        let fakeData: any[] = [];
        shoppingCartList.forEach((i) => {
            fakeData.push({
                departureCity: `路线${i}`,
                description: `旅游线路${i}描述是怎么回事呢？旅游线路${i}相信大家都很熟悉，但是描述是怎么回事呢？下面就让小编带大家一起了解吧。 
                    旅游线路${i}描述，其实就是描述了。那么旅游线路${i}为什么会描述，相信大家都很好奇是怎么回事。大家可能会感到很惊讶，旅游线路${i}怎么会描述呢？但事实就是这样，小编也感到非常惊讶。那么这就是关于旅游线路${i}描述的事情了，大家有没有觉得很神奇呢？`,
                discountPresent: 1,
                id: `${i}`,
                originalPrice: 114514,
                price: 1919810,
                rating: 5,
                title: `旅游线路${i}`,
                touristRoutePictures: [{ url: `https://api.ixiaowai.cn/gqapi/gqapi.php?index=${i}` }],
                travelDays: '114514',
                tripType: `${i}类型`
            })
        })
        return fakeData;
    }

    return (
        <MainLayout>
            <Row>
                <Col span={16}>
                    <div className={styles['product-list-container']}>
                        <ProductList data={setFakeData(shoppingCart)} />
                    </div>
                </Col>
                <Col span={8}>
                    <Affix >
                        <div className={styles['payment-card-container']}>
                            <PaymentCard
                                loading={false}
                                originalPrice={1919810}
                                price={114514 * shoppingCart.length}
                                onShoppingCartClear={() => { dispatch(delProductFShoppingCart(username)) }}
                                onCheckout={() => { navigate('/order') }}
                            />
                        </div>
                    </Affix>
                </Col>
            </Row>
        </MainLayout>
    )
}
