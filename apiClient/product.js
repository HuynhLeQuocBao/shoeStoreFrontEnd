import axiosClient from './axiosClient';

export const productApi = {
  getAllProducts() {
    return axiosClient.get('/shoes/displayAllProducts');
  },
  getProductById(id) {
    return axiosClient.get(`/shoes/${id}`);
  }
};
