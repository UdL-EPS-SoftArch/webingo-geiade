import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from '../game.service';
import { Game } from '../game';
import {Player} from "../../user/player";

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html'
})
export class GameDetailComponent implements OnInit {
  public game: Game = new Game();

  constructor(private route: ActivatedRoute,
              private gameService: GameService,
              private router: Router) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.gameService.get(id).subscribe(
      game => {
        this.game = game;
        this.game.getRelation(Player,"bingoWinner").subscribe(
          bingoWinner => this.game.bingoWinner = bingoWinner
        );
        this.game.getRelation(Player,"lineWinner").subscribe(
          lineWinner => this.game.lineWinner = lineWinner
        );
      });
  }

  public delete() {
    this.gameService.delete(this.game).subscribe(
      () => this.router.navigate(['games']));
  }
}
