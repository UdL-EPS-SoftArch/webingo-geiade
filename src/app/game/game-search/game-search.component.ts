import { Component, Input, EventEmitter, Output } from '@angular/core';
//import { PlayerService } from '../player.service';
//import { AdminService } from '../admin.service';
import { User } from '../../login-basic/user';
import { forkJoin } from 'rxjs';
import {Game} from "../game";

@Component({
  selector: 'app-game-search',
  templateUrl: './game-search.component.html'
})

export class GameSearchComponent {
  @Input() games: Game[];
  @Output() emitResults: EventEmitter<any> = new EventEmitter();

  constructor(//private playerService: PlayerService,
              //private adminService: AdminService
              ) {
  }

  /*performSearch(text: string): void {
    forkJoin(
      this.playerService.findByUsernameContaining(text),
      this.adminService.findByUsernameContaining(text))
      .subscribe(
        ([players, admins]) => {
          this.emitResults.emit(players.concat(admins).sort((a, b) => a.username.localeCompare(b.username)));
        });
  }*/
}

