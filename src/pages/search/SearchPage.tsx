import React from 'react'
import { useParams } from 'react-router'
import { FilterArea, ProductList } from '../../components'
import { MainLayout } from '../../layouts/mainLayout'
import styles from './Search.module.css'




export const SearchPage: React.FC = () => {
    const { keywords } = useParams();
    const fakeDate = {
        data: [{
            departureCity: '下北泽',
            description: '下北泽圣地巡礼之旅;重要指数：☆*114514;地址：東京都世田谷区北沢3-23-14',
            discountPresent: 1,
            id: '114514',
            originalPrice: 114514,
            price: 1919810,
            rating: 5,
            title: '下北泽圣地巡礼',
            touristRoutePictures: [{ url: "https://pic2.zhimg.com/v2-f4feebd2b00413d18f6e839057580f7b_r.jpg?source=1940ef5c" }],
            travelDays: '114514',
            tripType: '圣地巡礼'
        },
        {
            departureCity: `路线${keywords}`,
            description: `旅游线路${keywords}描述是怎么回事呢？旅游线路${keywords}相信大家都很熟悉，但是描述是怎么回事呢？下面就让小编带大家一起了解吧。 
            旅游线路${keywords}描述，其实就是描述了。那么旅游线路${keywords}为什么会描述，相信大家都很好奇是怎么回事。大家可能会感到很惊讶，旅游线路${keywords}怎么会描述呢？但事实就是这样，小编也感到非常惊讶。那么这就是关于旅游线路${keywords}描述的事情了，大家有没有觉得很神奇呢？`,
            discountPresent: 1,
            id: `${keywords}`,
            originalPrice: 114514,
            price: 1919810,
            rating: 5,
            title: `旅游线路${keywords}`,
            touristRoutePictures: [{ url: "http://81.70.100.130/api/view.php" }],
            travelDays: '114514',
            tripType: `${keywords}类型`
        },
        ],
        paging: {
            currentPage: 1,
            pageSize: 10,
            totalCount: 2
        }
    }
    if (!keywords) {
        fakeDate.data.length = 1;
        fakeDate.paging.totalCount = 1;
    }

    return (
        <MainLayout >
            <div className={styles['product-list-container']}>
                <FilterArea />
            </div>
            <div className={styles['product-list-container']}>
                <ProductList data={fakeDate.data} paging={fakeDate.paging} />
            </div>
        </MainLayout>
    )
}