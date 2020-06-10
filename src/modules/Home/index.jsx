// Librariea

import React, {Component} from 'react';
import {Row, Col, Divider} from 'antd';
import {connect} from 'react-redux';

// component
import Slick from 'Src/modules/Home/slick';

// actions
import {layoutPath} from 'Layouts/actions';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listSilde : [
                {
                    id:1,
                    name : 'Galaxy A51',
                    image: 'https://cdn.tgdd.vn/2020/06/banner/800-170-800x170-23.png'
                },
                {
                    id:2,
                    name : 'Nokia 5.3',
                    image: 'https://cdn.tgdd.vn/2020/06/banner/800-170-800x170-22.png'
                },
                {
                    id:3,
                    name : 'Iphone 7',
                    image: 'https://cdn.tgdd.vn/2020/05/banner/800-170-800x170-56.png'
                },
                {
                    id:4,
                    name : 'Vsmart Joy 3',
                    image: 'https://cdn.tgdd.vn/2020/05/banner/800-170-800x170-72.png'
                },
                {
                    id:5,
                    name : 'Vivo',
                    image: 'https://cdn.tgdd.vn/2020/06/banner/800-170-800x170-24.png'
                },
                {
                    id:6,
                    name : 'Redmi note 8',
                    image: 'https://cdn.tgdd.vn/2020/06/banner/800-170-800x170-10.png'
                }  
            ]
        };
    }
    
    componentDidMount() {
        this.props.layoutPath({
            path: 'home'
        });
    }

    render() {
        return (
            <div>

                <div className="site-layout-content">

                    { // <Divider orientation="center" style={{color: '#333', fontWeight: 'normal'}}>
                    //     DANH SÁCH SẢN PHẨM
                    // </Divider>
                    }
                
                    <Row style={{
                        height: '250px',
                        backgroundColor: '#f7f434'
                    }}>
                        <Col span={6} push={17}>
                            <div >
                                <img
                                    src='https://cdn.tgdd.vn/Products/Images/42/217936/Feature/s20-plus-ft-km-720x333.jpg'
                                    alt='a'
                                    className="img-slide"
                                    style={{width:'390px', marginTop: '16px'}}
                                />
                            </div>
                        </Col>
                        <Col span={17} pull={6}>
                            <div className="site-layout-slide">
                                <Slick />
                            </div>
                        </Col>
                    </Row>,
                    <Row style={{marginLeft: '57px'}}>
                        <Col span={3}>
                            <div className='menu-brand'>
                                <img src="//cdn.tgdd.vn/Brand/1/iPhone-(Apple)42-b_16.jpg" 
                                    className='menu-brand-image'
                                />
                            </div>
                        </Col>
                        <Col span={3}>
                            <div className='menu-brand'>
                                <img src="//cdn.tgdd.vn/Brand/1/Samsung42-b_25.jpg" 
                                    className='menu-brand-image'
                                />
                            </div>
                        </Col>
                        <Col span={3}>
                            <div className='menu-brand'>
                                <img src="//cdn.tgdd.vn/Brand/1/OPPO42-b_9.png" 
                                    className='menu-brand-image'
                                />
                            </div>
                        </Col>
                        <Col span={3}>
                            <div className='menu-brand'>
                                <img src="//cdn.tgdd.vn/Brand/1/Xiaomi42-b_45.jpg" 
                                    className='menu-brand-image'
                                />
                            </div>
                        </Col>
                        <Col span={3}>
                            <div className='menu-brand'>
                                <img src="//cdn.tgdd.vn/Brand/1/Vivo42-b_50.jpg" 
                                    className='menu-brand-image'
                                />
                            </div>
                        </Col>
                        <Col span={3}>
                            <div className='menu-brand'>
                                <img src="//cdn.tgdd.vn/Brand/1/Realme42-b_37.png" 
                                    className='menu-brand-image'
                                />
                            </div>
                        </Col>
                        <Col span={3}>
                            <div className='menu-brand'>
                                <img src="https://cdn.tgdd.vn/Brand/1/Vsmart42-b_40.png" 
                                    className='menu-brand-image'
                                />
                            </div>
                        </Col>
                        <Col span={3}>
                            <div className='menu-brand'>
                                <div className='menu-brand-image menu-text'>Xem Thêm</div>
                            </div>
                        </Col>
                    </Row>
                    
                    <Divider orientation="center" style={{color: '#333', fontWeight: 'normal'}}>
                        <div style={{fontWeight: 600,
                            fontSize: '26px',
                            color: 'blue'}}>
                            DANH SÁCH SẢN PHẨM
                        </div>
                    </Divider>
                    <Row justify="space-around">
                        <Col span={4} className='item'>
                            <img
                                src="https://cdn.tgdd.vn/Products/Images/42/214924/xiaomi-redmi-note-9s-4gb-green-400x460-400x400.jpg"
                                alt=""
                                className="img-fluid"
                            />
                            <h3>Iphone</h3>
                            <div className="price">
                                <span>
                                40.490.000₫
                                </span>
                            </div>
                            <div className='rating-result' />
                            <div className='describe'>
                                <p>
                                Tặng 2 suất mua Đồng hồ thời trang giảm 40% (không áp dụng thêm khuyến mãi khác)
                                </p>
                            </div>
                        </Col>
                        
                        <Col span={4} className='item'>
                            <img
                                src="https://cdn.tgdd.vn/Products/Images/42/214924/xiaomi-redmi-note-9s-4gb-green-400x460-400x400.jpg"
                                alt=""
                                className="img-fluid"
                            />
                            <h3>Iphone</h3>
                            <div className="price">
                                <span>
                                40.490.000₫
                                </span>
                            </div>
                            <div className='rating-result' />
                            <div className='describe'>
                                <p>
                                Tặng 2 suất mua Đồng hồ thời trang giảm 40% (không áp dụng thêm khuyến mãi khác)
                                </p>
                            </div>
                        </Col>
                        
                        <Col span={4} className='item'>
                            <img
                                src="https://cdn.tgdd.vn/Products/Images/42/214924/xiaomi-redmi-note-9s-4gb-green-400x460-400x400.jpg"
                                alt=""
                                className="img-fluid"
                            />
                            <h3>Iphone</h3>
                            <div className="price">
                                <span>
                                40.490.000₫
                                </span>
                            </div>
                            <div className='rating-result' />
                            <div className='describe'>
                                <p>
                                Tặng 2 suất mua Đồng hồ thời trang giảm 40% (không áp dụng thêm khuyến mãi khác)
                                </p>
                            </div>
                        </Col>
                        
                        <Col span={4} className='item'>
                            <img
                                src="https://cdn.tgdd.vn/Products/Images/42/214924/xiaomi-redmi-note-9s-4gb-green-400x460-400x400.jpg"
                                alt=""
                                className="img-fluid"
                            />
                            <h3>Iphone</h3>
                            <div className="price">
                                <span>
                                40.490.000₫
                                </span>
                            </div>
                            <div className='rating-result' />
                            <div className='describe'>
                                <p>
                                Tặng 2 suất mua Đồng hồ thời trang giảm 40% (không áp dụng thêm khuyến mãi khác)
                                </p>
                            </div>
                        </Col>
                        
                        <Col span={4} className='item'>
                            <img
                                src="https://cdn.tgdd.vn/Products/Images/42/214924/xiaomi-redmi-note-9s-4gb-green-400x460-400x400.jpg"
                                alt=""
                                className="img-fluid"
                            />
                            <h3>Iphone</h3>
                            <div className="price">
                                <span>
                                40.490.000₫
                                </span>
                            </div>
                            <div className='rating-result' />
                            <div className='describe'>
                                <p>
                                Tặng 2 suất mua Đồng hồ thời trang giảm 40% (không áp dụng thêm khuyến mãi khác)
                                </p>
                            </div>
                        </Col>
          
                    </Row>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        products : state.layouts.layoutReducer.products
    };
};

const mapDispatchToProp = {
    layoutPath
};

export default connect(null,mapDispatchToProp)(Home);