import axiosClient from './axiosClient';

export const categoryApi = {
  getCatagory() {
    return axiosClient.get('/category');
  },
};
