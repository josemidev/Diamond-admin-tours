export interface SignInResponse {
  statusCode: number;
  message: string;
  data: Data;
}

export interface SignInRequest {
  username: string;
  password: string;
}

interface Data {
  user: User;
  access_token: string;
}

interface User {
  name: string;
  username: string;
  roles: string[];
}
