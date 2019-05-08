import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
//import { PlayerService } from '../player.service';
//import { AdminService } from '../admin.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html'
})
export class GameListComponent implements OnInit {
  public games: any [];
  public totalGames = 0;

  constructor(
    public router: Router,
    //private playerService: PlayerService,
    //private adminService: AdminService
    ) {
  }

  ngOnInit() {

  }

  showSearchResults(games) {
    this.games = games;
  }
}
