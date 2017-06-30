import {Injectable} from "@angular/core";
import { User } from './user.model';
import { Status } from './status.model';

@Injectable()
export class UserService {
  private userStore:object;
  private statusStore:object;
  private serverStore:object;

  constructor() { }

  makeUserModel() {
    return new User('', '', '','', '', '','', '', '');
  }

  makeStatusModel() {
    return new Status(true, false, false, false, false);
  }

  setUserValue(val:object) {
    this.userStore = val;
  }

  getUserValue() {
    return this.userStore;
  }




  setStatusValue(val:object) {
    console.log('set', this.statusStore)
    this.statusStore = val;
  }

  getStatusValue() {
    console.log('get', this.statusStore)
    return this.statusStore;
  }





  setServerValue(val:object) {
    this.serverStore = val;
  }

  getServerValue() {
    return this.serverStore;
  }
}
