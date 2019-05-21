import {Resource} from 'angular4-hal-aot';
import { Player} from '../user/player';

export class Invitation extends Resource {
  id: number;
  idGame: number;
  isUnderway: boolean;
  accepted: boolean;
  timeout: boolean;
  message: string;
  playerInvited: Player;
  playerWhoInvited: Player;
  uri: number;

  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }
}
