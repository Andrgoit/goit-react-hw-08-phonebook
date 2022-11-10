export const isLogin = state => {
  console.log(state.auth.isLogin);
  return state.auth.isLogin;
};

export const userName = state => state.auth.user.name;

export const userEmail = state => state.auth.user.email;
