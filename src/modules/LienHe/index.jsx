import React, {Component} from 'react';
import {Form,Upload, Input, Button, Radio, Avatar} from 'antd';
import {UploadOutlined} from '@ant-design/icons';
import {connect} from 'react-redux';
import {FormInstance} from 'antd/lib/form';

// Actions
import {layoutPath} from 'Layouts/actions';

// Api
import * as userService from 'Src/services/user';

const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 8}
};

const tailLayout = {
    wrapperCol: {offset: 8, span: 16}
};

const normFile = e => {
    console.log('Upload event:', e);
    
    return e && e.fileList;
};

const fileList = [];

const props = {
    name: 'logo',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    listType: 'picture',
    onChange(info) {
        console.log(info);
    }
};

class LienHe extends Component {
    formRef = React.createRef();

    constructor(props) {
        super(props);
        
        this.state = {
            userProfile: {},
            username: '',
            email:'a'
        };
    }

    componentDidMount() {
        this.props.layoutPath({
            path: 'lienhe'
        });
        this.getUserProfile();
    }

    getUserProfile = async () =>{
        this.formRef.current.setFieldsValue({
            username: 'hello world',
            email: 'email@gmail.com',
            gioiTinh: 'a'
        });

        console.log(this.props.user.id);
        const getProfile = await userService.getProfile({
            id: this.props.user.id
        });

        if (getProfile) {
            console.log(getProfile);
            if (getProfile.data.data) {
                this.formRef.current.setFieldsValue({
                    username: 'hello world',
                    email: 'email@gmail.com',
                    gioiTinh: 'a'
                });

                this.setState({
                    userProfile: getProfile.data.data
                },
                ()=>{
                    console.log(this.state.userProfile.email);
                });
            }
        } 

    }

    onFinish1 = value => {
        console.log(value);
    }

    handleNameChange = e => {

        this.setState({
            username : e.target.value
        });
    }

    handleEmailChange = e => {

        this.setState({
            email : e.target.value
        });
    }

    render() {

        let {userProfile} = this.state;

        let {email} = userProfile;

        console.log(userProfile.email);

        return (
            <div>
                <div> 
                    <h1>
                        <span style={{
                            marginLeft: '40%',
                            fontSize: '35px'
                        }}>
                        Thông tin tài khoản
                        </span>
                    </h1>
                </div>

                <div className="layout-user">   
                    <div style={{
                        marginLeft: '40%',
                        marginBottom:'16px'
                                    
                    }}>

                        <Avatar style={{height:'250px',width:'250px'}}>U</Avatar>
                    </div>

                    <Form
                        {...layout}
                        ref={this.formRef}
                        name="basic"
                        initialValues={{remember: true}}
                        onFinish={this.onFinish1}
                        onFinishFailed={this.onFinishFailed1}

                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{required: true, message: 'Please input your username!'}]}
                        >
                            <Input defaultValue="User"  disabled={true} />
                        </Form.Item>
            
                        <Form.Item
                            label="Email"
                            name="email"
                            initialvalue= {this.state.email}
                        >
                            <Input  value={this.state.email} />
                        </Form.Item>
  
                        <Form.Item name="gioiTinh" label="Giới tính" defaultValue='a'>
                            <Radio.Group>
                                <Radio value="a">Nam</Radio>
                                <Radio value="b">Nữ</Radio>
                    
                            </Radio.Group>
                        </Form.Item>

                        <Form.Item
                            label="Upload avatar"

                        >
                            <Upload {...props}>
                                <Button>
                                    <UploadOutlined /> Click Upload
                                </Button>
                            </Upload>
                        </Form.Item>
                    
                    </Form>

                    <div style={{
                        
                        borderBottom: '1px solid black',
                        width: '50%',                    
                        marginLeft: '23%'                
                    }} 
                    />

                    <div style={{
                        margin: '15px 0'                   
                    }}>
                        <h2>
                            <span style={{
                                marginLeft: '33%'
                            }}>
                                Thay đổi mật khẩu 
                                <small> 
                                    (Bỏ trống nếu không đổi)
                                </small>
                            </span>
                        </h2>
                    </div>

                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{remember: true}}
                        onFinish={this.onFinish2}
                        onFinishFailed={this.onFinishFailed2}
                    >     

                        <Form.Item
                            name="password"
                            label="Mật khẩu hiện tại "
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
                            name="passwordNew"
                            label="Mật khẩu mới"
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
                            label="Xác nhận mật khẩu"
                            dependencies={['passwordNew']}
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
                            Lưu
                            </Button>
                        </Form.Item>
                    </Form> 
                </div>
     
            </div>   
        );
    }
}

const mapStateToProp = state => {
    return {
        user: state.Layouts.layoutReducer.userLogin
    };
};

const mapDispatchToProps = {
    layoutPath
};

export default connect(mapStateToProp, mapDispatchToProps)(LienHe);