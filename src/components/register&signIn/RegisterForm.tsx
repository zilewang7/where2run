import React from 'react'
import styles from './RegisterForm.module.css'
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router';
import { useDispatchWithType, useSelectorWithType } from '../../redux/hooks';
import { addUser } from '../../redux/slices/userSlice';

export const RegisterForm = () => {
    const dispatch = useDispatchWithType()
    const navigate = useNavigate();
    const { userList } = useSelectorWithType(state => state.user);


    const onFinish = (values: any) => {
        let sameCheck = false;
        userList.forEach((i) => {
            if (i.username === values.username) {
                sameCheck = true;
            }
        })

        if (sameCheck) {
            alert("此用户名已存在！")
        } else {
            const userInfo = {
                username: values.username,
                password: values.password
            }
            dispatch(addUser(userInfo));
            alert("注册成功！")
            navigate('/signIn');
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

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </div>
        </Form>
    )
}
