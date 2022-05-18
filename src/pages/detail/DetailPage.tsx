import React from "react";
import styles from "./DetailPage.module.css"
import { useParams } from 'react-router-dom'
import { Footer, Header, ProductIntro } from "../../components";
import { Row, Col } from "antd";
import { DatePicker } from 'antd';

import PNG1 from "../../assets/detailImg/1.png"
import PNG2 from "../../assets/detailImg/2.png"
import PNG3 from "../../assets/detailImg/3.png"
import PNG4 from "../../assets/detailImg/4.png"

const { RangePicker } = DatePicker;



const picSrc = [PNG1, PNG2, PNG3, PNG4];

export const DetailPage: React.FC = (props) => {
    const id = Object.values(useParams());
    return (
        <>
            <Header />
            <div className={styles["page-content"]}>
                <div className={styles["00product-intro-container"]}></div>
                <Row style={{ backgroundColor: 'white' }}>
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
                    <Col span={11}><RangePicker open style={{ marginTop: 20 }} /></Col>
                </Row>
                <div className={styles["product-detail-anchor"]}></div>
                <div id="feature" className={styles["product-detail-container"]}></div>
                <div id="fees" className={styles["product-detail-container"]}></div>
                <div id="notes" className={styles["product-detail-container"]}></div>
                <div id="comments" className={styles["product-detail-container"]}></div>
            </div>
            <Footer />
        </>
    );


}