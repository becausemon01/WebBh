// Libraries
import React, {Component} from 'react';
import {Form, Input, Button, Radio} from 'antd';

// API
import * as userService from 'Src/services/user';

const layout = {
    labelCol: {span: 24},
    wrapperCol: {span: 24}
};

const tailLayout = {
    wrapperCol: {offset: 8, span: 16}
};

class Register extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            username :'',
            email: '',
            gt: '',
            password: ''
        };
    }

    onFinish =  (value) => {
        console.log(value);

        this.setState({
            username: value.username,
            email: value.email,
            gt: value.gt,
            password: value.password
        },
        async () =>{
            const signup = await userService.signup({
                email: this.state.email,
                password: this.state.password,
                name: this.state.username
            });

            if (signup) {
                console.log(signup);
                if (signup.data && signup.data.success) {
                    this.props.history.push('/login');
                    this.props.callback({
                        isSignup: true
                    });
                }
            }
            else {
                console.log('failed');
            }
        }
        );
    }

    ononFinishFailed = () => { }

    render() {
        return (
            <Form
                {...layout}
                name="basic"
                initialValues={{remember: true}}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{required: true, message: 'Please input your username!'}]}
                >
                    <Input />
                </Form.Item>
                
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{required: true, message: 'Please input your email!'}]}
                >
                    <Input />
                </Form.Item>
      
                <Form.Item name="gt" label="Giới tính">
                    <Radio.Group>
                        <Radio value="Nam">Nam</Radio>
                        <Radio value="Nu">Nữ</Radio>
                        
                    </Radio.Group>
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!'
                        }
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!'
                        },
                        ({getFieldValue}) => ({
                            validator(rule, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
        
                                return Promise.reject('The two passwords that you entered do not match!');
                            }
                        })
                    ]}
                >
                    <Input.Password />
                </Form.Item>
      
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                Submit
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default Register;
