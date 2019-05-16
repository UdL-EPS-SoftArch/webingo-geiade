import {Resource} from 'angular4-hal-aot';
import {Player} from '../user/player';
import {Game} from '../game/game';

export class Card extends Resource {
  id: string;
  nums: number[][];
  price: number;
  // CANVIAR GAME I PLAYER ALS SEUS CORRESPONENTS OBJECTES
  game: Game;
  player: Player;
  uri: string;

  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }
}
