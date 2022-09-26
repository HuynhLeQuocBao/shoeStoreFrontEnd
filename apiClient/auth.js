import axiosClient from './axiosClient';

export const authApi = {
  userLogin(data) {
    return axiosClient.post('auth/handleLogin', data);
  },
  verifyToken(data) {
    return axiosClient.post('auth/verifyToken', data);
  },
  refreshToken(data) {
    return axiosClient.post('auth/refreshToken', data);
  },
};
