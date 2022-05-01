const logout = async (value) => {
  const settings = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(value),
  };

  const response = await fetch(
    `http://localhost:8000/api/users/auth/logout`,
    settings
  );
  const data = await response.json();
  if (data.success) {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('username');
  }
  return data;
};

module.exports = logout;
