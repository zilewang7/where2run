import React, { useEffect } from "react";
import styles from "./DetailPage.module.css"
import { useNavigate, useParams } from 'react-router-dom'
import { Footer, Header, ProductComments, ProductIntro } from "../../components";
import { Row, Col, Divider, Typography, Anchor, Button } from "antd";
import { DatePicker } from 'antd';

import PNG1 from "../../assets/detailImg/1.png"
import PNG2 from "../../assets/detailImg/2.png"
import PNG3 from "../../assets/detailImg/3.png"
import PNG4 from "../../assets/detailImg/4.png"
import TS from "../../assets/detailImg/ts.png"
import { commentMockData } from "./mockup";
import { ShoppingOutlined } from "@ant-design/icons";
import { addProduct2ShoppingCart } from "../../redux/slices/shoppingCartSlice";
import { useDispatchWithType, useSelectorWithType } from "../../redux/hooks";


const { Link } = Anchor;
const { RangePicker } = DatePicker;



const picSrc = [PNG1, PNG2, PNG3, PNG4];

export const DetailPage: React.FC = (props) => {
    const navigate = useNavigate()
    const id = Object.values(useParams())[0];
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const username = useSelectorWithType(state => state.user.username)
    const dispatch = useDispatchWithType();

    return (
        <>
            <Header />
            <div className={styles["page-content"]}>
                <div className={styles["product-intro-container"]}>
                    <Row>
                        <Col span={13}><ProductIntro
                            title={`${id}号旅游路线`}
                            shortDescription={
                                `${id}号旅游路线的介绍是怎么回事呢？${id}号旅游路线相信大家都很熟悉，但是的介绍是怎么回事呢？下面就让小编带大家一起了解吧。 ${id}号旅游路线的介绍，其实就是的介绍了。那么${id}号旅游路线为什么会的介绍，相信大家都很好奇是怎么回事。大家可能会感到很惊讶，${id}号旅游路线怎么会的介绍呢？但事实就是这样，小编也感到非常惊讶。那么这就是关于${id}号旅游路线的介绍的事情了，大家有没有觉得很神奇呢？`}
                            price={"114,514"}
                            coupons={"-￥1,805,296"}
                            points={"1"}
                            discount={"1,919,810"}
                            rating={"5.0"}
                            pictures={picSrc}
                        /></Col>
                        <Col span={11}>
                            <Button
                                type="primary"
                                danger
                                className={styles.addCart}
                                onClick={() => (username ? dispatch(addProduct2ShoppingCart({ username: username, id: id })) : navigate("/signIn"))}
                            >
                                <ShoppingOutlined />
                                加入购物车
                            </Button>
                            {/* <div style={{ marginLeft: "20%", display: 'inline-block' }}><Button size="large">立即购买</Button></div> */}
                            <RangePicker open style={{ marginTop: 20 }} />
                        </Col>
                    </Row>
                </div>

                <Anchor className={styles["product-detail-anchor"]}>
                    <Link href="#feature" title="产品特色" />
                    <Link href="#fees" title="费用" />
                    <Link href="#notes" title="须知" />
                    <Link href="#comments" title="评论" />
                </Anchor>

                <div id="feature" className={styles["product-detail-container1"]}>
                    <Divider orientation={"center"}><Typography.Title level={3}>产品特色</Typography.Title></Divider>
                    <img src={TS} alt="" style={{ display: "block", margin: "0 auto" }} />
                </div>
                <div id="fees" className={styles["product-detail-container"]}>
                    <Divider orientation={"center"}><Typography.Title level={3}>费用明细</Typography.Title></Divider>
                    <p style={{ margin: "3%" }}>费用明细是怎么回事呢？费用相信大家都很熟悉，但是明细是怎么回事呢？下面就让小编带大家一起了解吧。
                        费用明细，其实就是明细了。那么费用为什么会明细，相信大家都很好奇是怎么回事。大家可能会感到很惊讶，费用怎么会明细呢？但事实就是这样，小编也感到非常惊讶。那么这就是关于费用明细的事情了，大家有没有觉得很神奇呢？
                        费用明细是怎么回事呢？费用相信大家都很熟悉，但是明细是怎么回事呢？下面就让小编带大家一起了解吧。
                        费用明细，其实就是明细了。那么费用为什么会明细，相信大家都很好奇是怎么回事。大家可能会感到很惊讶，费用怎么会明细呢？但事实就是这样，小编也感到非常惊讶。那么这就是关于费用明细的事情了，大家有没有觉得很神奇呢？
                        费用明细是怎么回事呢？费用相信大家都很熟悉，但是明细是怎么回事呢？下面就让小编带大家一起了解吧。
                        费用明细，其实就是明细了。那么费用为什么会明细，相信大家都很好奇是怎么回事。大家可能会感到很惊讶，费用怎么会明细呢？但事实就是这样，小编也感到非常惊讶。那么这就是关于费用明细的事情了，大家有没有觉得很神奇呢？
                    </p>
                </div>
                <div id="notes" className={styles["product-detail-container"]}>
                    <Divider orientation={"center"}><Typography.Title level={3}>游前须知</Typography.Title></Divider>
                    <p style={{ margin: "3%" }}>游前须知是怎么回事呢？游前相信大家都很熟悉，但是须知是怎么回事呢？下面就让小编带大家一起了解吧。
                        游前须知，其实就是须知了。那么游前为什么会须知，相信大家都很好奇是怎么回事。大家可能会感到很惊讶，游前怎么会须知呢？但事实就是这样，小编也感到非常惊讶。那么这就是关于游前须知的事情了，大家有没有觉得很神奇呢？
                        看了今天的内容，大家有什么想法呢？欢迎在评论区告诉小编一起讨论哦。
                        游前须知是怎么回事呢？游前相信大家都很熟悉，但是须知是怎么回事呢？下面就让小编带大家一起了解吧。
                        游前须知，其实就是须知了。那么游前为什么会须知，相信大家都很好奇是怎么回事。大家可能会感到很惊讶，游前怎么会须知呢？但事实就是这样，小编也感到非常惊讶。那么这就是关于游前须知的事情了，大家有没有觉得很神奇呢？
                        看了今天的内容，大家有什么想法呢？欢迎在评论区告诉小编一起讨论哦。
                    </p>
                </div>
                <div id="comments" className={styles["product-detail-container"]}>
                    <Divider orientation={"left"}><Typography.Title level={3}>评论</Typography.Title></Divider>
                    <div style={{ marginLeft: "5%", marginRight: "5%" }}><ProductComments data={commentMockData} /></div>

                </div>
            </div>
            <Footer />
        </>
    );


}