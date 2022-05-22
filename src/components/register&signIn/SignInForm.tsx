import React, { useEffect } from 'react'
import styles from './SignInForm.module.css'
import { Form, Input, Button, Checkbox } from 'antd';
import { useNavigate } from 'react-router';
import { useDispatchWithType, useSelectorWithType } from '../../redux/hooks';
import { logIn } from '../../redux/slices/userSlice';

export const SignInForm = () => {
    const { username, userList } = useSelectorWithType(state => state.user);
    const dispatch = useDispatchWithType();
    const navigate = useNavigate();

    useEffect(() => {
        if (username)
            navigate('/')
    }, [navigate, username])

    const onFinish = (values: any) => {
        let usernameTemp;
        userList.forEach((i) => {
            if (i.username === values.username && i.password === values.password) {
                usernameTemp = i.username;
            }
        })
        if (usernameTemp) {
            dispatch(logIn(values.username));
        } else {
            alert("账号或密码错误！");
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        // console.log('Failed:', errorInfo);
    };
    return (
        <Form className={styles['register-form']}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >

            <div className={styles.line1}>
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

            </div>
            <div className={styles.line2}>
                <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </div>
        </Form>
    )
}
