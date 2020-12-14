export class UserModel {
    id: string;
    sub: string;

    constructor(p: any) {
      Object.assign(this, p);
    }
}