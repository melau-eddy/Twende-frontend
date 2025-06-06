import axios, { AxiosError } from 'axios';
import { SignupFormData } from '../features/auth/SignupForm';
import { LoginData } from '../features/auth/LoginForm';
import { LoginAPI } from '../types/authTypes';

const BASE_URL = 'http://127.0.0.1:3500/north-rift/v1';

export const signupUser = async (userData: SignupFormData) => {
  try {
    const user = await axios.post(`${BASE_URL}/users/create`, userData);
    return user.data;
  } catch (error) {
    if (error instanceof Error) {
      throw error.message;
    }
    console.error(error);
  }
};



export const loginUser = async (loginData: LoginData) => {
  try {
    const res = await axios.post<LoginAPI>(`${BASE_URL}/users/login`, loginData);
    const user = res.data.data;
    localStorage.setItem('accessToken', user.token);

    return user.user;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error('Invalid phone number or password');
    }
    throw error;
  }
};
