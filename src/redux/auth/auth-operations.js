import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'services/auth';

export const signup = createAsyncThunk(
  'auth/signup',
  // data - это данные из формы регистрации
  // из thunkAPI деструктуризируем rejectWithValue для регистрации ошибок
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.signup(data);
      return result;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.message,
      };
      rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',

  async (data, { rejectWithValue }) => {
    try {
      const result = await api.login(data);
      return result;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.message,
      };
      rejectWithValue(error);
    }
  }
);