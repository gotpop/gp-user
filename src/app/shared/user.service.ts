import {Injectable} from "@angular/core";
import { User } from './user.model';
import { Status } from './status.model';

@Injectable()
export class UserService {
  private userStore;
  private statusStore;
  private serverStore;

  constructor() { }

  makeUserModel() {
    return new User('', '', '','', '', '','', '', '');
  }

  makeStatusModel() {
    return new Status(true, false, false, false, false);
  }

  setUserValue(val) {
    this.userStore = val;
  }

  getUserValue() {
    return this.userStore;
  }

  setStatusValue(val) {
    this.statusStore = val;
  }

  getStatusValue() {
    return this.statusStore;
  }

  setServerValue(val) {
    this.serverStore = val;
  }

  getServerValue() {
    return this.serverStore;
  }
}
