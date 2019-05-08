import {Resource} from 'angular4-hal-aot';

export class Card extends Resource {
  id: string;
  numbers: number[][];
  price: number;
  // CANVIAR GAME I PLAYER ALS SEUS CORRESPONENTS OBJECTES
  game: number;
  player: number;
}
