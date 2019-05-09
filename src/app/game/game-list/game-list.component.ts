import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Game} from "../game";
import {forkJoin} from "rxjs";
import {GameService} from "../game.service";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html'
})
export class GameListComponent implements OnInit {
  public games: Game [];
  public totalGames = 0;

  constructor(
    public router: Router,
    private gameService: GameService,
  ) {}

  ngOnInit() {
    /*forkJoin(
      this.gameService.getAll()
    )*/
  }

  showSearchResults(games) {
    this.games = games;
  }
}
