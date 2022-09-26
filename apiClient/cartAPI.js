import axiosClient from './axiosClient';

export const cartApi = {
    getAllCart() {
        return axiosClient.get('/customer/cart');
    },
    addCart() {
        return axiosClient.post('/customer/cart/add');
    },
    updateCart(id, data) {
        return axiosClient.put(`/customer/cart/update/${id}`, data);
    },
    deleteCart(id) {
        return axiosClient.delete(`/customer/cart/delete/${id}`);
    },
};
