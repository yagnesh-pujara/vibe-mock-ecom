import client from './client';

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterData extends LoginCredentials {
  name: string;
}

export const authApi = {
  login: async (credentials: LoginCredentials) => {
    const { data } = await client.post('/auth/login', credentials);
    localStorage.setItem('token', data.token);
    return data;
  },

  register: async (userData: RegisterData) => {
    const { data } = await client.post('/auth/register', userData);
    return data;
  },

  logout: () => {
    localStorage.removeItem('token');
  }
};