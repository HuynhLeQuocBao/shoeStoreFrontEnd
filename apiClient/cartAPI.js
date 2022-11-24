import axiosClient from './axiosClient';

export const cartApi = {
    getAllCart() {
        return axiosClient.get('/customer/cart');
    },
    addCart(data) {
        return axiosClient.post('/customer/cart/add', data);
    },
    updateCart(id, data) {
        return axiosClient.put(`/customer/cart/update/${id}`, data);
    },
    deleteCart(id) {
        return axiosClient.delete(`/customer/cart/delete/${id}`);
    },
    checkoutCart() {
        return axiosClient.post(`customer/checkout`);
    },
};