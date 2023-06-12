export interface UserModel {
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  email: string;
  phone: string;
  id: number;
  userType: string;
}

export interface LoginUserType {
  userName: string;
  password: string;
}
