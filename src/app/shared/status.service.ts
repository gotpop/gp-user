import {Injectable} from "@angular/core";
import { Status } from './status.model';

@Injectable()
export class StatusService {
  private myValue;

  constructor() { }

  makeModel() {
    return new Status(false, false, false,false);
  }

  setValue(val) {
    console.log('Page status: ', this.myValue);
    this.myValue = val;
  }

  getValue() {
    console.log('Page status:', this.myValue);
    return this.myValue;
  }
}
