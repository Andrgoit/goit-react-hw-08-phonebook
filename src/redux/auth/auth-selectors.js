export const isLogin = state => {
  console.log(state.auth.isLogin);
  return state.auth.isLogin;
};

export const getUser = state => state.auth.user;
