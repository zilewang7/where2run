import React, { useEffect } from "react";
import { Skeleton, Card, Button, Typography, Table } from "antd";
import { CheckCircleOutlined, HomeOutlined } from "@ant-design/icons";
import { ColumnsType } from "antd/es/table";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { delProductFShoppingCart } from "../../redux/slices/shoppingCartSlice";
import { useSelectorWithType } from "../../redux/hooks";

const { Meta } = Card;
const { Title, Text } = Typography;

interface OrderItem {
  key: number;
  item: string;
  amount: string | number | JSX.Element;
}

const columns: ColumnsType<OrderItem> = [
  {
    title: "产品",
    dataIndex: "item",
    key: "item",
  },
  {
    title: "价格",
    dataIndex: "amount",
    key: "amount",
  },
];

interface PropsType {
}

export const CheckOutCard: React.FC<PropsType> = () => {
  const username = useSelectorWithType(state => state.user.username);
  const shoppingCartList = useSelectorWithType(state => state.shoppingCart);
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState<string>('none');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [shoppingCart, setShoppingCart] = useState<string[]>([]);

  useEffect(() => {
    shoppingCartList.forEach((i) => {
      if (i.username === username) {
        setShoppingCart(i.ShoppingCart)
      }
    })
  }, [shoppingCartList, username])


  const setFakeData = (shoppingCart: string[]): any[] => {
    let fakeData: any[] = [];
    if (shoppingCart.length) {
      shoppingCart.forEach((i, index) => {
        fakeData[index] = {
          key: index,
          item: `旅游线路${i}`,
          amount: (
            <>
              <Text delete>¥ 1919810 </Text>{" "}
              <Text type="danger" strong>
                ¥ 114514
              </Text>
            </>
          ),
        }
      })
    }
    return fakeData;
  }



  return (
    <Card
      style={{ width: 600, marginTop: 50 }}
      actions={[
        order === "Completed" ? (
          <Button
            type="primary"
            onClick={() => {
              navigate("/");
            }}
            loading={loading}
          >
            <HomeOutlined />
            回到首页
          </Button>
        ) : (
          <Button type="primary"
            danger
            onClick={() => {
              setLoading(true);
              setTimeout(() => {
                dispatch(delProductFShoppingCart(username))
                setLoading(false);
                setOrder("Completed");
              }, 2000)

            }}
            loading={loading}>
            <CheckCircleOutlined />
            支付
          </Button>
        ),
      ]}
    >
      <Skeleton loading={loading} active>
        <Meta
          title={
            <Title level={2}>
              {order === "Completed" ? "支付成功" : `总计：${114514 * shoppingCart.length}`}
            </Title>
          }
          description={
            <Table<OrderItem>
              columns={columns}
              dataSource={setFakeData(shoppingCart)}
              showHeader={false}
              size="small"
              bordered={false}
              pagination={false}
            />
          }
        />
      </Skeleton>
    </Card>
  );
};
