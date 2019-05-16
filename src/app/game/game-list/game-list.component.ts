import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Game} from '../game';
import {GameService} from '../game.service';
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';
import {Player} from '../../user/player';


@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html'
})
export class GameListComponent implements OnInit {
  public games: Game [];
  public totalGames = 0;
  public player: Player;

  constructor(
    public router: Router,
    private gameService: GameService,
    private authenticationService: AuthenticationBasicService
  ) {}

  ngOnInit() {
    this.gameService.getAll()
      .subscribe(
        games => {
          this.games = games;
          this.totalGames = this.games.length;
        });
    this.player = this.authenticationService.getCurrentUser();
  }

  showSearchResults(games) {
    this.games = games;
  }
}
