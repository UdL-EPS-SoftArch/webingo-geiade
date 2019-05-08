import { Resource } from 'angular4-hal-aot';
import {User} from "../login-basic/user";

export class Game extends Resource {
  id: bigint;
  uri: string;
  name = '';
  isFinished: boolean;
  numberofplayers: number;
  nums: number[];
  linePrize: number;
  bingoPrize: number;
  lineWinner: User;
  bingoWinner: User;
  price: number;


  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }
}
