import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from 'pages/HomePage/HomePage';
import LoginPage from 'pages/LoginPage/LoginPage';
import SignUpPage from 'pages/SignUpPage/SignUpPage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { current } from 'redux/auth/auth-operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<SignUpPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
