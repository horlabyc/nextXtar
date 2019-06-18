export class Account {
  userName: string;
  email: string;
  userPhone: number;
  password: string;

  constructor(userName: string, email: string, userPhone: number, password: string) {
    this.userName = userName;
    this.email = email;
    this.userPhone = userPhone;
    this.password = password;
  }
}
