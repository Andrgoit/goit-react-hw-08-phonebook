import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLogin } from 'redux/auth/auth-selectors';

export default function PrivateRoute() {
  const isLogining = useSelector(isLogin);

  if (!isLogining) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
