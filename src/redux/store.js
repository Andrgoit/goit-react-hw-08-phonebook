import { configureStore } from '@reduxjs/toolkit';
import { filterSlice, contactSlice } from './slice';
import authSlice from 'redux/auth/auth-slice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    contacts: contactSlice.reducer,
    filter: filterSlice.reducer,
  },
});

export default store;
