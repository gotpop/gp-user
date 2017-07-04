import {Injectable} from "@angular/core";
import { User } from './user.model';

@Injectable()
export class UserService {
  private userStore;
  private serverStore;

  constructor() { }

  makeUserModel() {
    return new User('', '', '','', '', '','', '', '');
  }

  setUserValue(val) {
    this.userStore = val;
  }

  getUserValue() {
    return this.userStore;
  }

  setServerValue(val) {
    this.serverStore = val;
  }

  getServerValue() {
    return this.serverStore;
  }
}
