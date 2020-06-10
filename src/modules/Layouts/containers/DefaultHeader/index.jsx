// Libraries
import React, {Component} from 'react';
import {Layout, Avatar, Menu, Drawer, Tabs, Input,  Dropdown} from 'antd';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

// Icon
import {YuqueOutlined, UserOutlined, ShoppingCartOutlined,AudioOutlined, DownOutlined} from '@ant-design/icons';

// Components
import Login from 'Src/modules/Layouts/containers/DefaultHeader/components/Login';
import Register from 'Src/modules/Layouts/containers/DefaultHeader/components/Register';

const {TabPane} = Tabs;
const {Search} = Input;

const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1890ff'
        }}
    />
);

const menu = (
    <Menu >
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                Thông tin tài khoản
            </a>
        </Menu.Item>

        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                Đăng xuất
            </a>
        </Menu.Item>
        
    </Menu>
);

class DefaultHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search : '',
            drawer: '2'
        };
    }
    
    state = {
        isOpenDrawer: false
    }

    onOpenDrawer = () => {
        this.setState({
            isOpenDrawer: true
        });
    }

    onClose = () => {
        this.setState({
            isOpenDrawer: false
        });
    }

    suffix = () =>{
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1890ff'
            }}
        />;
    }

    onChange = e => {
        e.preventDefault();
        this.setState({
            search: e.target.value
        });
    }

    callbackRegister = (value) => {
        const {isSignup = false} = value;

        if (isSignup) {
            this.setState({
                drawer: '1'
            });
        }
    }

    render() {
        const {isOpenDrawer = false} = this.state;

        return (
            <Layout.Header className='default-header'>
                
                <div className='flex-row '>
                    <div className="flex-row logo-header">
                        <YuqueOutlined  
                            style={{
                                fontSize: 40,
                                color: '#fff',
                                paddingRight: '5px',
                                borderRight: '3px solid #fff'
                            }}
                        />
                    </div> 
                    <div className="flex-row tittle-header">
                        <Link to='/home'>
                    Tshop
                        </Link>
                    </div>            
                </div>
                <div className='flex-row'>
                    <Search
                        autoComplete="off"
                        placeholder="input search text"
                        enterButton="Search"
                        size="middle"
                        name='search'
                        value={this.state.search}
                        suffix={suffix}
                        onChange = {this.onChange}
                        style={{width:'450px'}}
                    />
                </div>

                <div className='flex-row' >
                    <Menu theme="dark" mode="horizontal" selectedKeys={this.props.path} style={{
                        marginRight: '50px'
                    }}>
                        <Menu.Item key="home" >
                            <Link to='/home'>
                                TRANG CHỦ
                            </Link>
                        </Menu.Item>

                        <Menu.Item key="products" >
                            <Link to='/products'>
                                SẢN PHẨM
                            </Link>
                        </Menu.Item>

                        <Menu.Item key="lienhe">
                            <Link to="/lienhe">
                                LIÊN HỆ
                            </Link>
                        </Menu.Item>
                    </Menu>

                    <div className='name-user'>Tài khoản</div>

                    <Dropdown overlay={menu} disabled={true}> 
                        <Avatar size="default" icon={<UserOutlined />} onClick={this.onOpenDrawer} style={{cursor: 'pointer'}}>
                            <DownOutlined style={{marginLeft:'50px'}} />
                        </Avatar> 
                        
                    </Dropdown>

                    <ShoppingCartOutlined style={{
                        fontSize: '32px',
                        color: '#fff'   ,
                        paddingLeft: '10px' ,
                        cursor: 'pointer'    
                    }} />
                </div>
                
                <Drawer  
                    width={300}
                    title="Chào Mừng Khách Hàng"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={isOpenDrawer}
                >
                    <Tabs   defaultActiveKey='2' >
                        <TabPane tab="Login" key="1">
                            <Login />
                        </TabPane>
                        <TabPane tab="Register" key="2">
                            <Register callback={this.callbackRegister} />
                        </TabPane>
                    </Tabs>
                </Drawer>
            </Layout.Header>
        );
    }
}

const mapStateToProp = state =>{
    return {
        path: state.Layouts.layoutReducer.path
    };
};

const mapDispatchToProps = {

};

export default connect(mapStateToProp, mapDispatchToProps)(DefaultHeader);