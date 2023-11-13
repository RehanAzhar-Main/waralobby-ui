const TOKEN_KEY = 'user_token';

export const login = async (username, password) => {
  // Send a request to the authentication server
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (response.ok) {
    const data = await response.json();
    const token = data.token;

    // Store the token in localStorage
    localStorage.setItem(TOKEN_KEY, token);

    return true;
  } else {
    // Handle authentication error
    return false;
  }
};

export const logout = () => {
  // Remove the token from localStorage
  localStorage.removeItem(TOKEN_KEY);
};

export const isAuthenticated = () => {
  // Check if the token is present in localStorage
  const token = localStorage.getItem(TOKEN_KEY);
  return token !== null;
};