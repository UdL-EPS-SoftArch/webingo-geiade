import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Game} from '../game';
import {GameService} from '../game.service';

@Component({
  selector: 'app-game-create',
  templateUrl: '../game-form/game-form.component.html'
})
export class GameCreateComponent implements OnInit {
  public game: Game;

  constructor(private router: Router,
              private gameService: GameService) {
  }

  ngOnInit() {
    this.game = new Game();
  }

  onSubmit(): void {
    this.gameService.create(this.game).subscribe(
     (game: Game) => this.router.navigate([game.uri]));
  }
}
