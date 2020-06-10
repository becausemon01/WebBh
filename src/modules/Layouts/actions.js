export const types = {
    USER_LOGIN: 'USER_LOGIN',
    LAYOUT_PATH: 'LAYOUT_PATH',
    SHOW_PRODUCTS: 'SHOW_PRODUCTS'
};

export function userLogin(payload) {
    return {type: types.USER_LOGIN, payload};
}
export function layoutPath(payload) {
    return {type: types.LAYOUT_PATH, payload};
}
export function showProducts(payload) {
    return {type: types.SHOW_PRODUCTS, payload};
}