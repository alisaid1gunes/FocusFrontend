const singup = async (user) => {
    const settings = {
      method: 'POST',
      body: user
    };
  
    const response = await fetch(
      `http://localhost:8000/api/users/auth/register`,
      settings
    );
    const data = await response.json();
    return data;
  };
  
  module.exports = singup;
  