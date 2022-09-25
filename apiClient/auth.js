import axiosClient from './axiosClient';

export const authApi = {
  userLogin() {
    return axiosClient.post('auth/handleLogin');
  },
  googleLogin() {
    return axiosClient.post('auth/google');
  },
  facebookLogin() {
    return axiosClient.post('auth/facebook');
  },
  verifyToken() {
    return axiosClient.post('auth/verifyToken');
  },
  refreshToken() {
    return axiosClient.post('auth/refreshToken');
  },
};
