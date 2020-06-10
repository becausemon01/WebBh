import {combineReducers} from 'redux';
import {produce} from 'immer';

import {types} from './actions';

const initialState = {
    userLogin: {},
    path: 'home',
    products : [
        {
            id: 1,
            Name : 'Iphone 7 plus',
            image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone11-purple-select-2019.png',
            price: 18000,
            inventory: 10
        },
        {
            id: 2,
            Name : 'Samsung Galaxy A51',
            image: 'https://didongviet.vn/pub/media/catalog/product//s/a/samsung-galaxy-a51_1.jpg',
            price: 6300,
            inventory: 12
        },
        {
            id: 3,
            Name : 'OPPO A9',
            image: 'https://cdn.tgdd.vn/Products/Images/42/202028/oppo-a9-400x460-1-400x460.png',
            price: 5900,
            inventory: 10
        },
        {
            id: 4,
            Name : 'Xiaomi Redmi Note 8',
            image : 'https://www.mobilepriceall.com/wp-content/uploads/2019/10/Xiaomi-Redmi-Note-8-Crystal-Blue.jpg',
            price: 8000,
            inventory: 15
        },
        {
            id: 5,
            Name : 'Vivo V19',
            image : 'https://cdn.tgdd.vn/Products/Images/42/217859/vivo-v19-xanh-400x460-400x460.png',
            price: 5000,
            inventory: 10
        }
    ]
};

const layoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.USER_LOGIN:
            return (produce(state,draftState => {
                draftState.userLogin = action.payload;
            }));
        case types.LAYOUT_PATH:
            return (produce(state,draftState => {
                draftState.path = action.payload.path;
            }));

        case types.SHOW_PRODUCTS:
            return (produce(state,draftState =>{
                draftState.products = action.payload.products;
            }));
        default:
            return {...state};
    }
};

export const reducer = combineReducers({
    layoutReducer: layoutReducer
});