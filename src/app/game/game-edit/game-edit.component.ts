import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { GameService } from '../game.service';
import {Game} from "../game";

@Component({
  selector: 'app-game-edit',
  templateUrl: '../game-form/game-form.component.html'
})
export class GameEditComponent implements OnInit {
  public game: Game = new Game();
  constructor(private route: ActivatedRoute,
              private router: Router,
              private gameService: GameService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.gameService.get(id).subscribe(
      game => {
        this.game = game;
        console.log('------> JOC');
        console.log(this.game);
      }
    );
  }

  onSubmit(): void {
    this.gameService.update(this.game)
      .subscribe(
        (game: Game) => this.router.navigate([game.uri]));
  }
}
