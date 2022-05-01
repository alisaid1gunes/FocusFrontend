const login = async (value) => {
  const settings = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(value),
  };

  const response = await fetch(
    `http://localhost:8000/api/users/auth/login`,
    settings
  );
  const data = await response.json();
  if (data.success) {
    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);
    localStorage.setItem('username', data.username);
  }
  return data;
};

module.exports = login;
