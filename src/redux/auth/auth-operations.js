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

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.logout();
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

export const current = createAsyncThunk(
  'auth/current',
  // из thunkAPI деструктуризируем rejectWithValue и getState
  // rejectWithValue - обрабатывает ошибки
  // getState - имеет доступ ко всему стейту
  async (_, { rejectWithValue, getState }) => {
    try {
      // получаем раздейл auth из стейта
      const { auth } = getState();
      console.log(auth);
      // делаем запрос userCurrent с токеном из auth
      const result = await api.userCurrent(auth.token);
      console.log(result);
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
