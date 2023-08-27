import { AxiosError } from 'axios';
import { api } from './api';

class UserService {
  static login = async (email: string, password: string) => {
    try {
      const { data } = await api.post('/user/adm/sign-in', { email, password });
      return { data };
    } catch (error) {
      const exception = error as AxiosError<{ message: string }>;
      return { error: exception.response?.data?.message };
    }
  };
}

export { UserService };
