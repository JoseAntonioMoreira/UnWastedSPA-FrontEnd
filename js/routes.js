export const routes = {
    home: {
        path: '/',
        controller: 'homeController'
    },
    shop: {
        path: '/shops',
        controller: 'shopController'
    },
    products: {
        path: '/products',
        controller: 'storeFrontController'
    },
    currentPath: {
        path: '',
        controller: ''
    },
    shopDetails: {
        path: '/shop/:id',
        controller: 'shopDetailsController'
    },
    
};
