import React from 'react';

const Home = React.lazy(() => import('Src/modules/Home'));
const Products = React.lazy(() => import('Src/modules/Products'));
const LienHe = React.lazy(() => import('Src/modules/LienHe'));
const ProductDetail = React.lazy(() => import('Src/modules/ProductDetail'));

export default [
    {
        state: 'home',
        path: '/home',
        exact: true,
        name: 'Home',
        component: Home,
        resources: []
    },
    {
        state: 'products',
        path: '/products',
        exact: true,
        name: 'Products',
        component: Products,
        resources: [{
            state: 'productsId',
            path: '/products/:id',
            exact: true,
            name: 'ProductsId',
            component: ProductDetail}]
        
    },
    {
        state: 'lienhe',
        path: '/lienhe',
        exact: true,
        name: 'LienHe',
        component: LienHe,
        resources: []

    }
];
