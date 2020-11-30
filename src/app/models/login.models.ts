export class LoginModel {
    username: string;
    email: string;
    password: string;

    constructor(p: any) {
      Object.assign(this, p);
    }
  }