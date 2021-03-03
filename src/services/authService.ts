import api from './api';

const baseUrl = 'https://www.cadastrosgpsp.com.br/GPSPPRODAPI/api/user/get';

interface ISignIn {
  username: string;
  password: string;
}

interface IUser {
  id: number;
  name: string;
  status: true;
  email: string;
}

export async function signin(params: ISignIn): Promise<{ user: IUser }> {
  const response = await api.get<IUser[]>(
    'https://www.cadastrosgpsp.com.br/GPSPPRODAPI/api/user/get',
    {
      params: {
        token: 'SGR4A5L6C7I8S9I10N-HAUS',
        autentication: true,
        ...params,
      },
    }
  );

  return {
    user: {
      id: response.data[0].id,
      name: response.data[0].name,
      email: response.data[0].email,
      status: response.data[0].status,
    },
  };
}
