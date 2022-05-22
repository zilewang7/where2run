import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { Input, Menu, MenuProps, Image } from "antd";
import styles from "./PaymentForm.module.css";
import { AlipaySquareFilled, CreditCardFilled, WechatFilled } from "@ant-design/icons";

import AliPay from '../../assets/pay/aliPay.jpg'
import WechatPay from '../../assets/pay/wechatPay.png'


export const PaymentForm: React.FC = () => {
  const [state, setState] = useState<any>({
    cvc: "",
    expiry: "",
    focus: "name",
    name: "",
    number: "",
  });

  const [payment, setPayment] = useState<'card' | 'aliPay' | 'wechatPay'>('card')

  const handleInputFocus = (e) => {
    console.log(e.target.name)
    if (e.target.name)
      setState({
        ...state,
        focus: e.target.name
      });
  };

  const handleInputChange = (e) => {
    if (e.target) {
      const { name, value } = e.target;
      setState({
        ...state,
        [name]: value
      });
    }
  };

  const items: MenuProps['items'] = [
    {
      label: 'CreditCard Payment',
      key: 'card',
      icon: <CreditCardFilled />,
    },
    {
      label: 'AliPay',
      key: 'aliPay',
      icon: <AlipaySquareFilled />,
    },
    {
      label: 'Wechat',
      key: 'wechatPay',
      icon: <WechatFilled />,
    },
  ]

  const [current, setCurrent] = React.useState('mail');

  const onClick: MenuProps['onClick'] = e => {
    setPayment(e.key as 'card' | 'aliPay' | 'wechatPay')
    setCurrent(e.key);
  };

  return (
    <div>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} style={{ backgroundColor: 'rgba(255, 255, 255, 0)', marginTop: 50, marginLeft: 65 }} />
      {payment === 'card' ?
        <div id="PaymentForm" style={{ marginTop: 30 }}>
          <Cards
            cvc={state.cvc}
            expiry={state.expiry}
            focused={state.focus as "name"}
            name={state.name}
            number={state.number}
          />
          <form className={styles["payment-form"]}>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <Input
              type="tel"
              name="number"
              placeholder="Card Number"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />

            <Input
              type="tel"
              name="expiry"
              placeholder="Valid Thru"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <Input
              type="text"
              name="cvc"
              placeholder="CVC"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </form>
        </div>
        :
        (payment === 'aliPay' ?
          <div style={{ textAlign: 'center', marginTop: '10px' }} >
            <Image src={AliPay} height='500px' />
          </div>
          :
          <div style={{ textAlign: 'center', marginTop: '10px' }}>
            <Image src={WechatPay} height='450px' />
          </div>
        )
      }
    </div>
  );
}
