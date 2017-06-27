import {Injectable} from "@angular/core";
import { User } from './user.model';

@Injectable()
export class UserService {
  private myValue;

  constructor() { }

  makeModel() {
    return new User('', '', '');
  }

  setValue(val) {
    console.log(this.myValue);
    this.myValue = val;
  }

  getValue() {
    console.log(this.myValue);
    return this.myValue;
  }
}
