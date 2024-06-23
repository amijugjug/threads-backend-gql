export interface CreateUserPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
export interface LoginUserPayload {
  email: string;
  password: string;
}
