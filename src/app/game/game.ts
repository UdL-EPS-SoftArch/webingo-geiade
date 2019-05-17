import { Resource } from 'angular4-hal-aot';
import {Player} from '../user/player';
import {Card} from '../card/card';

export class Game extends Resource {
  id: number;
  uri: string;
  name = '';
  finished: boolean;
  numberofplayers: number;
  nums: number[];
  linePrize: number;
  bingoPrize: number;
  lineWinner: Player;
  bingoWinner: Player;
  price: number;


  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
    console.log('------> game creat');
    console.log(Object.assign(this as any, values));
  }
}
