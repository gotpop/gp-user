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
    this.myValue = val;
  }

  getValue() {
    console.log('Nuts!');
    return this.myValue;
  }
}
