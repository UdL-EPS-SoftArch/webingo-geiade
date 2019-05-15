import {Resource} from 'angular4-hal-aot';
import { Player} from "../user/player";

export class Invitation extends Resource {
  id: number;
  id_game: number;
  isUnderway: boolean;
  isAccepted: boolean;
  timeout: boolean;
  message: string;
  playerInvited: Player;
  playerWhoInvited: Player;
  //uri: string;


  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }
}
