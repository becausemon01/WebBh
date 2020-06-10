// Libraries
import React, {Component} from 'react';
import {Form, Input, Button, Checkbox} from 'antd';
import {connect} from 'react-redux';

// css
import {UserOutlined, LockOutlined} from '@ant-design/icons';

// actions
import {userLogin} from 'Layouts/actions';

// Api
import * as userService from 'Src/services/user';

const layout = {
    labelCol: {span: 24},
    wrapperCol: {span: 24}
};
const tailLayout = {
    wrapperCol: {offset: 8, span: 16}
};

class Login extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            email: '',
            password:'',
            remember:false
        };
    }

    onFinish = (values) => {

        this.setState({
            email: values.email,
            password: values.password,
            remember: values.remember
        },
        async () => {
            const login = await userService.login({
                email: this.state.email,
                password: this.state.password
            });

            if (login) {
                console.log(login);
                if (login.data && login.data.success) {
                    localStorage.setItem('token',login.data.message.token);
                    this.props.userLogin({
                        id: login.data.message.user._id
                    });
                    history.push('/home');
                }
            }
        }
        );
    }

    ononFinishFailed = () => {

    }

    render() {
        return (
            <Form
                {...layout}
                name="normal_login"
                className="login-form"
                initialValues={{remember: true}}
                onFinish={this.onFinish}
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{required: true, message: 'Please input your Email!'}]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{required: true, message: 'Please input your Password!'}]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
      
                    <a className="login-form-forgot" href="" style={{float: 'right'}}>
                Forgot password
                    </a>
                </Form.Item>
      
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button" style={{width: '100%'}}>
                Log in
                    </Button>
              Or <a href="">register now!</a>
                </Form.Item>
            </Form> 
        );
    }
}

const mapDispatchToProps = {
    userLogin
};

export default connect(null, mapDispatchToProps)(Login);
