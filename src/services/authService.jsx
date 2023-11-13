export const isLogin = () => {
  // get token from localstorage
  const token = localStorage.getItem('token')
  // check if token is exist
  if (!token) {
    // if token is not exist, redirect to login page
    window.location.href = '/login'
  }

  return token
};

export const setLogout = () => {
  // Remove the token from localStorage
  localStorage.removeItem('token')

  window.location.href = '/login'
};

