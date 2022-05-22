import React, { useEffect, useState } from "react";
import {
  Skeleton,
  Switch,
  Card,
  Avatar,
  Button,
  Typography,
  Space,
  Tag,
  Table,
} from "antd";
import { DeleteOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { ColumnsType } from "antd/es/table";

const { Meta } = Card;
const { Title, Text } = Typography;

interface Item {
  key: number;
  item: string;
  amount: string | number | JSX.Element;
}

const columns: ColumnsType<Item> = [
  {
    title: "项目",
    dataIndex: "item",
    key: "item",
  },
  {
    title: "金额",
    dataIndex: "amount",
    key: "amount",
  },
];

interface PropsType {
  originalPrice: number;
  price: number;
  onShoppingCartClear: () => void;
  onCheckout: () => void;
}

export const PaymentCard: React.FC<PropsType> = ({
  originalPrice,
  price,
  onShoppingCartClear,
  onCheckout,
}) => {
  const [loading, setLoading] = useState(false);

  const paymentData: Item[] = [
    {
      key: 1,
      item: "原价",
      amount: <Text delete>¥ {originalPrice}</Text>,
    },
    {
      key: 3,
      item: "现价",
      amount: (
        <Title type="danger" level={2}>
          ¥ {price}
        </Title>
      ),
    },
  ];

  return (
    <Card
      style={{ width: 300, marginTop: 16 }}
      actions={[
        <Button type="primary" danger onClick={onCheckout} loading={loading} disabled={!price}>
          <CheckCircleOutlined />
          下单支付
        </Button>,
        <Button onClick={
          () => {
            setLoading(true);
            setTimeout(() => {
              setLoading(false)
              onShoppingCartClear();
            }, 800)
          }
        }
          loading={loading}
          disabled={!price}
        >
          <DeleteOutlined />
          清空
        </Button>,
      ]}
    >
      <Skeleton loading={loading} active>
        <Meta
          title={<Title level={2}>总计</Title>}
          description={
            <Table<Item>
              columns={columns}
              dataSource={paymentData}
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
