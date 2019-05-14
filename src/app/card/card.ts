import {Resource} from 'angular4-hal-aot';

export class Card extends Resource {
  id: string;
  nums: number[][];
  price: number;
  // CANVIAR GAME I PLAYER ALS SEUS CORRESPONENTS OBJECTES
  game: number;
  player: number;
  uri: string;

  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }
}
