import { User } from './user.model'

export class UserService {
  myUser = User

  getUser () {
    return this.myUser;
  }
}
