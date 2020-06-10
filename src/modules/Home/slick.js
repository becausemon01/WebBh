// Libraries
import React , {Component} from 'react';
import Slider from 'react-slick';
import  {Col} from 'antd';
import {connect} from 'react-redux';

// Asset
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class Slick extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listSlide : [
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

    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 10,
            autoplaySpeed: 3000
            // cssEase: 'linear'
        };
        
        console.log(this.props.products);

        const {listSlide} = this.state;

        const {products} = this.props;

        const ItemProduct = products.map((product, index)=>{
            return <div className='b' key={product.id}>
                <Col>
                    <img
                        src={product.image}
                        alt={product.name}
                        className="img-slide"
                    />
                </Col>
            </div>;
            
        });

        const itemListSlide =  listSlide.map((item, index)=>{
            return <div className='b' key={item.id}>
                <Col>
                    <img
                        src={item.image}
                        alt={item.name}
                        className="img-slide"
                    />
                </Col>
            </div>;

        });

        return (
            <div>
                <Slider {...settings}>
                    {itemListSlide}
                </Slider>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        products : state.Layouts.layoutReducer.products
    };
};

export default connect(mapStateToProps, null)(Slick);