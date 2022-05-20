import React from 'react'
import styles from './RegisterForm.module.css'
import { Form, Input, Button, Checkbox } from 'antd';

export const RegisterForm = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
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

                <Form.Item
                    label="Confirm"
                    name="confirm"
                    hasFeedback
                    rules={
                        [
                            { required: true, message: 'Please confirm your password!' },
                            (({ getFieldValue }) => ({
                                validator(_, values) {
                                    if (!values || getFieldValue("password") === values)
                                        return Promise.resolve();
                                    return Promise.reject("Confirm password wrong!");
                                }
                            }))
                        ]}
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
