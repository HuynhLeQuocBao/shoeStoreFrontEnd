import axiosClient from './axiosClient';

export const orderApi = {
    getAllOrder() {
        return axiosClient.get('/customer/myOrder');
    },
    getOrderDetail(id) {
        return axiosClient.get(`/customer/myOrderDetail/${id}`);
    },
};