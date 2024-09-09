import axios from 'axios';

// render.com Java Spring
// const API_URL = 'https://chess-online-1.onrender.com'; 
// ngrok
// const API_URL = 'https://9ee2-91-102-179-156.ngrok-free.app'; 
// localhost
// const API_URL = 'http://localhost:8000'; 

const API_URL = 'https://angrycheess-backend.onrender.com';


interface LoginResponse {
  token: string;
}

interface LoginCredentials {
  username: string;
  password: string;
}


export const login = async (credentials: LoginCredentials): Promise<LoginResponse> => {
  const response = await axios.post<LoginResponse>(`${API_URL}/auth/login`, credentials);
  return response.data;
};


interface RegisterResponse {
  message: string;
}

interface RegisterCredentials {
  username: string;
  email: string;
  password: string;
}

export const register = async (credentials: RegisterCredentials): Promise<RegisterResponse> => {
  const response = await axios.post<RegisterResponse>(`${API_URL}/auth/register`, credentials);
  return response.data;
};


export const getInfo = async (token: string): Promise<string> => {
  const response = await axios.get<string>(`${API_URL}/auth/info`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};



export interface ReceptionResponces{
  id: number;
  name: string;
  photo_url: string;

  author_id: number;
  likes: number;
  stars: number;

  spirit_id: number;
  flavor_id: number;
  difficulty_id: number;
  ingredients_id: number[];

  steps: string;
}

interface ReceptionCredentials {
  name: string;
  spirit_id: number;
  flavor_id: number;
  difficulty_id: number;
  ingredients_id: number[];

  steps: string;
}





export const getReceptions = async (): Promise<ReceptionResponces[]> => {
  const response = await axios.get<Array<ReceptionResponces>>(`${API_URL}/reception/all`, {
  });
  return response.data;
};

export const getReception = async (id: number): Promise<ReceptionResponces> => {
  const response = await axios.get<ReceptionResponces>(`${API_URL}/reception/${id}`, {
  });
  return response.data;
};


export const addReception = async (token: string, reception: ReceptionCredentials, image: File): Promise<ReceptionResponces> => {

  const formData = new FormData();

  // Добавляем данные рецепта
  formData.append('name', reception.name);
  formData.append('spirit_id', reception.spirit_id.toString());
  formData.append('flavor_id', reception.flavor_id.toString());
  formData.append('difficulty_id', reception.difficulty_id.toString());
  formData.append('ingredients_id', JSON.stringify(reception.ingredients_id));
  formData.append('steps', reception.steps);

  // Добавляем изображение
  formData.append('image', image);

  const response = await axios.post<ReceptionResponces>(`${API_URL}/reception/add`, formData,
    {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};


// export const changePassword = async (token: string | undefined, newPassword: string) => {
//   const response = await axios.post(`${API_URL}/forgotPassword/changePassword`, { token, newPassword });
//   return response;
// };

// export const startSearchGame = async (token: string) => {
//   const response = await axios.post(`${API_URL}/requests/search`, {}, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return response.data;
// };

